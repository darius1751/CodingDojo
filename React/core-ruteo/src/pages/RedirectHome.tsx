import { Navigate } from "react-router-dom"

export const RedirectHome = () => {
    return <Navigate to={{pathname:'/home'}}/>
}