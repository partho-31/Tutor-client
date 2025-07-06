import MenuBar from '../components/dashboard/sidebar/MenuBar';
import { Outlet } from 'react-router';
import Footer from "./Footer"
import DashNav from './DashNav';

const ProfileLayout = () => {
    return (
        <>
            <DashNav>
            <Outlet/>
            </DashNav>
           
        </>
    );
};

export default ProfileLayout;