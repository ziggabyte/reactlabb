import { useState, useEffect, useRef } from "react";
import Employee from "./Employee";

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
  function addNewEmployee(props) {
    setEmployees(function (prevState) {
      return [
        ...prevState,
        {
          name: props.name,
          email: props.email,
          phone: props.phone,
          skills: props.skills,
          imgSrc: props.imgSrc,
          key: props.name,
        },
      ];
    });
  }

  // lägger till en förinställd employee
  function addPresetEmployee() {
    setEmployees(function (prevState) {
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

  function deleteEmployee(e) {
    employees.map((employee) => {
      if (employee.name == e.target.id) {
        localStorage.removeItem(employee.name);
      }
    });
  }

  // sparar i local storage varje gång state uppdateras
  useEffect(() => {
    employees.map((employee) => {
      return localStorage.setItem(employee.name, JSON.stringify(employee)); // skrev return här för det kom upp som en varning i konsollen, men det funkade utan oxå
    });
  }, [employees]);

  // referenser att använda i formuläret
  let nameInput = useRef();
  let emailInput = useRef();
  let phoneInput = useRef();
  let skillsInput = useRef();
  let imgInput = useRef();

  return (
    <>
      <form>
        <label>Name:</label>
        <input type="text" ref={nameInput}></input>
        <br />
        <label>Email:</label>
        <input type="text" ref={emailInput}></input>
        <br />
        <label>Phone:</label>
        <input type="text" ref={phoneInput}></input>
        <br />
        <label>Skills:</label>
        <input type="text" ref={skillsInput}></input>
        <br />
        <label>Image url:</label>
        <input type="text" placeholder="include http://" ref={imgInput}></input>
        <br />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault(); // förhindrar submit-beteendet

            // skapar ett objekt av det som står i fälten
            let newEmployee = {
              name: nameInput.current.value,
              email: emailInput.current.value,
              phone: phoneInput.current.value,
              skills: skillsInput.current.value,
              imgSrc: imgInput.current.value,
            };
            addNewEmployee(newEmployee); // skickar det nya objektet till addEmployee
          }}
        >
          Add employee
        </button>
      </form>
      <button className="button" onClick={addPresetEmployee}>
        Add preset employee
      </button>
      {employees.map(function (employee) {
        // går igenom employees o skapar nytt Employee-element och en remove-knapp för varje
        return (
          <>
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
              onClick={(e) => deleteEmployee(e)}
              id={employee.name}
            >
              Remove this employee
            </button>
          </div>
          </>
        );
      })}
    </>
  );
}

export default EmployeeList;
