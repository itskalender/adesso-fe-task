import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { startAgeChange } from '../../store/actionCreators';

import './index.scss';

function Ages() {
  const [age, setAge] = useState('All');
  const dispatch = useDispatch();

  const handleAgeChange = (_, newAge) => {
    if (newAge === null) return;

    setAge(newAge);
    dispatch(startAgeChange(newAge));
  };

  return (
    <div className="ages">
      <h2 className="ages__title">Ages</h2>
      <ToggleButtonGroup
        color="primary"
        value={age}
        exclusive
        onChange={handleAgeChange}
      >
        <ToggleButton value="All">All</ToggleButton>
        <ToggleButton value="Dark">Dark</ToggleButton>
        <ToggleButton value="Feudal">Feudal</ToggleButton>
        <ToggleButton value="Castle">Castle</ToggleButton>
        <ToggleButton value="Imperial">Imperial</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Ages;
