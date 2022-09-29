import './addExpense.css';
import CategoryDropdownOption from './categorydropdownoption.js';
import CloseBtn from './../../components/closebtn/closebtn';
import calendaricon from './../../assets/icons/calendar.png';
import msgicon from './../../assets/icons/msg.png';
import rsicon from './../../assets/icons/Rs.png';

const AddExpense = () => {
  return (
    <div className='div div2 addExpense'>
      <div className='addExpense_heading_container'>
        <h3 className='head_style1'>Add Expense</h3>
        <p className='para_style1'>kitna kharcha kiye bhai ?</p>
      </div>
      <form className='addExpense_form' id="addExpense_form">
        <div className="form_inputcontainer expenseinput">
            <input type="text" placeholder="Your Expense (Rs.)" />
        </div>
        <div className="form_inputcontainer">
          <label><img src={calendaricon}/></label>
          <input className="input" type="text" placeholder="Date" />
        </div>
        <div className="form_inputcontainer">
          <label><img src={rsicon}/></label>
          <input className="input" type="text" placeholder="Category" />
        </div>
        <div className="form_inputcontainer">
          <label><img src={msgicon}/></label>
          <input className="input" type="text" placeholder="Note" />
        </div>
        <br/>
        <button type="submit" className='primary_btn btn btn_lg'>Add</button>
      </form>
      <CloseBtn />
    </div>
  )
}


export default AddExpense;
