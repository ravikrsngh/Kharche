const CategoryTag = (props) => {

  const onChangeCategoryTagHandler = () => {
    console.log("hey");
  }
  
  return (
    <div className="category_checkbox_container tag">
      <input type="checkbox" id={props.id} onChange={onChangeCategoryTagHandler} />
      <label for={props.id} >{props.name}</label>
    </div>
  )
}



export default CategoryTag;
