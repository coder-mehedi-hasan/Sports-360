import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";


const layout = ({ children }) => {
    return (
        <div >
            <Navbar />
            <div className="min-h-[calc(100vh-400px)]" >
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;