import { useState } from "react";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.9995 13.9995L11.1328 11.1328" stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function ConversationItem({ conversation, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-start gap-0 px-0 py-0 border-b border-[#F3F4F6] cursor-pointer text-left transition-colors ${
        isActive ? "bg-[#F9FAFB]" : "bg-white hover:bg-[#F9FAFB]"
      }`}
    >
      <div className="flex items-start gap-3 px-4 py-4 flex-1 min-w-0">
        {/* Avatar */}
        <div className="relative shrink-0">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={conversation.avatar}
            alt={conversation.name}
          />
          {conversation.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary border-2 border-white" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[#101828] font-manrope text-base font-normal leading-6 truncate">
              {conversation.name}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {conversation.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-arimo leading-4 shrink-0">
                  {conversation.unread}
                </span>
              )}
              <span className="text-[#6A7282] font-manrope text-xs leading-4 whitespace-nowrap">
                {conversation.time}
              </span>
            </div>
          </div>
          <p className="text-[#4A5565] font-manrope text-sm leading-5 mt-1 truncate">
            {conversation.preview}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function ConversationSidebar({ conversations, activeId, onSelect, visible }) {
  const [searchValue, setSearchValue] = useState("");

  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    c.preview.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } md:flex flex-col w-full md:w-[459px] md:min-w-[459px] h-full  bg-white shrink-0`}
    >
      {/* Search Bar */}
      <div className="px-4 pt-4 pb-[6px] shrink-0" style={{borderBottom:"1px solid #F3F4F6"}}>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search Conversations..."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className="w-full h-[42px] pl-10 pr-4 rounded-[10px] border border-[#D1D5DC] font-manrope text-base text-[rgba(10,10,10,0.5)] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-1 focus:ring-primary bg-white"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.map(conv => (
          <ConversationItem
            key={conv.id}
            conversation={conv}
            isActive={conv.id === activeId}
            onClick={() => onSelect(conv)}
          />
        ))}
      </div>
    </div>
  );
}
