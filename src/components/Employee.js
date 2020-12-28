function Employee({name, email, phone, skills, imgSrc}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Skills: {skills}</p>
      <img src={imgSrc} />
    </div>
  );
}

export default Employee;
