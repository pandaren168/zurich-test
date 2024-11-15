import Header from "./header";
import Footer from "./footer";
import "./layout.css";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout">
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
