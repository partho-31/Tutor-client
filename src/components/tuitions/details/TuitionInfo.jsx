import React from 'react';

const TuitionInfo = ({tuition}) => {
    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {tuition.description}
                </p>
              </div>
        </div>
    );
};

export default TuitionInfo;