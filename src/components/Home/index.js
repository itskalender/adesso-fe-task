import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changePageTitle } from '../../store/actionCreators';

import logo from '../../assets/images/aoe_logo.png';

import './index.scss';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePageTitle('Home Page'));
  }, [dispatch]);

  return (
    <div className="home">
      <img src={logo} alt="Age of Empires Logo" className="logo" />
    </div>
  );
}

export default Home;
