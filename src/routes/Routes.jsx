import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';

const AppRouter = () => {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dex" element={<Dex />} />
    </Routes>

    </div>
  );
};

export default AppRouter;
