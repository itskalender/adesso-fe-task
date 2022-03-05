import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './index.scss';

function UnitDetails() {
  const { unit } = useParams();

  const unitData = useSelector(state => {
    const upperCaseUnitName = unit
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');

    const selectedUnit = state.units.find(
      unit => unit.name === upperCaseUnitName
    );
    console.log(selectedUnit);
    return selectedUnit;
  });

  return (
    <div className="unit-details">
      <table className="unit-details__table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{unitData.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{unitData.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{unitData.description}</td>
          </tr>
          <tr>
            <td>Min. Required Age</td>
            <td>{unitData.age}</td>
          </tr>
          <tr>
            <td>Wood Cost</td>
            <td>{unitData.cost.Wood}</td>
          </tr>
          <tr>
            <td>Food Cost</td>
            <td>{unitData.cost.Food}</td>
          </tr>
          <tr>
            <td>Gold Cost</td>
            <td>{unitData.cost.Gold}</td>
          </tr>
          <tr>
            <td>Build Time</td>
            <td>{unitData.build_time}</td>
          </tr>
          <tr>
            <td>Reload Time</td>
            <td>{unitData.reload_time}</td>
          </tr>
          <tr>
            <td>Hit Points</td>
            <td>{unitData.hit_points}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{unitData.attack}</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>{unitData.accuracy}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UnitDetails;
