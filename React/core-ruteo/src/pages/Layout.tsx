import { Outlet } from "react-router-dom"
import { ToogleTheme } from "../components/ToogleTheme/ToogleTheme"

export const Layout = () => {
    return (
        <>
            <ToogleTheme/>
            <Outlet />            
        </>
    )
}