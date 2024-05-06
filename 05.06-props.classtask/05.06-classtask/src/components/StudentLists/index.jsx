import StudentListItem from "../StudentListItem";

const StudentList = ({ students }) => {
  return (
    <ul>
      {students &&
        students.map((student) => {
          return <StudentListItem student={student} key={student.id} />;
        })}
    </ul>
  );
};
export default StudentList;
