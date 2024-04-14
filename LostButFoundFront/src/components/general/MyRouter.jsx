import App from '../../pages/App';
import ConfirmEmail from '../../pages/ConfirmEmail';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import RestorePassword from '../../pages/RestorePassword'
import UpdateUserPassword from '../../pages/UpdateUserPassword'
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
    },
    {
        path: "/restorepassword",
        element: <RestorePassword/>
    },
    {
        path: "/updateuserpassword",
        element: <UpdateUserPassword/>
    },
    {
        path: "/myprofile",
        element: <Profile/>
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
