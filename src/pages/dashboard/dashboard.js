import './dashboard.css';
import searchicon from './../../assets/icons/search.png';
import rsicon from './../../assets/icons/rs_nobg.png';
import Logs from './../../components/logs/logs';
import LogRecord from './../../components/logs/logrecord';
import Navbar from './../../components/navbar/navbar';
import { collection, getDocs, doc, query, where, deleteDoc } from "firebase/firestore";
import {useState, useContext, useEffect} from 'react';
import AuthContext from './../../context/AuthContext';
import {auth,db} from './../../firebaseconfig.js';
import Loader from './../../components/loader/loader';

const Dashboard = () => {

  let {user} = useContext(AuthContext)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let [allExpenses, setallExpenses] = useState([])
  let [currentMonthExpense, setcurrentMonthExpense] = useState(0)
  let [loaderDisplay,setloaderDisplay] = useState("none")

  const getPreviousDates = (d) => {
    let today = new Date();
    const previous = new Date(today.getTime());
    previous.setDate(today.getDate() - d);
    if (String(previous.getDate()).length == 1) {
      var day = '0' + String(previous.getDate())
    } else {
      var day = String(previous.getDate())
    }

    if (String(previous.getMonth() + 1).length == 1) {
      var month = '0' + String(previous.getMonth() + 1)
    } else {
      var month = String(previous.getMonth() + 1)
    }

    return String(previous.getFullYear()) + "-" + month + "-" + day
  }

  const formatDate = (d) => {
    let today = new Date()
    let date = new Date(d.join("-"))
    if (date.getDate() === today.getDate()) {
      return "Today"
    } else {
      return String(date.getDate()) + " " + months[date.getMonth()] + ", " + String(date.getFullYear())
    }
  }


  const fetchAllExpenses = async () => {

    // Fetching total expense of current month
    setloaderDisplay("flex")
    let currentMonth = getPreviousDates(0).split("-");
    let q = query(
      collection(db, "Expenses"),
      where("uid", "==", user.uid),
      where(`date.year`, "==" , currentMonth[0]),
      where(`date.month`, "==" , currentMonth[1]),
    )
    const querySnapshot = await getDocs(q);
    let totalExpense = 0
    querySnapshot.forEach((d) => {
      totalExpense += d.data().expense
    })


    // Getting records for last 4 days
    let allLogs = []
    for (var i = 0; i < 4; i++) {
      let newdate = getPreviousDates(i).split("-");
      let logtitle = formatDate(newdate)
      let q = query(
        collection(db, "Expenses"),
        where("uid", "==", user.uid),
        where(`date.year`, "==" , newdate[0]),
        where(`date.month`, "==" , newdate[1]),
        where(`date.day`, "==" , newdate[2]),
      )
      const querySnapshot = await getDocs(q);
      let logrecords = []
      querySnapshot.forEach((d) => {
        let data = d.data()
        logrecords.push(<LogRecord img={data.category.icon} title={data.note} subTitle={data.category.label} value={data.expense} />)
      })
      if (logrecords.length == 0) {
        logrecords.push(<LogRecord img="" title="No Expenses" subTitle="" value="0" />)
      }
      allLogs.push(<Logs title={logtitle} logrecords={logrecords} />)
    }

    setcurrentMonthExpense(totalExpense)
    setallExpenses(allLogs)
    setloaderDisplay("none")
  }



  useEffect(() => {
    fetchAllExpenses()
  },[])

  return (
    <div className="div">
      <div className="dashboard_header">
        <div className="profile_info">
          <h2>Hello</h2>
          <h1>{user.displayName}</h1>
        </div>
        <div className="search_container">
          <button><img src={searchicon} /></button>
        </div>
      </div>
      <div className="spends_container">
        <h3>Expenses this Month</h3>
        <p>Rs. <span>{currentMonthExpense}</span> </p>
        <div className="dashboard_analysis">
          <p>Analysis coming soon!!</p>
        </div>
      </div>
      {allExpenses}
      <br />
      <br />
      <Navbar iconColors={['#41224A','#B9B9B9','#B9B9B9','#B9B9B9']} />
      <Loader display={loaderDisplay} label="Fetching all expenses..."/>
    </div>
  );
}


export default Dashboard;
