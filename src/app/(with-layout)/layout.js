import Navbar from "@/Components/Navbar/Navbar";


const layout = ({ children }) => {
    return (
        <div >
            <Navbar />
            <div className="w-full max-w-[2250px] px-20">
                {children}
            </div>
        </div>
    );
};

export default layout;