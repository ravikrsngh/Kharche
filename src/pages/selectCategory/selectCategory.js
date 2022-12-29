import './selectCategory.css'
import CategoryTag from './categorytag.js'
import {useState} from 'react';
// import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
import {auth,db} from './../../firebaseconfig.js'

const SelectCategory = () => {

  let [selectedCategories,setselectedCategories] = useState([])

  let categories = [
    {
      uid:"General",
      name: "Clothing",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fclothing.png?alt=media&token=e05fe472-9bb5-4a6b-9186-a193e36d426c"
    },
    {
      uid:"General",
      name: "Cleaning",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fcleaning.png?alt=media&token=1538143e-afaf-43f0-8d16-8641253b24b7"
    },
    {
      uid:"General",
      name: "Education",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Feducation.png?alt=media&token=2b74e9ca-6401-48ef-a6ce-61141150dd65"
    },
    {
      uid:"General",
      name: "Electricity",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Felectricity.png?alt=media&token=b4ae1b61-f1d0-4ff3-bde2-9d52748f62b3"
    },
    {
      uid:"General",
      name: "Entertainment",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fentertainment.png?alt=media&token=2b4373e3-d25e-490a-9100-054c8d7febaf"
    },
    {
      uid:"General",
      name: "Food",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Ffood.png?alt=media&token=cb608f81-d848-488d-952c-2aa7e7b11557"
    },
    {
      uid:"General",
      name: "Gifts",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fgifts.png?alt=media&token=f4172c9c-f53a-4b3b-bab7-c766fca51cf9"
    },
    {
      uid:"General",
      name: "Grocery",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fgrocery.png?alt=media&token=164aba15-f0d2-49da-85f3-c0b3408a451a"
    },
    {
      uid:"General",
      name: "Home",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fhome.png?alt=media&token=e4c8355c-c502-4f64-84ca-061ddf5d0628"
    },
    {
      uid:"General",
      name: "Medicine",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fmedicine.png?alt=media&token=8414e299-aa99-4691-9578-e7661eb9bc2d"
    },
    {
      uid:"General",
      name: "Personal Care",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fpersonalcare.png?alt=media&token=2339e12b-8246-45df-9db2-2780f61e44f3"
    },
    {
      uid:"General",
      name: "Travel",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Ftravel.png?alt=media&token=5b3dd4ad-2a90-4787-bfb4-353d2f3617e7"
    },
    {
      uid:"General",
      name: "Lent",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Frupee.png?alt=media&token=a6d25b47-ca98-48fa-85fa-fc3f22010972"
    },
    {
      uid:"General",
      name: "Paid Loan",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Frupee.png?alt=media&token=a6d25b47-ca98-48fa-85fa-fc3f22010972"
    },
    {
      uid:"General",
      name: "Vacation",
      icon:"https://firebasestorage.googleapis.com/v0/b/kharche-173f7.appspot.com/o/Category%2Fvacation.png?alt=media&token=6754301b-7ff7-4854-aea9-d4d7bd39229b"
    }
  ]


  const onSubmitCategoryForm = async (e) => {
    e.preventDefault()
    console.log("Submitting Category Form");
    console.log(selectedCategories);
    if (selectedCategories.length < 4) {
      alert("Selected atleast 4 categories.")
      return
    }
    try {
      // for (var i = 0; i < categories.length; i++) {
      //   const docRef = await addDoc(collection(db, "UserCategory"),categories[i]);
      //   console.log("Sn:" + i +" Document written with ID: " + docRef.id);
      // }
      // const querySnapshot = await getDocs(collection(db, "UserCategory"));
      // querySnapshot.forEach(async (d) => {
      //   let dd = doc(db, "UserCategory", d.id)
      //   await deleteDoc(dd);
      //   console.log("Deleted");
      // });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
