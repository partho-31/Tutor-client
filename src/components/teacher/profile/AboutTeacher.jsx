import React from 'react';

const AboutTeacher = ({teacher}) => {
    return (
        <div>
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                About Me
              </h2>
              <p className="text-gray-700 mb-4">
                {teacher.bio}
              </p>
              
            </section>

        </div>
    );
};

export default AboutTeacher;