import { useState } from "react";
import ConversationSidebar from "./conversation_sidebar";
import ChatArea from "./chat_area";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    time: "10:30 AM",
    preview: "I found some great properties that match your criteria!",
    unread: 3,
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/bae265afcaa0263903549d48dd121ba72b52fdd3?width=96",
    online: true,
  },
  {
    id: 2,
    name: "Robert Chen",
    time: "Yesterday",
    preview: "When would you like to schedule a viewing?",
    unread: 0,
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/bae265afcaa0263903549d48dd121ba72b52fdd3?width=96",
    online: true,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    time: "2 days ago",
    preview: "The penthouse you inquired about is now available",
    unread: 1,
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/93daaad17c515dc4dfedf2782627e627a28fa55b?width=96",
    online: false,
  },
  {
    id: 4,
    name: "David Park",
    time: "3 days ago",
    preview: "Thank you for your interest!",
    unread: 0,
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/04ddb281974eaafc2304d8d573ec123272641ae3?width=96",
    online: false,
  },
  {
    id: 5,
    name: "Lisa Martinez",
    time: "1 week ago",
    preview: "I have some updates on the Arts District listings",
    unread: 0,
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/bae265afcaa0263903549d48dd121ba72b52fdd3?width=96",
    online: true,
  },
];

const MESSAGE_SETS = {
  1: [
    { id: 1, text: "Hi John! How are you today?", time: "10:15 AM", sent: false },
    { id: 2, text: "I'm doing well, thanks! Any updates on properties?", time: "10:18 AM", sent: true },
    { id: 3, text: "Yes! I can send you the details if you're interested.", time: "10:20 AM", sent: false },
    { id: 4, text: "That would be great! Please send them over.", time: "10:25 AM", sent: true },
    { id: 5, text: "Perfect! I'll compile the list and send it within the hour.", time: "10:30 AM", sent: false },
  ],
  2: [
    { id: 1, text: "Hi! Are you interested in scheduling a viewing?", time: "Yesterday 2:00 PM", sent: false },
    { id: 2, text: "Yes, I'd love to see the property!", time: "Yesterday 2:05 PM", sent: true },
    { id: 3, text: "When would you like to schedule a viewing?", time: "Yesterday 2:10 PM", sent: false },
  ],
  3: [
    { id: 1, text: "Great news! The penthouse you inquired about is now available.", time: "2 days ago 10:00 AM", sent: false },
    { id: 2, text: "That's amazing! Can I get more details?", time: "2 days ago 10:05 AM", sent: true },
  ],
  4: [
    { id: 1, text: "Thank you for your interest in our listings!", time: "3 days ago 9:00 AM", sent: false },
    { id: 2, text: "Of course! I have a few questions.", time: "3 days ago 9:10 AM", sent: true },
  ],
  5: [
    { id: 1, text: "I have some updates on the Arts District listings you were looking at.", time: "1 week ago 3:00 PM", sent: false },
    { id: 2, text: "Please share the updates!", time: "1 week ago 3:15 PM", sent: true },
  ],
};

export default function Message() {
  const [activeConversation, setActiveConversation] = useState(CONVERSATIONS[0]);
  const [mobileView, setMobileView] = useState("sidebar"); // "sidebar" | "chat"

  const handleSelectConversation = (conv) => {
    setActiveConversation(conv);
    setMobileView("chat");
  };

  const handleBack = () => {
    setMobileView("sidebar");
  };

  const messages = MESSAGE_SETS[activeConversation.id] || [];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Conversation Sidebar */}
      <ConversationSidebar
        conversations={CONVERSATIONS}
        activeId={activeConversation.id}
        onSelect={handleSelectConversation}
        visible={mobileView === "sidebar"}
      />

      {/* Chat Area */}
      <ChatArea
        conversation={activeConversation}
        messages={messages}
        onBack={handleBack}
        visible={mobileView === "chat"}
      />
    </div>
  );
}
