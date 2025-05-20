import MenuBar from '../components/dashboard/sidebar/MenuBar';
import { Outlet } from 'react-router';

const ProfileLayout = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans">
            <MenuBar />
            <Outlet />
        </div>
    );
};

export default ProfileLayout;