import Navbar from "@/Components/Navbar/Navbar";


const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default layout;