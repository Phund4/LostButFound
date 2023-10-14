import App from '../../pages/App';
import ConfirmEmail from '../../pages/ConfirmEmail/ConfirmEmail';
import Registration from '../../pages/Registration/Registration'
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
