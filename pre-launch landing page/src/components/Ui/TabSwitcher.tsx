interface Tab {
  id: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function TabSwitcher({ tabs, activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div
      className="
        flex 
        p-2                /* padding: 8px */
        items-center 
        gap-4              /* gap: 16px */
        rounded-lg         /* border-radius: 8px */
        bg-black/5         /* rgba(0,0,0,0.05) */
        self-stretch
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex
            h-10                          /* height: 40px */
            flex-1                        /* flex: 1 0 0 */
            px-2                          /* fallback horizontal padding */
            py-2                          /* 8px top & bottom */
            pl-2                          /* 8px left padding */
            justify-center
            items-center
            gap-[10px]                    /* gap: 10px */
            rounded-lg
            font-poppins
            font-medium
            text-base
            transition-colors
            cursor-pointer
            ${
              activeTab === tab.id
                ? "bg-[#7FFFD4] text-[#0A0A0A]"
                : "text-[#0A0A0A] hover:bg-white/40"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}