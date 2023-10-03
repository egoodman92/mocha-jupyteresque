import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleRunCode = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/run_code', { code });
      setOutput(data.result);
    } catch (error) {
      console.error("An error occurred while sending the request", error);
    }
  };

  return (
    <div className="App">
      <textarea value={code} onChange={handleCodeChange} placeholder="Write your Python code here..."></textarea>
      <button onClick={handleRunCode}>Run Code</button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default App;