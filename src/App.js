import './App.css';
import Main from './components/Main';
import { Data } from './data/data';
import { useState } from "react";

function App() {
   const [jsonData, setjsonData] = useState(Data)
  return (
    <div className="App">
      <Main jsonData={jsonData}/>
    </div>
  );
}

export default App;
