import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App({ greetings }) {
  return (
    <div>
      {greetings.map((greeting) => (
        <>
          <h1 key={greeting.id}>{greeting.message}</h1>
        </>
      ))}
    </div>
  );
}

function MainApp() {
  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    fetch('/api/v1/greetings')
      .then((response) => response.json())
      .then((data) => {
        setGreetings(data);
      })
  }, []);

  return <App greetings={greetings} />;
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
