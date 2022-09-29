import './logs.css';
import LogRecord from './logrecord';

const Logs = (props) => {
  return (
    <div className="log_container">
      <h4>{props.title}</h4>
      <LogRecord img={props.img} title="Travelling to Gatsbsjak" category="Travelling" />
      <LogRecord img={props.img} title="Travelling to Gatsbsjak" category="Travelling" />
      <LogRecord img={props.img} title="Travelling to Gatsbsjak" category="Travelling" />
    </div>
  )
}

export default Logs;
