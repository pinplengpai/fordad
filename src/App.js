import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLaptop} from '@fortawesome/free-solid-svg-icons';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {NAME, POSITION, EMAIL, PHONE, LINE, NICKNAME} from './Configs';


function App() {
 
  return (
    <div className="card">
      <div className="company"><p className="company-name">PESTON</p><span>Film Co., Ltd.</span></div>

      <p className="name">{NAME}</p>
      <p className="nickname">{NICKNAME}</p>
      <p className="position">{POSITION}</p>
      <div className="line"></div>
      <div className="info">
        <a href={'tel:'+ PHONE}>
        <p><FontAwesomeIcon icon={faMobileAlt}/>     {PHONE}</p>
        </a>
        <a href={'mailto:'+EMAIL}>
        <p><FontAwesomeIcon icon={faEnvelope}/>     {EMAIL}</p>
        </a>
        <a href="http://www.santafilm.com/"><p><FontAwesomeIcon icon={faLaptop}/>  www.santafilm.com</p></a>
      </div>
      <div className="santa-name">The Subsidiary Company of Santa International Film Productions Co., Ltd.</div>
    </div>
  );
}

export default App;
