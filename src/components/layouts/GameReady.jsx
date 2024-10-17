import bgTriangle from '../../assets/images/bg-triangle.svg';
import PlayChip from "../PlayChip"

const GameReady = ({ onChoiceSelected }) => {
  return (
    <div className="game-ready">
      <div className="game-ready__background">
        <img src={bgTriangle} alt="Triangle background" className="game-ready__triangle" />
      </div>
      <div className="game-ready__choices">
        <PlayChip type="rock" isSelected={false} onSelect={() => {}} />
        <PlayChip type="paper" isSelected={false} onSelect={() => {}} />
        <PlayChip type="scissors" isSelected={false} onSelect={() => {}} />
      </div>
    </div>
  );
};

export default GameReady;
