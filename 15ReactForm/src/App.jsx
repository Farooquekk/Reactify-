
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors,isSubmitting }
  } = useForm();
  
  async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log(data);
    
  }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div>
        <lable>First Name :</lable>
        <input  className={ errors.firstName?'error-input':' '} {...register('firstName',  { pattern: { value: /^[A-Za-z]+$/i, message: "First Name is not as per the rules" } })} />
        {errors.firstName && <p className='error-msg'>{ errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <lable>Middle Name :</lable>
        <input
          className={ errors.middleName?'error-input':' '}
          {...register('middleName', { required: true, minLength: { value: 3, message: 'Min Length atleast 3 ' }, maxLength: { value: 6, message: 'Max Length Atmost 6 ' } })} />
        { errors.middleName && <p className='error-msg'>{errors.middleName.message }</p>}
      </div>
      <br/>
      <div>
        <lable>Last Name :</lable>
        <input {...register('lastName', {required:true,minLength:3})} />
      </div>
      <div>
        <input type='submit' disabled={isSubmitting}
        value={isSubmitting?"submiting":"submit"}
        />
      </div>
    </form>
  )
}

export default App
