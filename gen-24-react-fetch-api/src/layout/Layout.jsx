import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
    const {children} = props;
    return(
        <>
        <Headers/>
        <Navbar/>
        <div className="flex justify-center pt-6">
            {children}
        </div>
        <Footer/>
        </>
    )
}

export default Layout;