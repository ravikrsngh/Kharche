import './loader.css';

const Loader = ({display,label}) => {
  return (
    <div className="loader_container" style={{'display':display}}>
      <p>{label}</p>
      <div class="lds-grid"><div></div><div></div><div></div></div>
    </div>
  )
}


export default Loader;
