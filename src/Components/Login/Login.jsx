import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {googlesignIN,userlogin} = useContext(AuthContext)
    console.log('ok',googlesignIN)
    const handlelogin = e => {
        e.preventDefault();

        //way 1
        //const email = e.target.email.value

        //way 2
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)


        userlogin(email,password)
        .then(res=>{
            Swal.fire("Good job!", "Successfully logged in", "success");
            console.log(res.user)
        })
        .catch(error =>{
            Swal.fire("Oops!", "Please Check email and password again", "error");
            console.error(error)
        })

    }
    const handlegooglein =()=>{
        googlesignIN()
        .then(res=>{
            console.log(res.user)
            Swal.fire("Good job!", "Successfully logged in", "success");
            
        })
        .catch(error=>{
            Swal.fire("Oops!", "Something wrong! try again", "error");
            console.log(error)})
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="hero bg-base-200 mt-4">
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 items-center  justify-center ">
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>

                            <p>Create Account <Link to='/register' className="text-pink-400" >Register</Link> </p>
                        </form>
                    </div>

                    <div className=" text-center">
                        <h2 className="text-4xl">You can also login with </h2>
                        <button onClick={handlegooglein} className="btn btn-primary">Google</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;