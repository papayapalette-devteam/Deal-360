import { useState, useEffect } from "react";
import NotificationItem from "./notificaiton_item";
import NotificationPreferences from "./notificaiton_preferences";

// All notification data
const allNotifications = [
  {
    id: 1,
    category: "messages",
    title: "New message from Sarah Mitchell",
    description: "I found some great properties that match your criteria!",
    time: "10 minutes ago",
    unread: true,
    iconType: "chat",
    iconColor: "#7FFFD4",
  },
  {
    id: 2,
    category: "responses",
    title: "New agent response",
    description: "Robert Chen responded to your Downtown Condo requirement",
    time: "2 hours ago",
    unread: true,
    iconType: "bell",
    iconColor: "salmon",
  },
  {
    id: 3,
    category: "properties",
    title: "Price drop alert",
    description: "Modern Downtown Condo price reduced by AED 25,000",
    time: "5 hours ago",
    unread: true,
    iconType: "heart",
    iconColor: "mint",
  },
  {
    id: 4,
    category: "properties",
    title: "Requirement update",
    description: "Your Family Home Westside requirement has 3 new matches",
    time: "1 day ago",
    unread: false,
    iconType: "file",
    iconColor: "mint",
  },
  {
    id: 5,
    category: "system",
    title: "Profile completion",
    description: "Complete your profile to get better property recommendations",
    time: "1 day ago",
    unread: false,
    iconType: "check",
    iconColor: "gray",
  },
  {
    id: 6,
    category: "responses",
    title: "Agent match",
    description: "Lisa Martinez is interested in helping with your search",
    time: "3 days ago",
    unread: false,
    iconType: "bell",
    iconColor: "salmon",
  },
  {
    id: 7,
    category: "properties",
    title: "New property saved",
    description: "You saved Modern Loft in Arts District",
    time: "3 days ago",
    unread: false,
    iconType: "heart",
    iconColor: "mint",
  },
  {
    id: 8,
    category: "properties",
    title: "Requirement created",
    description: "Your Luxury Penthouse Downtown requirement is now active",
    time: "1 week ago",
    unread: false,
    iconType: "file",
    iconColor: "mint",
  },
  {
    id: 9,
    category: "system",
    title: "Welcome to Deal360",
    description: "Your account has been successfully created",
    time: "2 weeks ago",
    unread: false,
    iconType: "check",
    iconColor: "gray",
  },
];

const tabs = ["All", "Messages", "Responses", "Properties", "System"];



export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");
//   const [isDark, setIsDark] = useState(false);
  const [notifications, setNotifications] = useState(allNotifications);

  // Apply dark mode to root
//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

  // Filter notifications by active tab
  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === "All") return true;
    return n.category === activeTab.toLowerCase();
  });

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

    

        {/* Tab Filter */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="font-arimo text-sm sm:text-base leading-6 px-4 py-2 rounded-[10px] transition-all duration-150 whitespace-nowrap"
              style={{
                backgroundColor: activeTab === tab ? "var(--form-secondary)" : "#F3F4F6",
                color: activeTab === tab ? "#101828" : "#364153",
                fontWeight: 400,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notifications List Card */}
        <div
          className="rounded-[10px] border bg-white dark:bg-card shadow-sm mb-6 overflow-hidden"
          style={{ borderColor: "var(--notif-border)" }}
        >
          {filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(127, 255, 212, 0.13)" }}
              >
                <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M8.55859 17.5C8.70488 17.7533 8.91527 17.9637 9.16863 18.11C9.42199 18.2563 9.70938 18.3333 10.0019 18.3333C10.2945 18.3333 10.5819 18.2563 10.8352 18.11C11.0886 17.9637 11.299 17.7533 11.4453 17.5"
                    stroke="var(--form-secondary)"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.71772 12.7691C2.60886 12.8884 2.53702 13.0368 2.51094 13.1962C2.48486 13.3556 2.50566 13.5191 2.57081 13.6669C2.63597 13.8147 2.74267 13.9404 2.87794 14.0286C3.0132 14.1169 3.17121 14.1639 3.33272 14.1641H16.6661C16.8276 14.1641 16.9856 14.1172 17.1209 14.0292C17.2563 13.9411 17.3631 13.8155 17.4285 13.6678C17.4938 13.5201 17.5148 13.3566 17.4889 13.1972C17.4631 13.0378 17.3914 12.8893 17.2827 12.7699C16.1744 11.6274 14.9994 10.4132 14.9994 6.66406C14.9994 5.33798 14.4726 4.06621 13.5349 3.12853C12.5972 2.19085 11.3255 1.66406 9.99939 1.66406C8.67331 1.66406 7.40154 2.19085 6.46386 3.12853C5.52618 4.06621 4.99939 5.33798 4.99939 6.66406C4.99939 10.4132 3.82356 11.6274 2.71772 12.7691Z"
                    stroke="var(--form-secondary)"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className="font-manrope text-base font-medium"
                style={{ color: "#4A5565" }}
              >
                No notifications in this category
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onDismiss={handleDismiss}
              />
            ))
          )}
        </div>

        {/* Notification Preferences */}
        <NotificationPreferences />
      </div>
    </div>
  );
}
