import Cost from '../Cost';

import imgWood from '../../assets/images/aoe-wood.webp';
import imgFood from '../../assets/images/aoe-food.webp';
import imgGold from '../../assets/images/aoe-gold.webp';

import './index.scss';

function Costs() {
  return (
    <div className="costs">
      <h2 className="costs__title">Costs</h2>
      <Cost material="wood" img={imgWood} />
      <Cost material="food" img={imgFood} />
      <Cost material="gold" img={imgGold} />
    </div>
  );
}

export default Costs;
