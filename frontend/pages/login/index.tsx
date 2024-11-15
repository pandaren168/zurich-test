import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { setLoginUser } from "../../store/loginUserSlice";
import { setAuth } from "../../store/authSlice";
import "./login.css";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

interface CustomJwtPayload extends JwtPayload {
    name: string;
    email: string;
    picture: string;
}

const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleOnSuccessLogin = (response: CredentialResponse) => {
        const token = response.credential;
        const decoded = token ? jwtDecode<CustomJwtPayload>(token) : null;

        const loginUser = {
            name: decoded?.name ?? null,
            email: decoded?.email ?? null,
            avatar: decoded?.picture ?? null,
        };

        dispatch(setLoginUser(loginUser));
        dispatch(setAuth(true));
        router.push("/dashboard");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <Image src="/assets/zurich.png" alt="Zurich Logo" width={100} height={100} />
                <h2 className="title">Customer Portal</h2>

                <div className="login-button">
                    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                        <GoogleLogin
                            onSuccess={handleOnSuccessLogin}
                            onError={() => console.log("Login Failed")}
                            useOneTap
                            theme="outline"
                            shape="pill"
                            width="100%"
                            size="medium"
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
