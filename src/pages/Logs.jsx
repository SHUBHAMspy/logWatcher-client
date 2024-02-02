import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const socket = io('https://log-watcher-node-socketio.onrender.com');
    
    // New log
    socket.on('update-log', data => {
      setLogs(prevLogs => [...prevLogs,data]);
    });

    // Initial logs
    socket.on('init', data => {
      setLogs(data);
    });


    return () => {
      socket.off('init-response');
      socket.off('log-update');
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Log Viewer</h1>
      <ul>
        {logs.map((log,index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );

}

export default Logs