// import "./Dashboard.css";
// import { Link, useNavigate } from "react-router-dom";

// export default function Dashboard() {

//   const navigate = useNavigate();

//   const user = {
//     name: "Shreya",
//     lastAppointment: {
//       policy: "Health Shield",
//       date: "12 Nov, 2025",
//       time: "3:00 PM"
//     }
//   };

//   function handleLogout() {
//     alert("Logged out successfully!");
//     navigate("/login");
//   }

//   return (
//     <div className="dash-bg">
//       <div className="dash-card shadow-lg">
        
//         <h2 className="fw-bold">Welcome, {user.name} 👋</h2>
//         <p className="text-secondary mt-1">Here’s your activity overview.</p>

//         <div className="d-flex flex-column gap-3 mt-4">

//           <div className="dash-section p-3">
//             <h5 className="fw-bold">Last Appointment</h5>
//             <p className="m-0">Policy: <b>{user.lastAppointment.policy}</b></p>
//             <p className="m-0">Date: {user.lastAppointment.date}</p>
//             <p className="m-0">Time: {user.lastAppointment.time}</p>
//           </div>

//           <Link className="btn btn-primary mt-2" to="/policies">
//             Explore More Policies
//           </Link>

//           <Link className="btn btn-success" to="/appointment">
//             Book New Appointment
//           </Link>

//           <button className="btn btn-danger" onClick={handleLogout}>
//             Logout
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }
// -------------------------2nd================
// import "./Dashboard.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//     if (!loggedInUser) {
//       alert("Please login first!");
//       navigate("/login");
//       return;
//     }

//     setUser(loggedInUser);

//     const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
//     const userAppointments = allAppointments.filter(
//       (a) => a.email === loggedInUser.email
//     );
//     setAppointments(userAppointments);
//   }, [navigate]);

//   function handleLogout() {
//     localStorage.removeItem("loggedInUser");
//     alert("Logged out successfully!");
//     navigate("/login");
//   }

//   if (!user) return null;

//   // Always show the latest appointment
//   const latestAppointment = appointments[appointments.length - 1];

//   return (
//     <div className="dash-bg">
//       <div className="dash-card shadow-lg">
        
//         <h2 className="fw-bold">Welcome, {user.name} 👋</h2>
//         <p className="text-secondary mt-1">Here's your activity overview.</p>

//         <div className="d-flex flex-column gap-3 mt-4">

//           <div className="dash-section p-3">
//             <h5 className="fw-bold">Last Appointment</h5>

//             {appointments.length > 0 ? (
//               <>
//                 <p className="m-0">Policy: <b>{latestAppointment.policy}</b></p>
//                 <p className="m-0">Date: {latestAppointment.date}</p>
//                 <p className="m-0">Time: {latestAppointment.time}</p>
//               </>
//             ) : (
//               <p>No previous appointments found!</p>
//             )}
//           </div>

//           <Link className="btn btn-secondary" to="/appointments">
//   View All Appointments
// </Link>


//           <Link className="btn btn-primary mt-2" to="/policies">
//             Explore More Policies
//           </Link>

//           <Link className="btn btn-success" to="/appointment">
//             Book New Appointment
//           </Link>

//           <button className="btn btn-danger" onClick={handleLogout}>
//             Logout
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }


// ============================3rd===========
// import "./Dashboard.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useNotification } from "../components/NotificationContext";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { showNotification } = useNotification();
//   const [user, setUser] = useState(null);
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//     if (!loggedInUser) {
//       showNotification("Please login first!", "warning");
//       navigate("/login");
//       return;
//     }

//     setUser(loggedInUser);

//     const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
//     const userAppointments = allAppointments.filter(
//       (a) => a.email === loggedInUser.email
//     );
//     setAppointments(userAppointments);

//     // Show welcome notification when dashboard loads
//     showNotification(`Welcome to your dashboard, ${loggedInUser.name}!`, "info");
//   }, [navigate, showNotification]);

//   function handleLogout() {
//     localStorage.removeItem("loggedInUser");
//     showNotification("Logged out successfully!", "success");
//     navigate("/login");
//   }

//   if (!user) return null;

//   const latestAppointment = appointments[appointments.length - 1];

//   return (
//     <div className="dash-bg">
//       <div className="dash-card shadow-lg">
        
//         <h2 className="fw-bold">Welcome, {user.name} 👋</h2>
//         <p className="text-secondary mt-1">Here's your activity overview.</p>

//         <div className="d-flex flex-column gap-3 mt-4">

//           <div className="dash-section p-3">
//             <h5 className="fw-bold">Last Appointment</h5>

