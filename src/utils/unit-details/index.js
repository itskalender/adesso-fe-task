export function getUpperCaseUnitName(unitName) {
  const upperCaseUnitName = unitName
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return upperCaseUnitName;
}

export function getUnitData(state, unitName) {
  const upperCaseUnitName = getUpperCaseUnitName(unitName);

  return state.units.find(unit => unit.name === upperCaseUnitName);
}
