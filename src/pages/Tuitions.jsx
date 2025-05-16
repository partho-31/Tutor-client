import Filter from '../components/tuitions/filter/Filter';
import TuitionList from '../components/tuitions/TuitionList';
import useAuthContext from '../hooks/useAuthContext';

const Tuitions = () => {
    const {user} = useAuthContext()
    return (
        <div>
            <Filter user={user}/>
            <TuitionList  />
        </div>
    );
};

export default Tuitions;