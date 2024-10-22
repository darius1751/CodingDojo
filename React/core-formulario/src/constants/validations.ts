import { Validation } from "../interfaces/validation";

export const validations: Validation[] = [
    {
        field: "name",
        message: `El {FIELD} debe tener al menos 4`,
        regex: /^[a-z]{4,}(\s)?([a-z]+)?$/i,
    },
    {
        field: "lastname",
        message: `El {FIELD} debe tener al menos 4`,
        regex: /^[a-z]{4,}(\s)?([a-z]+)?$/i,
    },
    {
        field: "email",
        message:
            `el {FIELD} es muy corto. Recuerda que en esos 10 caracteres se debe incluir el @ con una terminación digna de un superhéroe. `,
        regex: /^\w+@\w+\.[a-z]{3,}$/,
    },
    {
        field: "password",
        message: `el {FIELD} debe tener al menos 12 caracteres ultra secretos.`,
        regex: /^\w{12,}$/,
    },
];
