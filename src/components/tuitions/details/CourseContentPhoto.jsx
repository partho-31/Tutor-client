const CourseContentPhoto = ({ tuition }) => {
  const tuition_url = `https://res.cloudinary.com/dinzf10l3/${tuition.image}`;
  return (
    <div>
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={tuition_url}
          alt="Math Classroom"
          className="w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default CourseContentPhoto;
