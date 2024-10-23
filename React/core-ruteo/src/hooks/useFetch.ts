import { useEffect, useState } from "react"
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
export const useFetch = <T>(url: string, headers: Record<string, string>, body?: any, method: HttpMethod = 'GET') => {
    const [state, setState] = useState<T>();
    const sendBody = body ? JSON.stringify(body) : undefined;
    const controllerSignal = new AbortController();
    headers = {
        accept: 'application/json',
        'content-type': 'application/json',
        ...headers,
    };
    setTimeout(() => {
        controllerSignal.abort();
    }, 4000);
    const options: RequestInit = { headers, method, body: sendBody, signal: controllerSignal.signal };
    if (!sendBody || method == 'GET')
        delete options.body;
    useEffect(() => {
        (
            async () => {
                const response = await fetch(url, options);
                const json: T = await response.json();
                setState(json);
            }
        )();
    }, [url]);

    return state;
}