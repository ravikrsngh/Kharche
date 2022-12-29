import React,{useState, useContext,useRef,useEffect } from 'react';
import AuthContext from './../../context/AuthContext';
import './analytics.css';
import { useNavigate } from "react-router-dom";
import Navbar from './../../components/navbar/navbar';
import ReactEChart from 'echarts-for-react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import {auth,db} from './../../firebaseconfig.js'

const Dropdown = ({options,inputRef,filterDisplayHandler}) => {

  const selectFilter = (e,val) => {
    e.stopPropagation()
    inputRef.current.value = val;
    filterDisplayHandler("")
  }


  console.log(options);
  return (
    <div className="dropdown_options_container">
      {options.map((ins) => {
        return (
          <div className="dropdown_options" onClick={(e) => selectFilter(e,ins)}>
            <span>{ins}</span>
          </div>
        )
      })}
    </div>
  )

}


const Analytics = () => {

  const filter1Ref = useRef()
  const filter2Ref = useRef()
  const filter3Ref = useRef()

  let [categoryOptions, setcategoryOptions] = useState([])

  const [filterDisplay,setFilterDisplay] = useState("")

  const [chartOptions, setChartOptions] = useState({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      type: 'bar',
      barWidth: '80%',
      label: {
        show: true,
        position: 'inside',
        fontSize: 8,
      },
      itemStyle:{
        borderRadius: 5,
        color:"#90659A",
      },
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
})

  let auth_ctx = useContext(AuthContext)

  let navigate = useNavigate();


  const submitFilterForm = () => {
    console.log("Form will be submitted");
  }

  const openFilterDropdown = (filterType) => {
    setFilterDisplay(filterType)
  }

  const loadFilter2 = () => {
    if (filter1Ref.current?.value == "Month") {
      return <input type="month" ref={filter2Ref} name="filter2" defaultValue="Month" onChange={submitFilterForm} />
    } else if (filter1Ref.current?.value == "Date") {
      return <input type="date" ref={filter2Ref} name="filter2" defaultValue="Month" onChange={submitFilterForm} />
    } else if (filter1Ref.current?.value == "Category") {
      return (
        <React.Fragment>
          <input type="text" ref={filter2Ref} name="filter2" defaultValue="Month" onChange={submitFilterForm} onClick={() => {openFilterDropdown("filter2")}} readOnly />
          { (filterDisplay == "filter2") ? <Dropdown options={categoryOptions} inputRef={filter2Ref} filterDisplayHandler={setFilterDisplay} /> : null }
        </React.Fragment>
      )
    }
  }

  const loadfilter3options = () => {
    if (filter1Ref.current.value == 'Month') {
      return ['By Date','By Category']
    } else if (filter1Ref.current.value == 'Date') {
      return ['By Category']
    } else if (filter1Ref.current.value == 'Category') {
      return ['By Date','By Month']
    }
  }

  const fetchCategoryOptions = async () => {
    const querySnapshot = await getDocs(collection(db, "UserCategory"));
    let alloptions = []
    querySnapshot.forEach((doc) => {
    let data = doc.data()
    //alloptions.push([data.name,doc.id])
    alloptions.push(data.name)
  });
  setcategoryOptions(alloptions)
  }

  useEffect( () =>{
    fetchCategoryOptions()
  },[])

  return (
    <div className='div analytics'>

      <div className="analytics_header">
        <h2>Lets Analyze</h2>
        <p>Select options below to create your analysis prompt.</p>
      </div>

      <form id="analytics_form">

        <div className="analytics_filter_element analytics_main_filter_element" onClick={() => {openFilterDropdown("filter1")}}>
          <input ref={filter1Ref} name="filter1" defaultValue="Month" onChange={submitFilterForm}  readOnly />
          { (filterDisplay == "filter1") ? <Dropdown options={['Month','Date','Category']} inputRef={filter1Ref} filterDisplayHandler={setFilterDisplay} /> : null }
        </div>
        <div className="analytics_filter_element">
          {loadFilter2()}
        </div>
        <div className="analytics_filter_element" onClick={() => {openFilterDropdown("filter3")}}>
          <input ref={filter3Ref} name="filter3" defaultValue="Month" readOnly onChange={submitFilterForm}  />
          { (filterDisplay == "filter3") ? <Dropdown options={loadfilter3options()} inputRef={filter3Ref} filterDisplayHandler={setFilterDisplay} /> : null }
        </div>

      </form>

      <div className="analytics_logs_container">

      </div>
      <ReactEChart option={chartOptions} />
      <Navbar iconColors={['#B9B9B9','#41224A','#B9B9B9','#B9B9B9']} />
    </div>
  )
}



export default Analytics;
