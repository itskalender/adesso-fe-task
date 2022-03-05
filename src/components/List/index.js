import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import NorthEastIcon from '@mui/icons-material/NorthEast';

import { useTheme } from '@mui/material/styles';

import './index.scss';

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
  const theme = useTheme();

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function getFilteredUnits(state) {
  return state.units.filter(u => {
    const { age: selectedAge } = state.currentState.filters;
    const {
      wood: woodRange,
      food: foodRange,
      gold: goldRange,
    } = state.currentState.filters.costs;

    let ageFilter = u.age === selectedAge;
    let woodFilter = true;
    let foodFilter = true;
    let goldFilter = true;

    if (selectedAge === 'All') {
      ageFilter = true;
    }

    if (u.cost && u.cost.Wood) {
      woodFilter = u.cost.Wood <= woodRange[1] && u.cost.Wood >= woodRange[0];
    }

    if (u.cost && u.cost.Food) {
      foodFilter = u.cost.Food <= foodRange[1] && u.cost.Food >= foodRange[0];
    }

    if (u.cost && u.cost.Gold) {
      goldFilter = u.cost.Gold <= goldRange[1] && u.cost.Gold >= goldRange[0];
    }

    return ageFilter && woodFilter && foodFilter && goldFilter;
  });
}

function getUnitCost(unit) {
  const hasCost = unit.cost !== null;
  const cost = [];

  if (hasCost) {
    for (let [key, value] of Object.entries(unit.cost)) {
      const str = `${key}: ${value}`;
      cost.push(str);
    }
  }

  return cost.join(', ');
}

function List() {
  const unitList = useSelector(getFilteredUnits);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - unitList.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="list">
      <h2 className="list__title">List</h2>
      <div className="list__table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Costs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? unitList.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : unitList
              ).map(unit => (
                <TableRow key={unit.id}>
                  <TableCell>{unit.id}</TableCell>
                  <TableCell>
                    <Link to={`/units/${unit.name.toLowerCase()}`}>
                      {unit.name}
                      <NorthEastIcon sx={{ fontSize: '16px' }} />
                    </Link>
                  </TableCell>
                  <TableCell>{unit.age}</TableCell>
                  <TableCell>{getUnitCost(unit)}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={unitList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default List;

/* function List() {
  const unitList = useSelector(state =>
    state.units.filter(u => {
      const { age: selectedAge } = state.currentState.filters;
      const {
        wood: woodRange,
        food: foodRange,
        gold: goldRange,
      } = state.currentState.filters.costs;

      let ageFilter = u.age === selectedAge;
      let woodFilter = true;
      let foodFilter = true;
      let goldFilter = true;

      if (selectedAge === 'All') {
        ageFilter = true;
      }

      if (u.cost && u.cost.Wood) {
        woodFilter = u.cost.Wood <= woodRange[1] && u.cost.Wood >= woodRange[0];
      }

      if (u.cost && u.cost.Food) {
        foodFilter = u.cost.Food <= foodRange[1] && u.cost.Food >= foodRange[0];
      }

      if (u.cost && u.cost.Gold) {
        goldFilter = u.cost.Gold <= goldRange[1] && u.cost.Gold >= goldRange[0];
      }

      return ageFilter && woodFilter && foodFilter && goldFilter;
    })
  );

  const getUnitCost = unit => {
    const hasCost = unit.cost !== null;
    const cost = [];

    if (hasCost) {
      for (let [key, value] of Object.entries(unit.cost)) {
        const str = `${key}: ${value}`;
        cost.push(str);
      }
    }

    return cost.join(', ');
  };

  return (
    <div className="list">
      <h2 className="list__title">List</h2>
      <table className="list__table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Costs</th>
          </tr>
        </thead>
        <tbody>
          {unitList.map(unit => (
            <tr key={unit.id}>
              <td>{unit.id}</td>
              <td>
                <Link to={`/units/${unit.name.toLowerCase()}`}>
                  {unit.name}
                  <NorthEastIcon sx={{ fontSize: '16px' }} />
                </Link>
              </td>
              <td>{unit.age}</td>
              <td>{getUnitCost(unit)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} */
