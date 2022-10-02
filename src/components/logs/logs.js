import './logs.css';
import LogRecord from './logrecord';

const Logs = (props) => {
  return (
    <div className="log_container">
      <h4>{props.title}</h4>
      {props.logrecords}
    </div>
  )
}

export default Logs;
