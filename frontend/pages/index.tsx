import React, { useEffect } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);

    return <></>;
};

export default HomePage;
