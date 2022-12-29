import './addExpense.css';

const CategoryDropdownOption = (props) => {
  const selectThisCategory = () => {
    let data = {
      icon:props.icon,
      label:props.label,
      value:props.value
    }
    props.handlercategorySelected(data)
    props.setcategoryOptionDisplay("none")
  }
  return (
    <div className="form_inputcontainer" onClick={selectThisCategory}>
        <label><img src={props.icon} /></label>
        <p className="input">{props.label}</p>
    </div>
  );
}

export default CategoryDropdownOption;
