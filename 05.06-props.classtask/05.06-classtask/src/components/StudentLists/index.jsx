const StudentList = ({ students }) => {
  return (
    <ul>
      {students &&
        students.map((student) => {
          return <li>{student.name}</li>;
        })}
    </ul>
  );
};
export default StudentList;
