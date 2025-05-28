import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import TodoListsPage from "../pages/todosPage/TodoListsPage";
import { ROUTES } from "../constans/routes";
import { PostsListsPage } from "../pages/postsPage/PostsListsPage";
import { CommentsListsPage } from "../pages/commentsPage/CommentsListsPage";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Home />
    },
    {
        path: ROUTES.TODOS,
        element: <TodoListsPage />
    },
    {
        path: ROUTES.POSTS,
        element: <PostsListsPage />
    },
    {
        path: ROUTES.COMMENTS,
        element: <CommentsListsPage />
    }
]);