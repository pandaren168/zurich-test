import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../store/store";
import { clearLoginUser } from "../store/loginUserSlice";
import { clearAuth } from "../store/authSlice";
import "./header.css";

const Header = () => {
    const loginUser = useSelector((state: RootState) => state.loginUser);
    const router = useRouter();

    const handleOnLogout = () => {
        clearLoginUser();
        clearAuth();
        router.push("/login");
    };

    return (
        <header className="header">
            <button className="logout-button" onClick={handleOnLogout}>
                Logout
            </button>

            <div className="header-profile-container">
                <p>Welcome, {loginUser.name}</p>
                <div className="header-avatar">
                    <img src={loginUser.avatar} alt="User Avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
