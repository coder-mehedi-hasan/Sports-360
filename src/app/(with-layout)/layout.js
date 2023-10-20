import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";


const layout = ({ children }) => {
    return (
        <div >
            <Navbar />
            <div >
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;