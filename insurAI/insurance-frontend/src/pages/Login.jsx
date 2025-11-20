// // // import "./Login.css";


// // // export default function Login() {

// // //   function handleLogin(e) {
// // //     e.preventDefault();
// // //     alert("Login Successful!");
// // //   }

// // //   return (
// // //     <div className="login-bg d-flex align-items-center">

// // //       <div className="login-card shadow-lg">

// // //         <h2 className="fw-bold text-center mb-4">Welcome Back</h2>

// // //         <form onSubmit={handleLogin}>
// // //           <input 
// // //             className="form-control mb-3" 
// // //             placeholder="Email"
// // //             type="email"
// // //             required
// // //           />

// // //           <input 
// // //             className="form-control mb-3" 
// // //             placeholder="Password"
// // //             type="password"
// // //             required
// // //           />

// // //           <button className="btn btn-primary w-100">
// // //             Login
// // //           </button>
// // //         </form>

// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import "./Login.css";
// // import { useNavigate } from "react-router-dom";

// // export default function Login() {

// //   const navigate = useNavigate();

// //   function handleLogin(e) {
// //     e.preventDefault();
// //     alert("Login Successful!");
// //     navigate("/dashboard"); 
// //   }

// //   return (
// //     <div className="login-bg d-flex align-items-center">

// //       <div className="login-card shadow-lg">

// //         <h2 className="fw-bold text-center mb-4">Welcome Back</h2>

// //         <form onSubmit={handleLogin}>
// //           <input 
// //             className="form-control mb-3" 
// //             placeholder="Email"
// //             type="email"
// //             required
// //           />

// //           <input 
// //             className="form-control mb-3" 
// //             placeholder="Password"
// //             type="password"
// //             required
// //           />

// //           <button className="btn btn-primary w-100">
// //             Login
// //           </button>
// //         </form>

// //       </div>
// //     </div>
// //   );
// // }
// // -----------------------2nd------------
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleLogin(e) {
//     e.preventDefault();

//     // Basic email format check (temporary)
//     if (!form.email.includes("@")) {
//       alert("Please enter a valid email");
//       return;
//     }

//     // Save user to localStorage (temporary login system)
//     const user = { name: "Shreya", email: form.email };
//     localStorage.setItem("user", JSON.stringify(user));

//     alert("Login Successful!");
//     navigate("/dashboard"); // Redirect to Dashboard after login
//   }

//   return (
//     <div className="login-bg d-flex align-items-center">

//       <div className="login-card shadow-lg">

//         <h2 className="fw-bold text-center mb-4">Welcome Back</h2>

//         <form onSubmit={handleLogin}>
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="form-control mb-3"
//             placeholder="Email"
//             type="email"
//             required
//           />

//           <input
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             className="form-control mb-3"
//             placeholder="Password"
//             type="password"
//             required
//           />

//           <button className="btn btn-primary w-100">
//             Login
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// }
//==========3rd==============
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleLogin(e) {
//     e.preventDefault();

//     // Get all registered users
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     // Find matching user
//     const matchedUser = users.find(
//       (u) => u.email === form.email && u.password === form.password
//     );

//     if (matchedUser) {
//       // Save logged-in user
//       localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      
//       alert(`Welcome ${matchedUser.name}!`);
//       navigate("/dashboard");
//     } else {
//       alert("Invalid email or password!");
//     }
//   }

//   return (
//     <div className="login-bg d-flex align-items-center">
//       <div className="login-card shadow-lg">
//         <h2 className="fw-bold text-center mb-4">Welcome Back</h2>

//         <form onSubmit={handleLogin}>
//           <input
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="form-control mb-3"
//             placeholder="Email"
//             type="email"
//             required
//           />

//           <input
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             className="form-control mb-3"
//             placeholder="Password"
//             type="password"
//             required
//           />

//           <button className="btn btn-primary w-100">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }














//==========================4th==============
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNotification } from "../components/NotificationContext";

export default function Login() {
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const matchedUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (matchedUser) {
      // Save logged-in user
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      
      showNotification(`Welcome ${matchedUser.name}!`, "success");
      navigate("/dashboard");
    } else {
      showNotification("Invalid email or password!", "error");
    }
  }

  return (
    <div className="login-bg d-flex align-items-center">
      <div className="login-card shadow-lg">
        <h2 className="fw-bold text-center mb-4">Welcome Back</h2>

        <form onSubmit={handleLogin}>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Email"
            type="email"
            required
          />

          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control mb-3"
            placeholder="Password"
            type="password"
            required
          />

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}