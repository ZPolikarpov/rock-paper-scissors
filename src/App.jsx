import icon_logo from "./assets/images/logo.svg"
import PlayChip from "./components/PlayChip"

function App() {
	return (
		<>
      <div className="container">
        <header className="site-header">
            <div className="site-header__inner">
              <img className="logo" src={icon_logo} alt="Rock Paper Scissors" />
              <div className="scoreboard">
                <p className="heading-3" style={{letterSpacing: "1.58px"}}>SCORE</p>
                <p className="fs-1000 clr-neutral-400">10</p>
              </div>
            </div>
        </header>
				
				<main className="main-content">
					<PlayChip type="rock" isSelected={false} onSelect={() => {}} />
					<PlayChip type="paper" isSelected={false} onSelect={() => {}} />
					<PlayChip type="scissors" isSelected={false} onSelect={() => {}} />
				</main>
      </div>
		</>
  )
}

export default App
