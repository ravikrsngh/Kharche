import './dashboard.css';
import searchicon from './../../assets/icons/search.png';
import rsicon from './../../assets/icons/rs_nobg.png';
import Logs from './../../components/logs/logs';
import Navbar from './../../components/navbar/navbar';

const Dashboard = () => {
  return (
    <div className="div">
      <div className="dashboard_header">
        <div className="profile_info">
          <h2>Hello</h2>
          <h1>Ravi</h1>
        </div>
        <div className="search_container">
          <button><img src={searchicon} /></button>
        </div>
      </div>
      <div className="spends_container">
        <h3>Expenses</h3>
        <p>Rs. <span>12000</span> </p>
        <div className="dashboard_analysis">
          <p>Analysis coming soon!!</p>
        </div>
      </div>
      <Logs title="Today" img={rsicon} />
      <Logs title="27th Sept, 2022" img={rsicon} />
      <Navbar/>
    </div>
  );
}


export default Dashboard;
