import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startPageTitleChange } from '../../store/actionCreators';
import logo from '../../assets/images/aoe_logo.png';

import './index.scss';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startPageTitleChange('Home'));
  }, [dispatch]);

  return (
    <div className="home">
      <img src={logo} alt="Age of Empires Logo" className="logo" />
    </div>
  );
}

export default Home;
