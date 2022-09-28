import './selectCategory.css'
import CategoryTag from './categorytag.js'


const SelectCategory = () => {
  return (
    <div className="div div2 selectCategory">
      <div>
        <h3 className='head_style1'>Select Category</h3>
        <p className='para_style1'>kaha kaha kharch karte ho?</p>
      </div>
      <form id="selectCategoryForm">
        <div className="tags_container">
          <CategoryTag id="cat1" name="Clothing"/>
          <CategoryTag id="cat2" name="Travelling"/>
          <CategoryTag id="cat3" name="Food and Drinks"/>
          <CategoryTag id="cat4" name="Rent"/>
          <CategoryTag id="cat5" name="Groceries" />
        </div>
        <button type="submit" className='primary_btn btn btn_md'>Continue</button>
      </form>
    </div>
  )
}



export default SelectCategory;
