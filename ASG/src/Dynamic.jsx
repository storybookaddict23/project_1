import React from "react";

function App() {
  const printDetails = (name, number) => {
    return `Name: ${name}, Number: ${number}`;
  };

  const users = [
    { name: "Anisha", number: 101 },
    { name: "Ajay", number: 102 },
    { name: "Rahul", number: 103 }
  ];

  return (
    <div>
      <h2>User Details</h2>

      {users.map((user, index) => (
        <p key={index}>
          {printDetails(user.name, user.number)}
        </p>
      ))}
    </div>
  );
}

export default App;