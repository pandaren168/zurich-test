import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import store from "../store/store";
import Layout from "../components/layout";
import Auth from "../components/auth";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const isNonAuthPage =
        router.pathname === "/login" || router.pathname === "/" || router.pathname === "/unauthorized";

    return (
        <Provider store={store}>
            {isNonAuthPage ? (
                <Component {...pageProps} />
            ) : (
                <Auth>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Auth>
            )}
        </Provider>
    );
};

export default App;
