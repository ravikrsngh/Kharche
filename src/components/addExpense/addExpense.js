import './addExpense.css';
import CategoryDropdownOption from './categorydropdownoption.js';
import CloseBtn from './../../components/closebtn/closebtn';
import calendaricon from './../../assets/icons/calendar.png';
import msgicon from './../../assets/icons/msg.png';
import rsicon from './../../assets/icons/Rs.png';
import Loader from './../../components/loader/loader';
import React,{useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import {auth,db} from './../../firebaseconfig.js'
import {Link, useNavigate } from 'react-router-dom';

const AddExpense = ({setAddExpenseModalDisplay}) => {

  let dateRef = useRef()
  let expenseRef = useRef()
  let noteRef = useRef()
  const storage = getStorage();
  let navigate = useNavigate();

  let [categoryOptionDisplay, setcategoryOptionDisplay] = useState("none")
  let [loaderDisplay,setloaderDisplay] = useState("none")

  const defaultCategory = {
    icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Frupee.png?alt=media&token=a6d25b47-ca98-48fa-85fa-fc3f22010972",
    label:"Select Category",
    value:""
  }

  let [categorySelected, setcategorySelected] = useState(defaultCategory)

  let [categoryOptions, setcategoryOptions] = useState([])

  const fetchCategoryOptions = async () => {
    const querySnapshot = await getDocs(collection(db, "UserCategory"));
    let alloptions = []
    querySnapshot.forEach((doc) => {
    let data = doc.data()
    alloptions.push(<CategoryDropdownOption icon={data.icon} label={data.name} value={doc.id} handlercategorySelected={setcategorySelected} setcategoryOptionDisplay={setcategoryOptionDisplay}  />)
  });
  setcategoryOptions(alloptions)
  }

  const addNewExpense = async (e) => {
    e.preventDefault()
    setloaderDisplay("flex")
    let d = dateRef.current.value
    d = d.split("-")
    let formData ={
      uid:auth.currentUser.uid,
      expense:expenseRef.current.value,
      date:{
        day:d[2],
        month:d[1],
        year:d[0]
      },
      category:categorySelected,
      note:noteRef.current.value
    }
    let isnum = /^[0-9]+$/.test(formData.expense);
    if (!isnum ) {
      alert("Expense should only contain digits.")
      return
    }
    if (formData.category.value == "") {
      alert("Please select a category")
      return
    }
    let dref = doc(db, "UserCategory", formData.category.value)
    let docRef = await addDoc(collection(db, "Expenses"),{...formData,expense:parseInt(expenseRef.current.value)});
    dateRef.current.value = ""
    expenseRef.current.value = ""
    noteRef.current.value = ""
    setloaderDisplay("none")
  }



  useEffect( () =>{
    fetchCategoryOptions()
  },[])

  return (
    <React.Fragment>
    {ReactDOM.createPortal(
      (
        <div className='div div2 addExpense'>
          <div className='addExpense_heading_container'>
            <h3 className='head_style1'>Add Expense</h3>
            <p className='para_style1'>kitna kharcha kiye bhai ?</p>
          </div>
          <form className='addExpense_form' id="addExpense_form" onSubmit={addNewExpense}>
            <div className="form_inputcontainer expenseinput">
                <input ref={expenseRef} type="text" placeholder="Your Expense (Rs.)" required />
            </div>
            <div className="form_inputcontainer">
              <label><img src="https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fcalendar.png?alt=media&token=3a93d202-2026-4fa4-acb2-a6f8e1f2d4f4" /></label>
              <input ref={dateRef} className="input" type="date" placeholder="Date"  required/>
            </div>
            <div>
            <div className="form_inputcontainer" onClick={()=>{setcategoryOptionDisplay("flex")}}>
              <label><img src={categorySelected.icon}/></label>
              <p>{categorySelected.label}</p>
            </div>
              <div className="category_option_container" style={{'display':categoryOptionDisplay}}>
                <div className="category_option">
                  {categoryOptions}
                  <CloseBtn func={setcategoryOptionDisplay} value="none" />
                </div>
              </div>
            </div>
            <div className="form_inputcontainer">
              <label><img src="https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fmessage.png?alt=media&token=dcd11c5d-c6ef-4033-b3d0-1387a9b8e81c" /></label>
              <input ref={noteRef} className="input" type="text" placeholder="Note"  required/>
            </div>
            <br/>
            <button type="submit" className='primary_btn btn btn_lg'>Add</button>
          </form>
          <CloseBtn func={setAddExpenseModalDisplay} value={false} />
          <Loader display={loaderDisplay} label="Adding expense..."/>
        </div>
      ),
      document.getElementById('add_expense_modal')
    )}
    </React.Fragment>
  )
}


export default AddExpense;
