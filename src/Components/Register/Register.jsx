import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createuser, update } = useContext(AuthContext)
    const handle_register = e => {
        e.preventDefault();

        //Way 1
        //const email = e.target.email.value

        //way 2
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const image = form.get('image')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password)

        if (password.length < 6) {
            Swal.fire("Oops!", "Password must 6 char", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Oops!", "Must have one capital letter", "error");
            return;
        }
        else if (!/[ -/:-@[-`{-~]/.test(password)) {
            Swal.fire("Oops!", "must have one special char", "error");
            return;
        }
        createuser(email, password)
            .then(res => {
                //console.log(email,res.user)
                update(name, image)
                    .then(res => {
                        Swal.fire("Good job!", "Successfully created user profile", "success");
                    })
            })
            .catch(error=>{
                Swal.fire("Oops!", `${error}`,"error")
            }
            )

        update(name)

    }
    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 pt-32 md:pt-28 lg:pt-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handle_register} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-url</span>
                                </label>
                                <input type="name" name="image" placeholder="Direck link photo url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />


                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>

                            <p className='text-center mt-4 text-2xl'>Already have an account<Link to='/login' className='text-blue-600'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;