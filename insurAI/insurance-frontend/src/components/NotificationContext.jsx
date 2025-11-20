// import { createContext, useContext, useState } from "react";
// import Notification from "./Notification";

// const NotificationContext = createContext();

// export function NotificationProvider({ children }) {
//   const [notification, setNotification] = useState(null);

//   const showNotification = (message, type = "info") => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 4000);
//   };

//   const hideNotification = () => {
//     setNotification(null);
//   };

//   return (
//     <NotificationContext.Provider value={{ showNotification }}>
//       {children}
//       {notification && (
//         <Notification 
//           message={notification.message} 
//           type={notification.type}
//           onClose={hideNotification}
//         />
//       )}
//     </NotificationContext.Provider>
//   );
// }

// export const useNotification = () => {
//   const context = useContext(NotificationContext);
//   if (!context) {
//     throw new Error("useNotification must be used within NotificationProvider");
//   }
//   return context;
// };










//========================2nd================
// import { createContext, useContext, useState, useCallback } from "react";
// import Notification from "./Notification";

// const NotificationContext = createContext();

// export function NotificationProvider({ children }) {
//   const [notification, setNotification] = useState(null);

//   const showNotification = useCallback((message, type = "info") => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 4000);
//   }, []);

//   const hideNotification = useCallback(() => {
//     setNotification(null);
//   }, []);

//   return (
//     <NotificationContext.Provider value={{ showNotification }}>
//       {children}
//       {notification && (
//         <Notification 
//           message={notification.message} 
//           type={notification.type}
//           onClose={hideNotification}
//         />
//       )}
//     </NotificationContext.Provider>
//   );
// }

// export const useNotification = () => {
//   const context = useContext(NotificationContext);
//   if (!context) {
//     throw new Error("useNotification must be used within NotificationProvider");
//   }
//   return context;
// };



//=================3rd==================


import { createContext, useContext, useState, useCallback, useEffect } from "react";
import Notification from "./Notification";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Load notifications and preferences from localStorage
  useEffect(() => {
    const savedNotifications = JSON.parse(localStorage.getItem("userNotifications")) || [];
    const savedPreferences = JSON.parse(localStorage.getItem("notificationPreferences")) || {
      email: true,
      sms: true,
      inApp: true,
      appointmentReminders: true,
      policyUpdates: true,
      systemAlerts: true
    };
    
    setNotifications(savedNotifications);
    setUnreadCount(savedNotifications.filter(n => !n.read).length);
    setPreferences(savedPreferences);
  }, []);

  const [preferences, setPreferences] = useState({
    email: true,
    sms: true,
    inApp: true,
    appointmentReminders: true,
    policyUpdates: true,
    systemAlerts: true
  });

  // Save preferences to localStorage
  const savePreferences = useCallback((newPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem("notificationPreferences", JSON.stringify(newPreferences));
  }, []);

  // Save notifications to localStorage
  const saveNotifications = useCallback((newNotifications) => {
    setNotifications(newNotifications);
    localStorage.setItem("userNotifications", JSON.stringify(newNotifications));
    setUnreadCount(newNotifications.filter(n => !n.read).length);
  }, []);

  const showNotification = useCallback((message, type = "info", options = {}) => {
    const { persistent = false, email = false, sms = false } = options;
    
    // Create notification object
    const notificationObj = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toISOString(),
      read: false,
      persistent
    };

    // Add to notifications list if it's persistent
    if (persistent) {
      const newNotifications = [notificationObj, ...notifications];
      saveNotifications(newNotifications);
    }

    // Show toast notification
    setNotification({ message, type });

    // Simulate email notification
    if (email && preferences.email) {
      console.log(`📧 Email sent: ${message}`);
      // In real app, this would call an email API
    }

    // Simulate SMS notification
    if (sms && preferences.sms) {
      console.log(`📱 SMS sent: ${message}`);
      // In real app, this would call an SMS API
    }

    // Auto-hide non-persistent notifications
    if (!persistent) {
      setTimeout(() => setNotification(null), 4000);
    }
  }, [notifications, preferences, saveNotifications]);

  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  const markAsRead = useCallback((notificationId) => {
    const updatedNotifications = notifications.map(notif =>
      notif.id === notificationId ? { ...notif, read: true } : notif
    );
    saveNotifications(updatedNotifications);
  }, [notifications, saveNotifications]);

  const markAllAsRead = useCallback(() => {
    const updatedNotifications = notifications.map(notif => ({ ...notif, read: true }));
    saveNotifications(updatedNotifications);
  }, [notifications, saveNotifications]);

  const deleteNotification = useCallback((notificationId) => {
    const updatedNotifications = notifications.filter(notif => notif.id !== notificationId);
    saveNotifications(updatedNotifications);
  }, [notifications, saveNotifications]);

  const clearAllNotifications = useCallback(() => {
    saveNotifications([]);
  }, [saveNotifications]);

  // Schedule appointment reminders
  const scheduleAppointmentReminder = useCallback((appointment) => {
    if (!preferences.appointmentReminders) return;

    const reminderTime = new Date(`${appointment.date}T${appointment.time}`);
    reminderTime.setHours(reminderTime.getHours() - 24); // 24 hours before

    const now = new Date();
    const delay = reminderTime.getTime() - now.getTime();

    if (delay > 0) {
      setTimeout(() => {
        showNotification(
          `Reminder: Your ${appointment.policy} appointment is tomorrow at ${appointment.time}`,
          "info",
          { persistent: true, email: true, sms: true }
        );
      }, delay);
    }
  }, [preferences, showNotification]);

  const value = {
    showNotification,
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAllNotifications,
    preferences,
    savePreferences,
    scheduleAppointmentReminder
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type}
          onClose={hideNotification}
        />
      )}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
};