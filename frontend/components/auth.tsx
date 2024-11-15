import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface AuthProps {
    children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/unauthorized");
        }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <>{children}</> : null;
};

export default Auth;
