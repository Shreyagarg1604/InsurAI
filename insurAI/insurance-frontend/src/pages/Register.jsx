// // import "./Register.css";
// import "./Register.css";

// export default function Register() {

//   function handleRegister(e) {
//     e.preventDefault();
//     alert("Registration Successful!");
//   }

//   return (
//     <div className="register-bg">
//       <div className="register-card shadow-lg">
//         <h2 className="fw-bold text-center mb-4">Create Your Account</h2>

//         <form onSubmit={handleRegister}>
//           <input className="form-control mb-3" placeholder="Full Name" />
//           <input className="form-control mb-3" type="email" placeholder="Email" />
//           <input className="form-control mb-3" type="password" placeholder="Password" />

//           <button className="btn btn-success w-100">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// ================2nd================
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {

  const navigate = useNavigate();

  // Form fields state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    // Get existing users from localStorage (if any)
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const emailExists = existingUsers.some(user => user.email === email);
    if (emailExists) {
      alert("Email already registered! Please login.");
      return;
    }

    // Create a new user object
    const newUser = { name, email, password };

    // Add new user to user list
    existingUsers.push(newUser);

    // Save updated user list to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration Successful!");
    navigate("/login"); // Redirect to login
  }

  return (
    <div className="register-bg">
      <div className="register-card shadow-lg">
        <h2 className="fw-bold text-center mb-4">Create Your Account</h2>

        <form onSubmit={handleRegister}>
          <input
            className="form-control mb-3"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
