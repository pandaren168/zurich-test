import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../store/store";
import { clearUser } from "../store/userSlice";
import { clearAuth } from "../store/authSlice";
import "./header.css";

const Header = () => {
    const user = useSelector((state: RootState) => state.user);
    const router = useRouter();

    const handleOnLogout = () => {
        clearUser();
        clearAuth();
        router.push("/login");
    };

    return (
        <header className="header">
            <button className="logout-button" onClick={handleOnLogout}>
                Logout
            </button>

            <div className="header-profile-container">
                <p>Welcome, {user.name}</p>
                <div className="header-avatar">
                    <img src={user.avatar} alt="User Avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
