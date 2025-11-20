// import "./Appointment.css";
// import { useState } from "react";

// export default function Appointment() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//   });

//   const [success, setSuccess] = useState(false);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSuccess(true);
//   }

//   return (
//     <div className="appointment-bg d-flex align-items-center">
//       <div className="appointment-card shadow-lg">

//         <h2 className="text-center fw-bold mb-4">Book Your Appointment</h2>

//         {success ? (
//           <div className="alert alert-success text-center">
//             Appointment Confirmed! 🎉  
//             We will reach out soon.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <input
//               name="name"
//               className="form-control mb-3"
//               placeholder="Full Name"
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="email"
//               className="form-control mb-3"
//               placeholder="Email"
//               type="email"
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="phone"
//               className="form-control mb-3"
//               placeholder="Phone Number"
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="date"
//               className="form-control mb-3"
//               type="date"
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="time"
//               className="form-control mb-3"
//               type="time"
//               onChange={handleChange}
//               required
//             />

//             <button className="btn btn-primary w-100">Confirm Appointment</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
//===================2nd========
// import "./Appointment.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Appointment() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     policy: "",
//     date: "",
//     time: "",
//   });

//   const [success, setSuccess] = useState(false);

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     // Get previous appointments
//     const existingAppointments =
//       JSON.parse(localStorage.getItem("appointments")) || [];

//     // Push new one
//     existingAppointments.push(form);

//     // Save updated list
//     localStorage.setItem("appointments", JSON.stringify(existingAppointments));

//     setSuccess(true);

//     setTimeout(() => {
//       navigate("/dashboard");
//     }, 1500);
//   }

//   return (
//     <div className="appointment-bg d-flex align-items-center">
//       <div className="appointment-card shadow-lg">

//         <h2 className="text-center fw-bold mb-4">Book Your Appointment</h2>

//         {success ? (
//           <div className="alert alert-success text-center">
//             Appointment Confirmed! 🎉 Redirecting...
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <input
//               name="name"
//               className="form-control mb-3"
//               placeholder="Full Name"
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="email"
//               className="form-control mb-3"
//               placeholder="Email"
//               type="email"
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="phone"
//               className="form-control mb-3"
//               placeholder="Phone Number"
//               onChange={handleChange}
//               required
//             />

//             <select
//               name="policy"
//               className="form-control mb-3"
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Policy</option>
//               <option value="Health Insurance">Health Insurance</option>
//               <option value="Life Insurance">Life Insurance</option>
//               <option value="Vehicle Insurance">Vehicle Insurance</option>
//             </select>

//             <input
//               name="date"
//               className="form-control mb-3"
//               type="date"
//               onChange={handleChange}
//               required
//             />

//             <input
//               name="time"
//               className="form-control mb-3"
//               type="time"
//               onChange={handleChange}
//               required
//             />

//             <button className="btn btn-primary w-100">Confirm Appointment</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }














//==================4th=========
import "./Appointment.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Appointment() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    policy: "",
    date: "",
    time: "",
  });

  const [success, setSuccess] = useState(false);

  // Load user data when component mounts
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
      setForm(prevForm => ({
        ...prevForm,
        name: loggedInUser.name,
        email: loggedInUser.email,
        phone: loggedInUser.phone || ""
      }));
    }
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Get previous appointments
    const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Push new one
    existingAppointments.push(form);

    // Save updated list
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    setSuccess(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  }

  if (!user) {
    return (
      <div className="appointment-bg d-flex align-items-center">
        <div className="appointment-card shadow-lg text-center p-4">
          <h3>Please login to book an appointment.</h3>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => navigate('/login')}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-bg d-flex align-items-center">
      <div className="appointment-card shadow-lg">
        <h2 className="text-center fw-bold mb-4">Book Your Appointment</h2>

        {success ? (
          <div className="alert alert-success text-center">
            Appointment Confirmed! 🎉 Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              className="form-control mb-3"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              className="form-control mb-3"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <select
              name="policy"
              className="form-control mb-3"
              value={form.policy}
              onChange={handleChange}
              required
            >
              <option value="">Select Policy</option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Vehicle Insurance">Vehicle Insurance</option>
            </select>

            <input
              name="date"
              className="form-control mb-3"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <input
              name="time"
              className="form-control mb-3"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
            />

            <button className="btn btn-primary w-100">Confirm Appointment</button>
          </form>
        )}
      </div>
    </div>
  );
}