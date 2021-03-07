import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';



function App() {
  const handleClick = () => {
    window.open('http://line.me/ti/p/~pongbmwr1200gsa')
  }
  return (
    <div className="card">
      <h1>Panotte (Pong) Ratnajarn</h1>
      <p>Transport Manager</p>
      <div className="line"></div>
      <div className="info">
        <a href="tel:081-8623426">
        <p><FontAwesomeIcon icon={faMobileAlt}/>     081-8623426</p>
        </a>
        <a onClick ={() => handleClick()}>
          <p> <FontAwesomeIcon icon={faLine}/>     pongbmwr1200gsa</p>
        </a>
        <a href="mailto:mrpong.rat03@gmail.com">
        <p><FontAwesomeIcon icon={faEnvelope}/>     mrpong.rat03@gmail.com</p>
        </a>
      </div>
      <div className="company-name"><p>PESTON FILM COMPANY LIMITED.</p></div>
    </div>
  );
}

export default App;
