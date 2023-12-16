import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>
    </div>
  );
};

const ExternalUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      {users.map(user => <DisplayUser name={user.name} email={user.email}></DisplayUser>)}
    </div>
  )
};
const DisplayUser = (props) => {
  return (
    <div style={{ backgroundColor: 'pink', padding: '10px', border: '2px solid yellow', margin: '10px' }}>
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  )
};
//counter
const Counter = () => {
  const [count, setCount] = useState(55);
  const increaseCount = () => setCount(count + 1);
  const dcreaseCount = () => setCount(count - 1);

  return (
    <div style={{ color: 'pink', backgroundColor: 'blue', width: '400px', margin: '0 auto', border: '2px solid red' }}>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={dcreaseCount}>Dcrease</button>
    </div>
  )
};

export default App;
