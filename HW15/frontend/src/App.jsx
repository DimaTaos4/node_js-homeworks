import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // URL сервера

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message received', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('message received');
    };
  }, []);

  const handleSend = () => {
    if (message.trim() !== '') {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1>React Чат</h1>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: 300, overflowY: 'scroll', marginBottom: 20 }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '70%', marginRight: '10px' }}
      />
      <button onClick={handleSend}>Отправить</button>
    </div>
  );
}

export default App;
