import Gift from './components/gift'; // Update the path to your Gift.js file
import { useState,createContext } from 'react';
import Body from './components/body';
import Valentine from './components/Valentines';

export const ThemeContext = createContext();

function App() {
  const [showPic, setShowPic] = useState(-1);
  const [no,setNo] = useState(0) // Use lowercase for state variable name

  return (
    <ThemeContext.Provider value={{ showPic, setShowPic , no, setNo }}>
      <div className="app">
        {showPic === -1 && <Valentine setShowPic={setShowPic} /> }
        {showPic===0 ? <Gift /> : null} {/* Conditionally render the Gift component */}
        {showPic>0?<Body/>:null}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
