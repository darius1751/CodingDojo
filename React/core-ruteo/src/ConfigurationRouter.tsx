import { RouterProvider } from "react-router-dom"
import { configurationRouter } from "./constants/configurationRouter"

export const ConfigurationRouter = () => {
    return (
        <RouterProvider router={configurationRouter} />
    )
}