//             {appointments.length > 0 ? (
//               <>
//                 <p className="m-0">Policy: <b>{latestAppointment.policy}</b></p>
//                 <p className="m-0">Date: {latestAppointment.date}</p>
//                 <p className="m-0">Time: {latestAppointment.time}</p>
//               </>
//             ) : (
//               <p>No previous appointments found!</p>
//             )}
//           </div>

//           {/* FIXED: Remove onClick from Link - it was blocking navigation */}
//           <Link className="btn btn-secondary" to="/appointments">
//             View All Appointments ({appointments.length})
//           </Link>

//           <Link className="btn btn-primary mt-2" to="/policies">
//             Explore More Policies
//           </Link>

//           <Link className="btn btn-success" to="/appointment">
//             Book New Appointment
//           </Link>

//           <button className="btn btn-danger" onClick={handleLogout}>
//             Logout
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }


//=========================4th ===========








// import "./Dashboard.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useNotification } from "../components/NotificationContext";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { showNotification } = useNotification();
//   const [user, setUser] = useState(null);
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//     if (!loggedInUser) {
//       showNotification("Please login first!", "warning");
//       navigate("/login");
//       return;
//     }

//     setUser(loggedInUser);

//     const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
//     const userAppointments = allAppointments.filter(
//       (a) => a.email === loggedInUser.email
//     );
//     setAppointments(userAppointments);

//     // Show welcome notification when dashboard loads
//     showNotification(`Welcome to your dashboard, ${loggedInUser.name}!`, "info");
//   }, [navigate, showNotification]);

//   function handleLogout() {
//     localStorage.removeItem("loggedInUser");
//     showNotification("Logged out successfully!", "success");
//     navigate("/login");
//   }

//   if (!user) return null;

//   const latestAppointment = appointments[appointments.length - 1];

//   return (
//     <div className="dash-bg">
//       <div className="dash-card shadow-lg">
        
//         <h2 className="fw-bold">Welcome, {user.name} 👋</h2>
//         <p className="text-secondary mt-1">Here's your activity overview.</p>

//         <div className="d-flex flex-column gap-3 mt-4">

//           <div className="dash-section p-3">
//             <h5 className="fw-bold">Last Appointment</h5>

//             {appointments.length > 0 ? (
//               <>
//                 <p className="m-0">Policy: <b>{latestAppointment.policy}</b></p>
//                 <p className="m-0">Date: {latestAppointment.date}</p>
//                 <p className="m-0">Time: {latestAppointment.time}</p>
//               </>
//             ) : (
//               <p>No previous appointments found!</p>
//             )}
//           </div>

//           <Link className="btn btn-secondary" to="/appointments">
//             View All Appointments ({appointments.length})
//           </Link>

//           <Link className="btn btn-primary mt-2" to="/policies">
//             Explore More Policies
//           </Link>

//           <Link className="btn btn-success" to="/appointment">
//             Book New Appointment
//           </Link>

//           <button className="btn btn-danger" onClick={handleLogout}>
//             Logout
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }






//==================5th==============
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNotification } from "../components/NotificationContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      showNotification("Please login first!", "warning");
      navigate("/login");
      return;
    }

    setUser(loggedInUser);

    const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const userAppointments = allAppointments.filter(
      (a) => a.email === loggedInUser.email
    );
    setAppointments(userAppointments);

    // Show welcome notification when dashboard loads
    showNotification(`Welcome to your dashboard, ${loggedInUser.name}!`, "info");
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]); // showNotification removed to prevent infinite loop

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    showNotification("Logged out successfully!", "success");
    navigate("/login");
  }

  if (!user) return null;

  const latestAppointment = appointments[appointments.length - 1];

  return (
    <div className="dash-bg">
      <div className="dash-card shadow-lg">
        
        <h2 className="fw-bold">Welcome, {user.name} 👋</h2>
        <p className="text-secondary mt-1">Here's your activity overview.</p>

        <div className="d-flex flex-column gap-3 mt-4">

          <div className="dash-section p-3">
            <h5 className="fw-bold">Last Appointment</h5>

            {appointments.length > 0 ? (
              <>
                <p className="m-0">Policy: <b>{latestAppointment.policy}</b></p>
                <p className="m-0">Date: {latestAppointment.date}</p>
                <p className="m-0">Time: {latestAppointment.time}</p>
              </>
            ) : (
              <p>No previous appointments found!</p>
            )}
          </div>

          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/appointments')}
          >
            View All Appointments 
          </button>

          <button 
            className="btn btn-primary mt-2" 
            onClick={() => navigate('/policies')}
          >
            Explore More Policies
          </button>

          <button 
            className="btn btn-success" 
            onClick={() => navigate('/appointment')}
          >
            Book New Appointment
          </button>

          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>

        </div>
      </div>
    </div>
  );
}