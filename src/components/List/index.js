import { useSelector } from 'react-redux';

function List() {
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

  return (
    <div className="list">
      <h2>List ({unitList.length})</h2>
      <ul>
        {unitList.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
