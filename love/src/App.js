import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Year1 from './pages/year1';
import Year2 from './pages/year2';
import './index.css'
import MemoryLog from './pages/memoryLog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/year1" />} />
        <Route path="/year1" element={<Year1 />} />
        <Route path="/year2" element={<Year2 />} />
        <Route path="/memory-log" element={<MemoryLog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
