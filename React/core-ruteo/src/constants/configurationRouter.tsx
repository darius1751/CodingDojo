import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { HomePage } from "../pages/Home/HomePage";
import { RedirectHome } from "../pages/RedirectHome";
import { ArtPage } from "../pages/Art/ArtPage";
export const configurationRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<RedirectHome />} />
            <Route path="home" element={<HomePage />} />
            <Route path="art/:id" element={<ArtPage/>}/>
        </Route>
    )
);