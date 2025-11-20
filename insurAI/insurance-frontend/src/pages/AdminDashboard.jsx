import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalAppointments: 0,
    totalUsers: 0,
    recentAppointments: []
  });
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    // Check if user is admin
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user || user.email !== "admin@insureai.com") {
      navigate("/dashboard");
      return;
    }

    // Load all data
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Calculate stats
    setStats({
      totalAppointments: appointments.length,
      totalUsers: users.length,
      recentAppointments: appointments.slice(-5).reverse() // Last 5 appointments
    });
    
    setAllUsers(users);
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <div className="container">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        
        {/* Statistics Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="stat-card">
              <h3>{stats.totalAppointments}</h3>
              <p>Total Appointments</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card">
              <h3>{stats.totalUsers}</h3>
              <p>Registered Users</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card">
              <h3>{stats.recentAppointments.length}</h3>
              <p>Recent Appointments</p>
            </div>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="card mb-4">
          <div className="card-header">
            <h5>Recent Appointments</h5>
          </div>
          <div className="card-body">
            {stats.recentAppointments.length === 0 ? (
              <p className="text-muted">No appointments yet</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Policy</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentAppointments.map((appointment, index) => (
                      <tr key={index}>
                        <td>{appointment.name}</td>
                        <td>{appointment.policy}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* All Users */}
        <div className="card">
          <div className="card-header">
            <h5>Registered Users</h5>
          </div>
          <div className="card-body">
            {allUsers.length === 0 ? (
              <p className="text-muted">No users registered yet</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.map((user, index) => (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone || "Not provided"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}