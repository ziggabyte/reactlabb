function Employee({name, email, phone, skills, imgSrc}) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imgSrc} alt={"image of " + name} className="avatar"/>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Skills: {skills}</p>
    </div>
  );
}

export default Employee;
