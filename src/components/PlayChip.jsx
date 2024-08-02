import PropTypes from 'prop-types';
import icon_rock from "../assets/images/icon-rock.svg";
import icon_paper from "../assets/images/icon-paper.svg";
import icon_scissors from "../assets/images/icon-scissors.svg";

const PlayChip = ({ type, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(type);
  };

  return (
    <button 
      className={`play-chip ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      aria-label={type}
    >
      <img src={getIcon(type)} alt={getIconAlt(type)} />
    </button>
  );
};

PlayChip.propTypes = {
  type: PropTypes.oneOf(['rock', 'paper', 'scissors']).isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

PlayChip.defaultProps = {
  isSelected: false,
};

// Helper function to get the appropriate icon for each type
function getIcon(type) {
  switch (type) {
    case 'rock':
      return icon_rock;
    case 'paper':
      return icon_paper;
    case 'scissors':
      return icon_scissors;
    default:
      return null;
  }
}

// Helper function to get the appropriate alt text for each type
function getIconAlt(type) {
  switch (type) {
    case 'rock':
      return 'Rock';
    case 'paper':
      return 'paper'
		case 'scissors':
			return 'Scissors';
		default:
			return null;
	}
}

export default PlayChip;