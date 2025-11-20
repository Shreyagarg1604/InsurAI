
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Policies from "./pages/Policies";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import PolicyDetails from "./pages/PolicyDetails";
// import Appointment from "./pages/Appointment";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";




// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/policies" element={<Policies />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/policy/:id" element={<PolicyDetails />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="/dashboard" element={<Dashboard />} />



//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
//---------------------------2nd--------------
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { NotificationProvider } from "./components/NotificationContext";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Policies from "./pages/Policies";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import PolicyDetails from "./pages/PolicyDetails";
// import Appointment from "./pages/Appointment";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import AppointmentHistory from "./pages/AppointmentHistory";


// export default function App() {
//   return (
//     <NotificationProvider>
//     <BrowserRouter>
//       <Navbar />
//       <div className="container mt-3">
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/policies" element={<Policies />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/policy/:id" element={<PolicyDetails />} />
//           <Route path="/appointments" element={<AppointmentHistory />} />
          


//           {/* Protected Routes */}
//           <Route
//             path="/appointment"
//             element={
//               <ProtectedRoute>
//                 <Appointment />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
//     </NotificationProvider>
//   );
// }


//======================3rd================
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationProvider } from "./components/NotificationContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PolicyDetails from "./pages/PolicyDetails";
import Appointment from "./pages/Appointment";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AppointmentHistory from "./pages/AppointmentHistory";
import AdminDashboard from "./pages/AdminDashboard"; // NEW IMPORT

export default function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/policy/:id" element={<PolicyDetails />} />
            <Route path="/appointments" element={<AppointmentHistory />} />

            {/* Protected Routes */}
            <Route
              path="/appointment"
              element={
                <ProtectedRoute>
                  <Appointment />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* NEW: Admin Dashboard Route */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </NotificationProvider>
  );
}