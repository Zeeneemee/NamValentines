import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import Year1 from './pages/year1';
import Year2 from './pages/year2';
import './index.css'
import MemoryLog from './pages/memoryLog';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/year1" />} />
        <Route path="/year1" element={<Year1 />} />
        <Route path="/year2" element={<Year2 />} />
        <Route path="/memory-log" element={<MemoryLog/>} />
      </Routes>
    </Router>
  );
}

export default App;
