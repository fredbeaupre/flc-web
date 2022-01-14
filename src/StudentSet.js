import React from 'react';
import "./StudentSet.css";
import Student from "./Student"

function StudentSet({student1, level1, image1, student2, level2, image2, student3, level3, image3, student4, level4, image4}){
    return (
        <div className="student-set__container">
            <Student
                img={image1}
                level={level1}
                student={student1.name}
                info={student1.info}
            />
            <Student
                img={image2}
                level={level2}
                student={student2.name}
                info={student2.info}
            />
            <Student
                img={image3}
                level={level3}
                student={student3.name}
                info={student3.info}
            />
            <Student
                img={image4}
                level={level4}
                student={student4.name}
                info={student4.info}
            />
        </div>
    )
}

export default StudentSet;