import { Validation } from "../interfaces/validation";
import { ValidationError } from "../interfaces/validation-error";

export const validate = (
    { field, message, regex }: Validation,
    value: string,
): ValidationError | false => {
    const isError = !regex.test(value);
    if (isError) {
        return {
            field,
            message: message.replace("{FIELD}", field),
        };
    }
    return false;
};
