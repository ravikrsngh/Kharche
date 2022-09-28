import './addExpense.css';


const Register = () => {
  return (
    <div className='div div2 addExpense'>
      <div className='addExpense_heading_container'>
        <h3 className='head_style1'>Add Expense</h3>
        <p className='para_style1'>kitna kharcha kiye bhai ?</p>
      </div>
      <form className='addExpense_form' id="addExpense_form">
        <input className="input_style1" type="text" placeholder="Name" />
        <input className="input_style1" type="email" placeholder="Email" />
        <input className="input_style1" type="password" placeholder="Password" />
        <button type="submit" className='primary_btn btn btn_lg'>Register</button>
      </form>
    </div>
  )
}


export default Register;
