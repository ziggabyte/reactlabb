import { useState, useEffect } from "react";
import Employee from "./Employee";
import NewEmployeeForm from "./NewEmployeeForm";

function EmployeeList() {
  let [employees, setEmployees] = useState([
    // tre hårdkodade employees att börja med
    {
      name: "Avatar Aang",
      email: "aang@airmail.com",
      phone: "0736-43 89 72",
      skills: "React, JavaScript, Java",
      imgSrc:
        "https://cdn140.picsart.com/302578769022201.jpg?type=webp&to=crop&r=256",
      key: "Avatar Aang",
    },
    {
      name: "Katara Waterbender",
      email: "katara@water.com",
      phone: "0742-728 22 19 28",
      skills: "C#, C++, Python",
      imgSrc:
        "https://pbs.twimg.com/profile_images/707426829657894912/_4apsY4-.jpg",
      key: "Katara Waterbender",
    },
    {
      name: "Firelord Zuko",
      email: "zuko@firewire.com",
      phone: "031-56 83 17",
      skills: "JavaScript, CSS, HTML",
      imgSrc:
        "https://pbs.twimg.com/profile_images/625340174914850816/UKVXSC2z.jpg",
      key: "Firelord Zuko",
    },
  ]);

  // lägger till en employee utifrån formuläret
  // här funkar det inte om jag gör object destruction, men jag förstår inte varför, får tusen felmeddelanden
  function addNewEmployee(employee) {
    setEmployees(function (prevState) {
      return [
        ...prevState,
        {
          name: employee.name,
          email: employee.email,
          phone: employee.phone,
          skills: employee.skills,
          imgSrc: employee.imgSrc,
          key: employee.name,
        },
      ];
    });
  }

  // lägger till en förinställd employee
  function addPresetEmployee() {
    setEmployees((prevState) => {
      return [
        ...prevState,
        {
          name: "Cabbage Merchant",
          email: "cabbage_4_ever@hotmail.com",
          phone: "+4408217388",
          skills: "hustlin",
          imgSrc:
            "https://cdn130.picsart.com/329017275085201.jpg?type=webp&to=crop&r=256",
          key: "Cabbage Merchant",
        },
      ];
    });
  }

  // början till en skiss på en funktion som raderar employees
  function deleteEmployee(e) {
    employees.map((employee) => {
      if (employee.name === e.target.id) {
        localStorage.removeItem(employee.name);
      }
    });
    setEmployees(() => {
      return [];
    });
    console.log("nu togs alla employees bort");
  }

  // sparar i local storage varje gång state uppdateras
  useEffect(() => {
    employees.map((employee) => {
      return localStorage.setItem(employee.name, JSON.stringify(employee)); // skrev return här för det kom upp som en varning i konsollen, men det funkade utan oxå
    });
  }, [employees]);

  return (
    <>
      <NewEmployeeForm
        addNewEmployee={addNewEmployee}
        addPresetEmployee={addPresetEmployee}
      />
      <div className="EmployeeList">
        <h2>List of employees</h2>
        <div className="AllEmployeeDivs">
          {employees.map(function (employee) {
            // går igenom employees o skapar nytt Employee-element och en remove-knapp för varje
            return (
              <div className="EmployeeDiv">
                <Employee
                  name={employee.name}
                  email={employee.email}
                  phone={employee.phone}
                  skills={employee.skills}
                  imgSrc={employee.imgSrc}
                  key={employee.name}
                />
                <button
                  className="button"
                  onClick={(e) => deleteEmployee(e)} // denna funktionen är bara en skiss än så länge
                  id={employee.name}
                >
                  Remove this employee
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
