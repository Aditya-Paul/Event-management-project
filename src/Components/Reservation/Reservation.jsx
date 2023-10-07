import { Link } from "react-router-dom";

const Reservation = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0jKQdkj/Corporate-Event-Management.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="col hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Get the party started</h1>
                        <p className="mb-5">As the premier event planning company in the area.Each evnet and client is unique and we belive our service should be as well.</p>
                        <button className="btn btn-primary"><Link to='/reservation'>Make a reservation</Link></button>
                    </div>
                </div>

                {/* progress */}
                <div>
                    <h2 className="text-5xl font-extrabold text-purple-400">Our Pregress</h2>

                    <div>
                        <p className="text-3xl font-normal text-white">Wedding Planning</p>
                        <progress className="progress progress-primary w-56 bg-white" value={80} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-white">Birthday Party Coordination</p>
                        <progress className="progress progress-primary w-56 bg-white" value={40} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-white">Corporate Event Management</p>
                        <progress className="progress progress-primary w-56 bg-white" value={60} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-white">Concert Production</p>
                        <progress className="progress progress-primary w-56 bg-white" value={90} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-white">Private Party Hosting</p>
                        <progress className="progress progress-primary w-56 bg-white" value={70} max="100"></progress>
                    </div>

                    <div>
                        <p className="text-3xl font-normal text-white">Conference Planning</p>
                        <progress className="progress progress-primary w-56 bg-white" value={60} max="100"></progress>
                    </div>

                    


                </div>
            </div>
        </div>
    );
};

export default Reservation;