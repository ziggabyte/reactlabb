import { useState, useEffect } from "react";
import Employee from "./Employee";

function EmployeeList() {
  let [employees, setEmployees] = useState([
    {
      name: "Avatar Aang",
      email: "aang@airmail.com",
      phone: "0736-43 89 72",
      skills: "React, JavaScript, Java",
      imgSrc:
        "https://cdn140.picsart.com/302578769022201.jpg?type=webp&to=crop&r=256",
    },
    {
      name: "Katara Waterbender",
      email: "katara@water.com",
      phone: "0742-728 22 19 28",
      skills: "C#, C++, Python",
      imgSrc:
        "https://pbs.twimg.com/profile_images/707426829657894912/_4apsY4-.jpg",
    },
    {
      name: "Firelord Zuko",
      email: "zuko@firewire.com",
      phone: "031-56 83 17",
      skills: "JavaScript, CSS, HTML",
      imgSrc:
        "https://pbs.twimg.com/profile_images/625340174914850816/UKVXSC2z.jpg",
    },
  ]);

  function addEmployee({ name, email, phone, skills, imgSrc }) {
    setEmployees(function (prevState) {
      return [
        ...prevState,
        {
          name: { name },
          email: { email },
          phone: { phone },
          skills: { skills },
          imgSrc: { imgSrc },
        },
      ];
    });
  }

  useEffect(() => {
    employees.map((employee) => {
      localStorage.setItem(employee.name, JSON.stringify(employee));
    });
  }, [employees]);

  return (
    <>
      <form>
        <label>Name:</label>
        <input type="text"></input>
        <br />
        <label>Email:</label>
        <input type="text"></input>
        <br />
        <label>Phone:</label>
        <input type="text"></input>
        <br />
        <label>Skills:</label>
        <input type="text"></input>
        <br />
        <label>Image url:</label>
        <input type="text" placeholder="include http://"></input>
        <br />
        <button
          onClick={() => {
            addEmployee();
          }}
        >
          Add employee
        </button>
      </form>
      {employees.map(function (employee) {
        return (
          <Employee
            name={employee.name}
            email={employee.email}
            phone={employee.phone}
            skills={employee.skills}
            imgSrc={employee.imgSrc}
          />
        );
      })}
    </>
  );
}

export default EmployeeList;
