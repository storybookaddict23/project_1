function Fooditeam() {
  const fooditeam = [
    "dal",
    "chicken",
    "green vegetable",
    "roti",
    "salad",
    "milk",
  ];

  return (
    <>
      <h1>Healthy Food</h1>

      <ul className="list-group">
        {fooditeam.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Fooditeam;