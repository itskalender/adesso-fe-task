import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import RemoveIcon from '@mui/icons-material/Remove';

import { startRangeChange, startRangeReset } from '../../store/actionCreators';

import './index.scss';

function Cost({ material }) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [range, setRange] = useState([0, 200]);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    if (isCheckboxChecked === true) {
      setRange([0, 200]);
      dispatch(startRangeReset(material));
    }
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleRangeChange = (_, newRange) => {
    setRange(newRange);

    dispatch(startRangeChange(material, newRange));
  };

  const getCheckboxLabel = () => {
    return material[0].toUpperCase() + material.slice(1);
  };

  return (
    <div className="wood">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
          }
          label={getCheckboxLabel()}
        />
      </FormGroup>
      <Slider
        disabled={!isCheckboxChecked}
        valueLabelDisplay="auto"
        min={0}
        max={200}
        value={range}
        onChange={handleRangeChange}
      />
      {isCheckboxChecked ? (
        <div>
          {range[0]}-{range[1]}
        </div>
      ) : (
        <RemoveIcon />
      )}
    </div>
  );
}

export default Cost;
