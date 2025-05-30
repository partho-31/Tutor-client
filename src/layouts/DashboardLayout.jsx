import MenuBar from '../components/dashboard/sidebar/MenuBar';
import { Outlet } from 'react-router';
import Footer from "./Footer"

const ProfileLayout = () => {
    return (
        <div>
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans">  
            <MenuBar />
            <Outlet />
        </div>
            <Footer />
        </div>
    );
};

export default ProfileLayout;