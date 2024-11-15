import { useRouter } from "next/router";
import "./unauthorized.css";

const Unauthorized = () => {
    const router = useRouter();

    const handleOnLoginRedirect = () => {
        router.push("/login");
    };

    return (
        <div className="container">
            <div className="content">
                <p>You need to log in to access this page.</p>
                <button className="loginButton" onClick={handleOnLoginRedirect}>
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default Unauthorized;
