import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Year1 from './pages/year1';
import Year2 from './pages/year2';
import './index.css'
import MemoryLog from './pages/memoryLog';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Year2 />} />
      <Route path="/year2" element={<Year2 />} />
      <Route path="/memory-log" element={<MemoryLog />} />
    </Routes>
  </Router>
  );
}

export default App;
