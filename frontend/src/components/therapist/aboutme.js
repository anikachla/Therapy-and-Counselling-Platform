import React, { useState } from 'react';
import './App.css';

function App() {
  const [aboutme, setName] = useState('');
  const [specializations, setEmail] = useState('');
  const [, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, phone };
    fetch('/api/personal-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
