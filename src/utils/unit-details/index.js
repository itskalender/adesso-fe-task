export function getUnitData(state, unit) {
  const upperCaseUnitName = unit
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return state.units.find(unit => unit.name === upperCaseUnitName);
}
