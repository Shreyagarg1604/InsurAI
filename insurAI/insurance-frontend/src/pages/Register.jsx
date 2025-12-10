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
// import "./Register.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Register() {

//   const navigate = useNavigate();

//   // Form fields state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleRegister(e) {
//     e.preventDefault();

//     // Get existing users from localStorage (if any)
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if email already exists
//     const emailExists = existingUsers.some(user => user.email === email);
//     if (emailExists) {
//       alert("Email already registered! Please login.");
//       return;
//     }

//     // Create a new user object
//     const newUser = { name, email, password };

//     // Add new user to user list
//     existingUsers.push(newUser);

//     // Save updated user list to localStorage
//     localStorage.setItem("users", JSON.stringify(existingUsers));

//     alert("Registration Successful!");
//     navigate("/login"); // Redirect to login
//   }

//   return (
//     <div className="register-bg">
//       <div className="register-card shadow-lg">
//         <h2 className="fw-bold text-center mb-4">Create Your Account</h2>

//         <form onSubmit={handleRegister}>
//           <input
//             className="form-control mb-3"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             className="form-control mb-3"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             className="form-control mb-3"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button className="btn btn-success w-100">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }



//=============================================after backend
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNotification } from "../components/NotificationContext";
import { API_BASE_URL } from "../config";

export default function Register() {
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // BACKEND CALL -> POST http://localhost:8080/api/auth/register
      const response = await axios.post(`${API_BASE_URL}/auth/register`, form);

      // response.data = saved user
      const user = response.data;

      // user ko localStorage me bhi save kar sakti ho (optional)
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      showNotification("Registration successful! Please login.", "success");
      navigate("/login");
    } catch (error) {
      console.error("Register error:", error);

      // Agar backend se message aaya ho:
      const msg =
        error.response?.data?.message ||
        error.response?.data ||
        "Server error! Please try again.";

      showNotification(msg, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-bg">
      <div className="register-card shadow-lg">
        <h2 className="fw-bold text-center mb-4">Create Your Account</h2>

        <form onSubmit={handleRegister}>
          <input
            className="form-control mb-3"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
