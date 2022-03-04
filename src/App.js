import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './layout';
import Home from './components/Home';
import Units from './components/Units';
import UnitDetails from './components/UnitDetails';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';

function App() {
  const pageTitle = useSelector(state => state.currentState.pageTitle);

  return (
    <Layout pageTitle={pageTitle}>
      <Routes>
        <Route path="/unit-details" element={<UnitDetails />} />
        <Route path="/units" element={<Units />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
