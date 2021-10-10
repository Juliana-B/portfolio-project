import React, {useState} from 'react'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'
import './Form.css'
toast.configure()

const PostForm = () => {

        
        
            const [data , setData] = useState({
                name: '',
                email: '',
                message: ''
            })
        
            const submit = () => {
                const url ='https://jsonplaceholder.typicode.com/posts'
                Axios.post(url, {
                    name: data.name,
                    title: data.email,
                    body: data.message
                })
                .then(res=>{
                    console.log(res.data)
                })
            }
        


            const handle = (e) => {
                const newdata ={...data}
                newdata[e.target.id] = e.target.value
                setData(newdata)
                console.log(newdata)
            }

           
            const successToast = () => {
                toast("Your message was sent successfully", {
                    className: 'custom-toast',
                    draggable: 'true', 
                    position: 'toast.POSITION.BOTTOM_LEFT',
                    closeOnClick: true,
                    pauseOnHover: true,
                })
            }  

            const handleClick = () => {
                submit ();
                successToast();
            }
        

    return (
        <div className='container sect mt-5'>
            <h1 className='d-flex head justify-content-center mb-5'>Contact Me</h1>
            <form onSubmit={(e)=> handleClick()}>
                <div className="row g-3 justify-content-center">
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input onChange={(e) => handle(e)} id='name' className='form-control' value={data.name} placeholder='Your name' type='text' required></input>
                    </div>
                </div>

                <div className="row g-3 justify-content-center">
                    <div className="col-md-6">
                        <label className="form-label mt-4">Email</label>
                        <input onChange={(e) => handle(e)} id='email' className='form-control' value={data.email}  placeholder='email' type='email' required></input>
                    </div>
                </div>

                <div className="row g-3 justify-content-center">
                    <div className="col-md-6">
                        <label className="form-label mt-4">Your Message</label>
                        <textarea onChange={(e) => handle(e)} id='message' className="form-control" 
                            value={data.message} type='text' placeholder="Your Message" required>
                        </textarea>
                    </div>
                </div>
                <div className="row g-3 justify-content-center submit mt-4 mb-3">
                    <div className="col-6">
                        <button className="btn" type="submit" onSubmit={successToast}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PostForm
