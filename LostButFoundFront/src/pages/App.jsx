import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/registration");
    }, )

    return (
        <>
            <h1>Redirecting to registration</h1>
        </>
    );
}

export default App;