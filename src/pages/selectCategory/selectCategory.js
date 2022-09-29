import './selectCategory.css'
import CategoryTag from './categorytag.js'
import {useState} from 'react';

const SelectCategory = () => {

  let [selectedCategories,setselectedCategories] = useState([])


  const onSubmitCategoryForm = (e) => {
    e.preventDefault()
    console.log("Submitting Category Form");
    if (selectedCategories.length < 4) {
      alert("Selected atleast 4 categories.")
      return
    }
    console.log(selectedCategories);
  }
  return (
    <div className="div div2 selectCategory">
      <div>
        <h3 className='head_style1'>Select Category</h3>
        <p className='para_style1'>kaha kaha kharch karte ho?</p>
      </div>
      <form id="selectCategoryForm" onSubmit={onSubmitCategoryForm}>
        <div className="tags_container">
          <CategoryTag selelectthiscategory={setselectedCategories} id="cat1" name="Clothing"/>
          <CategoryTag selelectthiscategory={setselectedCategories} id="cat2" name="Travelling"/>
          <CategoryTag selelectthiscategory={setselectedCategories} id="cat3" name="Food and Drinks"/>
          <CategoryTag selelectthiscategory={setselectedCategories} id="cat4" name="Rent"/>
          <CategoryTag selelectthiscategory={setselectedCategories} id="cat5" name="Groceries" />
        </div>
        <button type="submit" className='primary_btn btn btn_md'>Continue</button>
      </form>
    </div>
  )
}



export default SelectCategory;
