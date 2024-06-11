import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <Navbar />
            {/* <div className="flex justify-center pt-6"> */}
            {children}
            {/* </div> */}
            <Footer />
        </>
    );
};

export default Layout;
