import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NotFound from '../NotFound';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { startPageTitleChange } from '../../store/action-creators';

import { getUpperCaseUnitName, getUnitData } from '../../utils';

import './index.scss';

function UnitDetail() {
  const { unit: unitName } = useParams();
  const unitData = useSelector(state => getUnitData(state, unitName));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startPageTitleChange(getUpperCaseUnitName(unitName)));
  }, [dispatch, unitName]);

  const checkValue = value => {
    return value ? value : '-';
  };

  return unitData ? (
    <div className="unit-detail">
      <div className="unit-detail__table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="unit detail table">
            <TableBody>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>{unitData.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{unitData.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{unitData.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min. Required Age</TableCell>
                <TableCell>{unitData.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wood Cost</TableCell>
                <TableCell>{checkValue(unitData.cost?.Wood)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Food Cost</TableCell>
                <TableCell>{checkValue(unitData.cost?.Food)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gold Cost</TableCell>
                <TableCell>{checkValue(unitData.cost?.Gold)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Build Time</TableCell>
                <TableCell>{checkValue(unitData.build_time)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reload Time</TableCell>
                <TableCell>{checkValue(unitData.reload_time)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hit Points</TableCell>
                <TableCell>{checkValue(unitData.hit_points)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Attack</TableCell>
                <TableCell>{checkValue(unitData.attack)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Accuracy</TableCell>
                <TableCell>{checkValue(unitData.accuracy)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  ) : (
    <NotFound msg="Unit not found" />
  );
}

export default UnitDetail;
