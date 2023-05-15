import React, {useState , useEffect , useRef } from 'react'
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { zyadavalidate } from './Zyadavalidate'

const ValidationTwo = () => {

  let navigate = useNavigate()
  let params = useParams()

  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
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


  let [initialValues,setInitialValues]=useState({
    pname:"",  
    description:"",
    price:"",
    image:"",
    email:"",
    interests:[],
    gender:"",
    degree:"",
    address:"",
    password:"",
    cpassword:""})


    useEffect(() => {
      const fetchData = async () => {
        const result = await Axios.get(`http://localhost:3400/multer/findone/${params.id}`);
        setInitialValues(result.data);  // just without checkbox write this line
      
      };
      fetchData();
    }, [params.id]);


  return (
    <>
    <hr/>
        <button className='btn btn-primary' onClick={()=>navigate("/show")}>Show All Products</button>
     <hr/>
    <Formik 
    validationSchema={zyadavalidate}
    initialValues={initialValues}
    onSubmit={ async(values)=>{
    console.log(values)
    let res = await Axios.put(`http://localhost:3400/multer/updateone/${params.id}`,values,{
      headers: {
        "Content-type": "multipart/form-data charset=UTF-8",
      }
    })
    console.log(res)
      navigate('/show')
    
    }}
    >


    

    {({values,setFieldValue,resetForm}) => ( <Form>
        <label htmlFor='pname'>P Name </label>
        <Field type='text' name='pname' />
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
        <Field type="number" name="price"  />
        <ErrorMessage name="price"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>

        <br/>
        <br/>

    

        <label htmlfor="email">Email </label>
        <Field type="text" name="email"  />
        <ErrorMessage name="email"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>
         
        <br/>
        <br/>

        <label htmlFor="interests">Interests</label>
                <br/>
                <label>
                    <Field type="checkbox" name="interests" value="music"  />
                    Music
                </label>
                <label>
                    <Field type="checkbox" name="interests" value="sports" />
                    Sports
                </label>
                <label>
                    <Field type="checkbox" name="interests" value="reading" />
                    Reading
                </label>
        <ErrorMessage name="interests"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>
        
        <br/>
        <br/>

        <label htmlFor="gender">Gender </label>
          <label>
            <Field type="radio" name="gender" value="male"   />
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

        <label htmlfor="cpassword">Password </label>
        <Field type="text" name="cpassword"   />
        <ErrorMessage name="cpassword"> 
        { msg => <div style={{ color: 'red' }}>{msg}</div> }
         </ErrorMessage>


         <br/>
         <br/>

           {/* // Just For Image */}
        <label htmlfor="image">Image </label>
        <input type="file" name="image"  ref={inputRef} onChange={(e)=>{setFieldValue("image", e.currentTarget.files[0]); setImage(URL.createObjectURL(e.target.files[0]))}}/>
        { image &&
          <button type="button" onClick={() => {
                setFieldValue('image', '');
                setImage(null);
                inputRef.current.value = "";
              }}>Remmove</button>
        }
        {image && (
          <h1>New File</h1>
        )}
        {image && (
        <div>
        <img src={image} alt="Preview" style={{ maxWidth: '20%', maxHeight: '20%' }} />
        </div>
        )}
        <center>Old File<td><img src={`http://localhost:3400/uploads/${initialValues.image}`} style={{ maxWidth: '20%', maxHeight: '20%' }} /></td></center>
      

          {/* // Just For Image with preview*/}
        {/* <label htmlfor="image">Image </label>
        <input type="file" name="image" onChange={handleImageChange} />
        {image && (
          <h1>New File</h1>
        )}
        {image && (
        <div>
        <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        )}
        <center>Old File<td><img src={`http://localhost:3400/uploads/${initialValues.image}`} width={100} height={100}  /></td></center> */}

        <br/>
         <br/>

        <button type='submit'>Click Me</button>
        <button type="button" onClick={() => {resetForm();setFieldValue('image', '');setImage(null);inputRef.current.value = "";}}>
        Clear
        </button>
      </Form>
    )}
    </Formik>
    </>
  )
}

export default ValidationTwo
