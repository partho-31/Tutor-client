
import ProfileCard from "../profile_components/ProfileCard";
import PersonalInfo from "../profile_components/PersonalInfo";
import Qualifications from "../profile_components/Qualifications";
import Bio from "../profile_components/Bio";
import useAuthContext from "../../../hooks/useAuthContext";

const StudentPortal = () => {
  const { user } = useAuthContext()
  
  return (
      <div className="w-full flex-1 px-2 sm:p-3">
        <ProfileCard user={user}/>
       
        {/* Profile Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Info Card */}
          <PersonalInfo user={user}/>

          {/* Qualifiactions */}
          <Qualifications user={user}/>
        </div>
        <div className="mt-5">
          {/* Bio */}
          <Bio user={user}/>
        </div>
      </div>
    
  );
};

export default StudentPortal;
