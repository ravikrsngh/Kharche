import {useState} from 'react';

const CategoryTag = (props) => {

  let [tagSelected, setTagSelected] = useState(false)

  const onChangeCategoryTagHandler = () => {
    if (tagSelected) {
      setTagSelected(false)
    } else {
      setTagSelected(true)
      props.selelectthiscategory((prev)=>{
        return [props.id,...prev]
      })
    }

  }

  return (
    <div className={tagSelected? 'category_checkbox_container tag selected_tag': 'category_checkbox_container tag'} >
      <input type="checkbox" name="category" id={props.id} onChange={onChangeCategoryTagHandler} />
      <label for={props.id} >{props.name}</label>
    </div>
  )
}



export default CategoryTag;
