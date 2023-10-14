import Navbar from "@/Components/Navbar/Navbar";


const layout = ({ children }) => {
    return (
        <div className="w-full max-w-[2250px] px-20">
            <Navbar />
            {children}
        </div>
    );
};

export default layout;