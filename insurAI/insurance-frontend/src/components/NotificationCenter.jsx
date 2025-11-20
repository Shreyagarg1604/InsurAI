import { useState, useRef, useEffect } from "react";
import { useNotification } from "./NotificationContext";
import "./NotificationCenter.css";

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { 
    notifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead, 
    deleteNotification,
    clearAllNotifications 
  } = useNotification();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      day: '2-digit',
      month: 'short'
    });
  };

  return (
    <div className="notification-center" ref={dropdownRef}>
      <button 
        className="notification-bell btn btn-outline-light position-relative"
        onClick={toggleDropdown}
      >
        🔔
        {unreadCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h6>Notifications</h6>
            {notifications.length > 0 && (
              <div>
                <button 
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={markAllAsRead}
                >
                  Mark all read
                </button>
                <button 
                  className="btn btn-sm btn-outline-danger"
                  onClick={clearAllNotifications}
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="text-center p-3 text-muted">
                No notifications yet
              </div>
            ) : (
              notifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                  onClick={() => !notification.read && markAsRead(notification.id)}
                >
                  <div className="notification-content">
                    <span className="notification-message">{notification.message}</span>
                    <small className="notification-time">
                      {formatTime(notification.timestamp)}
                    </small>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-danger notification-delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}


//=======================2nd=====================


// import { useState, useRef, useEffect } from "react";
// import { useNotification } from "./NotificationContext";
// import "./NotificationCenter.css";

// export default function NotificationCenter() {
//   console.log("🔔🔔🔔 NOTIFICATION CENTER IS RENDERING!"); // DEBUG
  
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const { 
//     notifications, 
//     unreadCount, 
//     markAsRead, 
//     markAllAsRead, 
//     deleteNotification,
//     clearAllNotifications 
//   } = useNotification();

//   console.log("🔔 Unread count:", unreadCount); // DEBUG
//   console.log("🔔 Notifications:", notifications); // DEBUG

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleDropdown = () => {
//     console.log("🔔 Bell clicked!"); // DEBUG
//     setIsOpen(!isOpen);
//   };

//   const formatTime = (timestamp) => {
//     return new Date(timestamp).toLocaleTimeString('en-IN', { 
//       hour: '2-digit', 
//       minute: '2-digit',
//       day: '2-digit',
//       month: 'short'
//     });
//   };

//   return (
//     <div className="notification-center" ref={dropdownRef}>
//       <button 
//         className="notification-bell btn btn-outline-light position-relative"
//         onClick={toggleDropdown}
//         style={{ border: '2px solid red', background: 'yellow', color: 'black' }} // TEMPORARY DEBUG STYLE
//       >
//         🔔
//         {unreadCount > 0 && (
//           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//             {unreadCount}
//           </span>
//         )}
//       </button>

//       {isOpen && (
//         <div className="notification-dropdown">
//           <div className="notification-header">
//             <h6>Notifications</h6>
//             {notifications.length > 0 && (
//               <div>
//                 <button 
//                   className="btn btn-sm btn-outline-primary me-2"
//                   onClick={markAllAsRead}
//                 >
//                   Mark all read
//                 </button>
//                 <button 
//                   className="btn btn-sm btn-outline-danger"
//                   onClick={clearAllNotifications}
//                 >
//                   Clear all
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="notification-list">
//             {notifications.length === 0 ? (
//               <div className="text-center p-3 text-muted">
//                 No notifications yet
//               </div>
//             ) : (
//               notifications.map(notification => (
//                 <div 
//                   key={notification.id} 
//                   className={`notification-item ${notification.read ? 'read' : 'unread'}`}
//                   onClick={() => !notification.read && markAsRead(notification.id)}
//                 >
//                   <div className="notification-content">
//                     <span className="notification-message">{notification.message}</span>
//                     <small className="notification-time">
//                       {formatTime(notification.timestamp)}
//                     </small>
//                   </div>
//                   <button 
//                     className="btn btn-sm btn-outline-danger notification-delete"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       deleteNotification(notification.id);
//                     }}
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }