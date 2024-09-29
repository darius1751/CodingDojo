import { FormEventHandler, ReactNode } from "react"

type FormType = {
    title?: string;
    children: ReactNode;
    handleSubmit?: FormEventHandler<HTMLFormElement>
}
export const Form = ({ children, handleSubmit, title }: FormType) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>{title}</h2>
            {children}
        </form>
    )
}