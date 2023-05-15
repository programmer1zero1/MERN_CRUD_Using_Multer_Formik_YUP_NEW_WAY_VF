import React from 'react'
import { Formik, Field, Form,useFormik } from 'formik'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Validation = () => {

  return (
    <>
    <Formik 
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
    onSubmit={async (values)=>{
    console.log(values)
    }}
    >
     {({values,setFieldValue}) => ( <Form>
      <hr></hr>
        <label htmlFor='pname'>P Name </label>
        <Field type='text' name='pname'/>

        <br/>
        <br/>

        <label htmlfor="description">Description </label>
        <Field type="text" name="description" />

        <br/>
        <br/>

        <label htmlfor="price">Price </label>
        <Field type="number" name="price" />

        <br/>
        <br/>

        <label htmlfor="image">Email </label>
        <input type="file" name="image" onChange={(e)=>setFieldValue("image", e.currentTarget.files[0])} />

        <br/>
        <br/>


        <label htmlfor="email">Email </label>
        <Field type="text" name="email" />
         
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

        
        <br/>
        <br/>

        <label for="address">Address: </label>
        <Field as="textarea" name="address"  />

        <br/>
        <br/>

        <label htmlfor="password">Password </label>
        <Field type="text" name="password"  />

        <br/>
        <br/>

        <label htmlfor="cpassword">Password </label>
        <Field type="text" name="cpassword"  />


        <button type='submit'>Click Me</button>

      </Form>
      )}
    </Formik>
    </>
  )
}

export default Validation

