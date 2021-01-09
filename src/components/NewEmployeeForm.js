import { useRef } from "react";

function NewEmployeeForm({ addNewEmployee, addPresetEmployee }) {
  // referenser som använda i formuläret
  let nameInput = useRef();
  let emailInput = useRef();
  let phoneInput = useRef();
  let skillsInput = useRef();
  let imgInput = useRef();

  return (
    <>
      <form>
          <h2>Add new employee</h2>
        <label>Name:</label>
        <br />
        <input type="text" ref={nameInput}></input>
        <br />
        <label>Email:</label>
        <br />
        <input type="text" ref={emailInput}></input>
        <br />
        <label>Phone:</label>
        <br />
        <input type="text" ref={phoneInput}></input>
        <br />
        <label>Skills:</label>
        <br />
        <input type="text" ref={skillsInput}></input>
        <br />
        <label>Image url:</label>
        <br />
        <input type="text" placeholder="include http://" ref={imgInput}></input>
        <br />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();

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
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault(); 
            addPresetEmployee();
          }}
        >
          Add preset employee
        </button>
      </form>
    </>
  );
}

export default NewEmployeeForm;
