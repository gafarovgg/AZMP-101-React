import React from "react";
import Contact from "../contact";
import StudentList from "../StudentLists";

const Main = ({ students }) => {
  return (
    <div>
      <h1>Main</h1>
      <Contact />
      <hr />
      <StudentList students={students} />
    </div>
  );
};

export default Main;
