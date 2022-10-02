import './closebtn.css';
import closebtnicon from './../../assets/icons/x.png';
const CloseBtn = (props) => {
  const Close = () => {
    props.func(props.value)
  }
  return (
    <button type="button" className="closebtn" onClick={Close}><img src={closebtnicon} /></button>
  );
}

export default CloseBtn;
