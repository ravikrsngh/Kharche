import './addExpense.css';

const CategoryDropdownOption = (props) => {
  return (
    <option value={props.value} className="form_inputcontainer">
        <label><img src={props.img} /></label>
        <p className="input">{props.value}</p>
    </option>
  );
}

export default CategoryDropdownOption;
