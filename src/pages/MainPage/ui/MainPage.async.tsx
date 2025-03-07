import { lazy } from "react";

const AsyncPage = lazy(() => import("./MainPage"));

export default AsyncPage;
