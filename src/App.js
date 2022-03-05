import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from './layout';
import Home from './components/Home';
import Units from './components/Units';
import UnitDetails from './components/UnitDetails';

import { getPageTitle } from './utils';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700.css';

import '@fontsource/cormorant';

import './App.scss';

function App() {
  const pageTitle = useSelector(getPageTitle);

  return (
    <Layout pageTitle={pageTitle}>
      <Routes>
        <Route path="/units/:unit" element={<UnitDetails />} />
        <Route path="/units" element={<Units />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
