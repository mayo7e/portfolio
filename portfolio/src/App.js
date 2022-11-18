import DownChevron from "./Down_Chevron.png"


function App() {
  return (
    <div className="App">
      <h1>View portfolio<img src={DownChevron} alt="right arrow" /></h1>
        <a href="#0">Github Search directory</a>
        <br />
        <br />
        <a href="#0">Crowdsource project</a>
        <br />
        <br />
        <a className="tooltip" href="https://metabnb-mayo7e.vercel.app/">Metabnb
            <span>
              <li>View website</li>
              <li>View Github Code</li>
            </span>
          </a>
    </div>
  );
}

export default App;
