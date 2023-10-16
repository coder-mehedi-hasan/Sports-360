import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";


const layout = ({ children }) => {
    return (
        <div >
            <Navbar />
            <div className="min-h-[calc(100vh-400px)] w-full max-w-[2250px] px-20">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default layout;