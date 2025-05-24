import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import TodoListsPage from "../pages/TodoListsPage";
import { ROUTES } from "../constans/routes";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Home />
    },
    {
        path: ROUTES.TODOS,
        element: <TodoListsPage />
    }
]);