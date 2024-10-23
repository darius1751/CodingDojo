import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
    const [state, setState] = useState(initialState);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,) => {
        const { target } = e;
        const { name, value } = target;
        setState({ ...state, [name]: value });
    };
    return {
        state,
        setState,
        handleChange
    }
};
