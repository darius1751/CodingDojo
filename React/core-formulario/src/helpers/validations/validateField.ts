export type Validation = {
    isError: boolean;
    message: string;
}
export const validateField = (text: string, expression: RegExp, errorMessage: string): Validation => {
    const message = expression.test(text) ? false : errorMessage;
    return {
        isError: !!message,
        message: message || ""
    }
}