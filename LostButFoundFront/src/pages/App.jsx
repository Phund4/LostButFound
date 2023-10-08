import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/registration");
    }, )

    return (
        <>
        </>
    );
}

export default App;