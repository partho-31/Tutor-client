
import ProfileCard from "../components/profile/main_content/ProfileCard";
import PersonalInfo from "../components/profile/main_content/PersonalInfo";
import Qualifications from "../components/profile/main_content/Qualifications";
import Bio from "../components/profile/main_content/Bio";
import useAuthContext from "../hooks/useAuthContext";

const StudentPortal = () => {
  const { user } = useAuthContext()
  
  return (
      <div className="w-full flex-1 p-6 md:p-10">
        <ProfileCard user={user}/>
       
        {/* Profile Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Info Card */}
          <PersonalInfo user={user}/>

          {/* Qualifiactions */}
          <Qualifications user={user}/>
        </div>
        <div>
          {/* Bio */}
          <Bio user={user}/>
        </div>
      </div>
    
  );
};

export default StudentPortal;
