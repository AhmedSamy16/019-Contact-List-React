import { useState, useEffect } from "react"
import Card from "./Card";


function App() {
  const [contacts, setContacts] = useState([])
  const [amount, setAmount] = useState(5)
  const fetchData = () => {
    const URL = `https://randomuser.me/api/?results=${amount}`
    fetch(URL)
    .then(res => res.json())
    .then(data => setContacts(data.results))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className="form-content">
        <input 
          type="text"
          value={amount} 
          onChange={(e) => setAmount(+e.target.value)}
          />
        <button type="button" onClick={fetchData} className="btn">Submit</button>
      </div>
      <div className="cards">
      {contacts.map((item, index) => {
        return <Card 
        key={index} 
        image={item.picture.large}
        name={`${item.name.first} ${item.name.last}`}
        email={item.email}
        age={item.dob.age}  
        />
      })}
      </div>
    </>
  );
}

export default App;
