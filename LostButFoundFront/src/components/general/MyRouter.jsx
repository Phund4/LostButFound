import App from '../../pages/App';
import ConfirmEmail from '../../pages/ConfirmEmail/ConfirmEmail';
import Registration from '../../pages/Registration/Registration';
import Login from '../../pages/Login/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/registration",
        element: <Registration/>
    },
    {
        path: "/confirmemail",
        element: <ConfirmEmail/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]);

function MyRouter() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default MyRouter;
