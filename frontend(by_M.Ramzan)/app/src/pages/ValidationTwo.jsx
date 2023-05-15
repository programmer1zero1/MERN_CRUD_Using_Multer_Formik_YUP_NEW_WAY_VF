import React from 'react'
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { zyadavalidate } from './Zyadavalidate'
import { useState } from 'react'

const ValidationTwo = () => {

  let navigate = useNavigate()

  const [image, setImage] = useState(null);
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
 //1st Way TO Show  
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   } else {
//     setImage(null);
//   }
// };

 //2nd Way TO Show  
// if (file) {
//   const objectURL = URL.createObjectURL(file);
//   setImage(objectURL);
// } else {
//   setImage(null);
// }
// };

  return (
    <>
      <hr/>
        <button className='btn btn-primary' onClick={()=>navigate("/show")}>Show All Products</button>
     <hr/>
    <Formik 
    validationSchema={zyadavalidate}
    initialValues={{
        pname:"",  
        description:"",
        price:"",
        image:null,
        email:"",
        interests:[],
        gender:"",
        degree:"",
        address:"",
        password:"",
        cpassword:""}}
    onSubmit={ async(values)=>{
    console.log(values)
    let res = await Axios.post("http://localhost:3400/multer/createdata",values,{
      headers: {
        "Content-type": "multipart/form-data charset=UTF-8",
      }
    })
      navigate('/show')
    
    }}
    >
    {({values,setFieldValue,resetForm}) => (<Form>
        <label htmlFor='pname'>P Name </label>
        <Field type='text' name='pname'/>
        <ErrorMessage name="pname"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>
        <br/>
        <br/>

        <label htmlfor="description">Description </label>
        <Field type="text" name="description" />
        <ErrorMessage name="description"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

        <br/>
        <br/>

        <label htmlfor="price">Price </label>
        <Field type="number" name="price" />
        <ErrorMessage name="price"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

        <br/>
        <br/>


        <label htmlfor="email">Email </label>
        <Field type="text" name="email" />
        <ErrorMessage name="email"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>
         
        <br/>
        <br/>

        <label htmlFor="interests">Interests</label>
                <br/>
                <label>
                    <Field type="checkbox" name="interests" value="music"   />
                    Music
                </label>
                <label>
                    <Field type="checkbox" name="interests" value="sports"   />
                    Sports
                </label>
                <label>
                    <Field type="checkbox" name="interests" value="reading"  />
                    Reading
                </label>
        <ErrorMessage name="interests"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>
        
        <br/>
        <br/>

        <label htmlFor="gender">Gender </label>
          <label>
            <Field type="radio" name="gender" value="male"  />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="female"  />
            Female
          </label>
          <ErrorMessage name="gender"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

        <br/>
        <br/>

        <label for="degree">Choose a Category</label>
          <Field as="select" name="degree" >
          <option  value="null">-----</option>
          <option  value="bscs">BSCS</option>
          <option  value="mphil">MPhil</option>
          <option  value="PHD">PHD</option>
          <option  value="Other">Other</option>
          </Field>
          <ErrorMessage name="degree"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

        
        <br/>
        <br/>

        <label for="address">Address: </label>
        <Field as="textarea" name="address"  />
        <ErrorMessage name="address"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

        <br/>
        <br/>

        <label htmlfor="password">Password </label>
        <Field type="text" name="password"  />
        <ErrorMessage name="password"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

        <br/>
        <br/>

        <label htmlfor="cpassword">Confirm Password </label>
        <Field type="text" name="cpassword"  />
        <ErrorMessage name="cpassword"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

         <br/>
        <br/>

          
         {/* Just For Image */}
        <label htmlfor="image">Image </label>
        <input type="file" name="image" id='image' onChange={(e)=>{setFieldValue("image", e.currentTarget.files[0]); setImage(URL.createObjectURL(e.target.files[0])) }} />
        <br></br>
        { image &&
          <button type="button" onClick={() => {
                setFieldValue('image', '');
                setImage(null);
                document.getElementById("image").value = "";
              }}>Remmove</button>
        }
        {image && (
          <h3>Image</h3>
         )}
        {image && (
          <img src={image} alt="Preview" style={{ maxWidth: '20%', maxHeight: '20%' }} />
         )}
        <ErrorMessage name="image"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>


           {/* Just For Image with Preview */}
        {/* <label htmlfor="image">Image </label>
        <input type="file" name="image" onChange={handleImageChange} />
        {image && (
        <div>
          <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        )}
        <ErrorMessage name="image"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage> */}


        <br/>
        <br/>
      


        <button type='submit'>Add</button>
        <button type="button" onClick={() => {resetForm();setFieldValue('image', '');setImage(null);document.getElementById("image").value = "";}}>
        Clear
      </button>

      </Form>
    )}
    </Formik>
    </>
  )
}

export default ValidationTwo
