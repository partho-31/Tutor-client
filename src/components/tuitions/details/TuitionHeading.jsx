import React from 'react';

const TuitionHeading = ({tuition}) => {
    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
                  {tuition.title}
                </h1>
                <p className="text-blue-600 font-medium">
                  {tuition.sub_title}
                </p>
              </div>
        </div>
    );
};

export default TuitionHeading;