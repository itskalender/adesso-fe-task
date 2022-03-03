import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './layout';
import Home from './components/Home';
import Units from './components/Units';
import UnitDetails from './components/UnitDetails';

import './App.scss';

function App() {
  const page = useSelector(state => state.currentState.page);

  return (
    <Layout page={page}>
      <Routes>
        <Route path="/unit-details" element={<UnitDetails />} />
        <Route path="/units" element={<Units />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
