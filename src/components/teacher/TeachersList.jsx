import React from 'react';
import Card from './Card/TeacherCard';
import useFetchTeachers from '../../hooks/useFetchTeachers';

const TeacherCards = () => {
   const {teachers,loading} = useFetchTeachers()

    return (
      <div className="container mx-auto px-6 "> 
      {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}
      <div className="md:my-12 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

             {teachers?.results.map((teacher, index) => (
               <div key={index}>
                 <Card
                   teacher = {teacher}
                 />
               </div>
             ))}
           </div>
           </div>
    );
};

export default TeacherCards;