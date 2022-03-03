import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changePageTitle } from '../../store/actionCreators';

function Units() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePageTitle('Units Page'));
  }, [dispatch]);

  return <div>Units</div>;
}

export default Units;
