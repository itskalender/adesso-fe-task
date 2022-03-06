export function getFilteredUnits(state) {
  const { age: selectedAge } = state.currentState.filters;
  const {
    wood: woodRange,
    food: foodRange,
    gold: goldRange,
  } = state.currentState.filters.costs;

  return state.units.filter(unit => {
    let ageFilter = true;
    let woodFilter = true;
    let foodFilter = true;
    let goldFilter = true;

    if (selectedAge !== 'All') {
      ageFilter = unit.age === selectedAge;
    }

    if (unit.cost && unit.cost.Wood) {
      woodFilter =
        unit.cost.Wood >= woodRange[0] && unit.cost.Wood <= woodRange[1];
    }

    if (unit.cost && unit.cost.Food) {
      foodFilter =
        unit.cost.Food >= foodRange[0] && unit.cost.Food <= foodRange[1];
    }

    if (unit.cost && unit.cost.Gold) {
      goldFilter =
        unit.cost.Gold >= goldRange[0] && unit.cost.Gold <= goldRange[1];
    }

    return ageFilter && woodFilter && foodFilter && goldFilter;
  });
}

// export function getFilteredUnits(state) {
//   return state.units.filter(u => {
//     const { age: selectedAge } = state.currentState.filters;
//     const {
//       wood: woodRange,
//       food: foodRange,
//       gold: goldRange,
//     } = state.currentState.filters.costs;

//     let ageFilter = u.age === selectedAge;
//     let woodFilter = true;
//     let foodFilter = true;
//     let goldFilter = true;

//     if (selectedAge === 'All') {
//       ageFilter = true;
//     }

//     if (u.cost && u.cost.Wood) {
//       woodFilter = u.cost.Wood <= woodRange[1] && u.cost.Wood >= woodRange[0];
//     }

//     if (u.cost && u.cost.Food) {
//       foodFilter = u.cost.Food <= foodRange[1] && u.cost.Food >= foodRange[0];
//     }

//     if (u.cost && u.cost.Gold) {
//       goldFilter = u.cost.Gold <= goldRange[1] && u.cost.Gold >= goldRange[0];
//     }

//     return ageFilter && woodFilter && foodFilter && goldFilter;
//   });
// }
