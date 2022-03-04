import Cost from '../Cost';

function Costs() {
  return (
    <div className="costs">
      <h2>Costs</h2>
      <Cost material="wood" />
      <Cost material="food" />
      <Cost material="gold" />
    </div>
  );
}

export default Costs;