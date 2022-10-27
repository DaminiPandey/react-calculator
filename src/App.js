import './App.css';
import Calculator from './components/Calculator';
import {useState, useRef} from 'react';

function App() {
  const [result, setResult] = useState(0);
  const calRef = useRef();

  const handleClick = (e) => {
    calRef.current?.focus();
  }

  return (
    <div onClick={handleClick} className="App flex justify-center">
      <Calculator result={result} setResult={setResult} calRef={calRef}/>
    </div>
  );
}

export default App;
