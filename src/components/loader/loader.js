import './loader.css';

const Loader = ({display}) => {
  return (
    <div className="loader_container" style={{'display':display}}>
      <div class="lds-grid"><div></div><div></div><div></div></div>
    </div>
  )
}


export default Loader;
