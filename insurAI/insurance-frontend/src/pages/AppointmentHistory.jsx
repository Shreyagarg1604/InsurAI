// import { useEffect, useState } from "react";
// import "./Appointment.css";

// export default function AppointmentHistory() {
//   const [appointments, setAppointments] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     setUser(loggedInUser);

//     const allAppointments =
//       JSON.parse(localStorage.getItem("appointments")) || [];

//     if (loggedInUser) {
//       const userAppointments = allAppointments.filter(
//         (a) => a.email === loggedInUser.email
//       );
//       setAppointments(userAppointments);
//     }
//   }, []);

//   if (!user) {
//     return (
//       <div className="appointment-bg d-flex align-items-center">
//         <div className="appointment-card shadow-lg text-center p-4">
//           <h3>Please login to view your appointments.</h3>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="appointment-bg d-flex align-items-center">
//       <div className="appointment-card shadow-lg w-100">

//         <h2 className="text-center fw-bold mb-4">
//           {user.name}'s Appointment History
//         </h2>

//         {appointments.length === 0 ? (
//           <p className="text-center mb-0">No appointments booked yet.</p>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-striped table-hover mb-0">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Policy</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Date</th>
//                   <th>Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {appointments.map((a, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{a.policy}</td>
//                     <td>{a.name}</td>
//                     <td>{a.email}</td>
//                     <td>{a.phone}</td>
//                     <td>{a.date}</td>
//                     <td>{a.time}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//=======================2nd============








// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Appointment.css";

// export default function AppointmentHistory() {
//   const navigate = useNavigate();
//   const [appointments, setAppointments] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkUserAndLoadAppointments = () => {
//       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      
//       if (!loggedInUser) {
//         setLoading(false);
//         return;
//       }

//       setUser(loggedInUser);

//       const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
//       const userAppointments = allAppointments.filter(
//         (a) => a.email === loggedInUser.email
//       );
//       setAppointments(userAppointments);
//       setLoading(false);
//     };

//     // Check immediately
//     checkUserAndLoadAppointments();

//     // Also check when the page becomes visible (for logout/login scenarios)
//     const handleVisibilityChange = () => {
//       if (!document.hidden) {
//         checkUserAndLoadAppointments();
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);

//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, [navigate]);

//   if (loading) {
//     return (
//       <div className="appointment-bg d-flex align-items-center">
//         <div className="appointment-card shadow-lg text-center p-4">
//           <h3>Loading...</h3>
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="appointment-bg d-flex align-items-center">
//         <div className="appointment-card shadow-lg text-center p-4">
//           <h3>Please login to view your appointments.</h3>
//           <button 
//             className="btn btn-primary mt-3"
//             onClick={() => navigate('/login')}
//           >
//             Go to Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="appointment-bg d-flex align-items-center">
//       <div className="appointment-card shadow-lg w-100">
//         <h2 className="text-center fw-bold mb-4">
//           {user.name}'s Appointment History
//         </h2>

//         {appointments.length === 0 ? (
//           <div className="text-center">
//             <p className="mb-3">No appointments booked yet.</p>
//             <button 
//               className="btn btn-success"
//               onClick={() => navigate('/appointment')}
//             >
//               Book Your First Appointment
//             </button>
//           </div>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-striped table-hover mb-0">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Policy</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Date</th>
//                   <th>Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {appointments.map((a, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{a.policy}</td>
//                     <td>{a.name}</td>
//                     <td>{a.email}</td>
//                     <td>{a.phone}</td>
//                     <td>{a.date}</td>
//                     <td>{a.time}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
        
//         {/* Back to Dashboard button */}
//         <div className="text-center mt-4">
//           <button 
//             className="btn btn-secondary"
//             onClick={() => navigate('/dashboard')}
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }











//==================================backend=================
// src/pages/AppointmentHistory.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";
import { API_URL } from "../config";

export default function AppointmentHistory() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      setLoading(false);
      return;
    }

    setUser(loggedInUser);

    async function loadAppointments() {
      try {
        const res = await fetch(
          `${API_URL}/appointments/${loggedInUser.email}`
        );
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAppointments();
  }, [navigate]);

  if (loading) {
    return (
      <div className="appointment-bg d-flex align-items-center">
        <div className="appointment-card shadow-lg text-center p-4">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="appointment-bg d-flex align-items-center">
        <div className="appointment-card shadow-lg text-center p-4">
          <h3>Please login to view your appointments.</h3>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-bg d-flex align-items-center">
      <div className="appointment-card shadow-lg w-100">
        <h2 className="text-center fw-bold mb-4">
          {user.name}'s Appointment History
        </h2>

        {appointments.length === 0 ? (
          <div className="text-center">
            <p className="mb-3">No appointments booked yet.</p>
            <button
              className="btn btn-success"
              onClick={() => navigate("/appointment")}
            >
              Book Your First Appointment
            </button>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Policy</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{a.policy}</td>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.phone}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-4">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
