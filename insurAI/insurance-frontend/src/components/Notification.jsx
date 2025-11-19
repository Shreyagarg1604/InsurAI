import "./Notification.css";

export default function Notification({ message, type = "info", onClose }) {
  return (
    <div className={`notification notification-${type} show`}>
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>×</button>
    </div>
  );
}