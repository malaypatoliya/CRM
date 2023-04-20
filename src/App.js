import DashboardChart from './pages/DashboardChart';
import Client from './pages/Client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardChart />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;