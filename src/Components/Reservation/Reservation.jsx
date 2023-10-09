import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Reservation = () => {
    const {user} = useContext(AuthContext)
    const handlereservation = () =>{

        {
            user? Swal.fire("Good", "You passed a private route ", "success"):
            Swal.fire("Oops!", "This is connected to a private route you you have to login first", "error");
        }
    }
    return (
        <div className="hero min-h-screen mt-12" style={{ backgroundImage: 'url(https://i.ibb.co/0jKQdkj/Corporate-Event-Management.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

                <div className="col hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Get the party started</h1>
                        <p className="mb-5">As the premier event planning company in the area.Each evnet and client is unique and we belive our service should be as well.</p>
                        <button onClick={handlereservation} className="btn btn-primary"><Link to='/reservation' className="text-black">Make a reservation</Link></button>
                    </div>
                </div>

                {/* progress */}
                <div>
                    <h2 className="text-5xl font-extrabold text-yellow-300">Our Progress</h2>

                    <div className="mt-4">
                        <p className="text-3xl font-normal text-purple-200">Wedding Planning</p>
                        <progress className="progress progress-primary w-64 bg-white" value={80} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-purple-200">Birthday Party Coordination</p>
                        <progress className="progress progress-primary w-64 bg-white" value={40} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-purple-200">Corporate Event Management</p>
                        <progress className="progress progress-primary w-64 bg-white" value={60} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-purple-200">Concert Production</p>
                        <progress className="progress progress-primary w-64 bg-white" value={90} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-purple-200">Private Party Hosting</p>
                        <progress className="progress progress-primary w-64 bg-white" value={70} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-purple-200">Conference Planning</p>
                        <progress className="progress progress-primary w-64 bg-white" value={60} max="100"></progress>
                    </div>

                    


                </div>
            </div>
        </div>
    );
};

export default Reservation;