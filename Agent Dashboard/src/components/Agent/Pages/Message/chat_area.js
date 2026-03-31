import { useState } from "react";

/* ───── Icon SVGs ───── */
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#phoneClip)">
      <path d="M18.3351 14.0975V16.5975C18.3361 16.8296 18.2886 17.0593 18.1956 17.2719C18.1026 17.4846 17.9662 17.6755 17.7952 17.8324C17.6242 17.9893 17.4223 18.1087 17.2024 18.1831C16.9826 18.2574 16.7496 18.285 16.5185 18.2641C13.9542 17.9855 11.491 17.1093 9.32682 15.7058C7.31334 14.4264 5.60626 12.7193 4.32682 10.7058C2.91846 8.53181 2.04202 6.05664 1.76848 3.48081C1.74766 3.25037 1.77505 3.01811 1.8489 2.79883C1.92275 2.57955 2.04146 2.37805 2.19745 2.20716C2.35345 2.03627 2.54332 1.89973 2.75498 1.80624C2.96663 1.71276 3.19543 1.66436 3.42682 1.66414H5.92682C6.33124 1.66016 6.72331 1.80338 7.02995 2.06709C7.33659 2.3308 7.53688 2.69702 7.59348 3.09748C7.699 3.89753 7.89469 4.68308 8.17682 5.43914C8.28894 5.73741 8.3132 6.06157 8.24674 6.37321C8.18028 6.68485 8.02587 6.9709 7.80182 7.19748L6.74348 8.25581C7.92978 10.3421 9.65719 12.0695 11.7435 13.2558L12.8018 12.1975C13.0284 11.9734 13.3144 11.819 13.6261 11.7526C13.9377 11.6861 14.2619 11.7104 14.5601 11.8225C15.3162 12.1046 16.1018 12.3003 16.9018 12.4058C17.3066 12.4629 17.6763 12.6668 17.9406 12.9787C18.2049 13.2906 18.3453 13.6888 18.3351 14.0975Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs><clipPath id="phoneClip"><rect width="20" height="20" fill="white"/></clipPath></defs>
  </svg>
);

const VideoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.332 10.8324L17.6845 13.7341C17.7473 13.7758 17.8202 13.7998 17.8955 13.8034C17.9707 13.807 18.0456 13.7901 18.112 13.7545C18.1785 13.719 18.234 13.666 18.2728 13.6014C18.3115 13.5367 18.332 13.4628 18.332 13.3874V6.55741C18.3321 6.4841 18.3127 6.41208 18.276 6.34862C18.2393 6.28516 18.1865 6.23252 18.1229 6.196C18.0593 6.15948 17.9873 6.14038 17.9139 6.14063C17.8406 6.14088 17.7687 6.16046 17.7054 6.19742L13.332 8.74908" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.668 5H3.33464C2.41416 5 1.66797 5.74619 1.66797 6.66667V13.3333C1.66797 14.2538 2.41416 15 3.33464 15H11.668C12.5884 15 13.3346 14.2538 13.3346 13.3333V6.66667C13.3346 5.74619 12.5884 5 11.668 5Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0013 10.8307C10.4615 10.8307 10.8346 10.4576 10.8346 9.9974C10.8346 9.53716 10.4615 9.16406 10.0013 9.16406C9.54106 9.16406 9.16797 9.53716 9.16797 9.9974C9.16797 10.4576 9.54106 10.8307 10.0013 10.8307Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0013 5.0026C10.4615 5.0026 10.8346 4.62951 10.8346 4.16927C10.8346 3.70903 10.4615 3.33594 10.0013 3.33594C9.54106 3.33594 9.16797 3.70903 9.16797 4.16927C9.16797 4.62951 9.54106 5.0026 10.0013 5.0026Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0013 16.6667C10.4615 16.6667 10.8346 16.2936 10.8346 15.8333C10.8346 15.3731 10.4615 15 10.0013 15C9.54106 15 9.16797 15.3731 9.16797 15.8333C9.16797 16.2936 9.54106 16.6667 10.0013 16.6667Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AttachIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0273 16.8767L17.499 10.25" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3338 4.99668L6.32209 12.1517C6.00964 12.4642 5.83411 12.8881 5.83411 13.33C5.83411 13.772 6.00964 14.1958 6.32209 14.5084C6.63464 14.8208 7.05848 14.9963 7.50042 14.9963C7.94236 14.9963 8.36621 14.8208 8.67876 14.5084L15.6904 7.35335C16.3153 6.72826 16.6664 5.88056 16.6664 4.99668C16.6664 4.1128 16.3153 3.26511 15.6904 2.64002C15.0653 2.01511 14.2176 1.66406 13.3338 1.66406C12.4499 1.66406 11.6022 2.01511 10.9771 2.64002L3.96459 9.79418C3.02683 10.7319 2.5 12.0038 2.5 13.33C2.5 14.6562 3.02683 15.9281 3.96459 16.8659C4.90235 17.8036 6.17423 18.3304 7.50042 18.3304C8.82662 18.3304 10.0985 17.8036 11.0363 16.8659" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SendPaperPlaneIcon = () => (
  <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.1441 24.3996C15.1836 24.5061 15.2524 24.597 15.3412 24.66C15.43 24.7231 15.5345 24.7553 15.6408 24.7524C15.747 24.7495 15.8499 24.7115 15.9356 24.6436C16.0212 24.5757 16.0856 24.4811 16.1201 24.3726L22.8909 2.99756C22.9243 2.89788 22.9306 2.79 22.9093 2.68656C22.8879 2.58311 22.8397 2.48838 22.7703 2.41343C22.7009 2.33849 22.6132 2.28644 22.5174 2.26338C22.4217 2.24031 22.3218 2.24718 22.2295 2.28318L2.43782 9.59569C2.33729 9.63292 2.24972 9.70247 2.18685 9.795C2.12398 9.88754 2.08883 9.99863 2.08611 10.1134C2.08339 10.2281 2.11323 10.341 2.17163 10.4369C2.23003 10.5328 2.31419 10.6071 2.41282 10.6498L10.6732 14.2273C10.9344 14.3402 11.1716 14.5091 11.3707 14.7237C11.5698 14.9383 11.7265 15.1942 11.8316 15.4761L15.1441 24.3996Z" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.763 2.41406L11.3672 14.7204" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AiEditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6673 10.8335C12.7788 10.8336 12.887 10.8709 12.9748 10.9395C13.0626 11.0081 13.125 11.104 13.152 11.2121L13.346 11.9875L14.122 12.1815C14.2301 12.2086 14.3261 12.271 14.3946 12.3589C14.4632 12.4467 14.5004 12.555 14.5004 12.6665C14.5004 12.7779 14.4632 12.8862 14.3946 12.9741C14.3261 13.0619 14.2301 13.1244 14.122 13.1515L13.346 13.3455L13.1527 14.1215C13.1258 14.2299 13.0634 14.3262 12.9755 14.395C12.8875 14.4639 12.779 14.5013 12.6673 14.5013C12.5556 14.5013 12.4472 14.4639 12.3592 14.395C12.2712 14.3262 12.2089 14.2299 12.182 14.1215L11.9887 13.3455L11.2127 13.1521C11.1042 13.1253 11.0079 13.0629 10.9391 12.9749C10.8703 12.887 10.8329 12.7785 10.8329 12.6668C10.8329 12.5551 10.8703 12.4466 10.9391 12.3587C11.0079 12.2707 11.1042 12.2083 11.2127 12.1815L11.988 11.9881L12.182 11.2121C12.2091 11.1039 12.2715 11.0079 12.3595 10.9393C12.4474 10.8706 12.5558 10.8334 12.6673 10.8335ZM2.73667 1.67147C2.93533 1.0908 3.79333 1.11013 3.94867 1.72947L4.146 2.52147L4.938 2.71947C5.578 2.87947 5.578 3.78813 4.938 3.94747L4.146 4.14547L3.94867 4.93747C3.78867 5.57747 2.88 5.57747 2.72 4.93747L2.522 4.14547L1.73 3.94747C1.09 3.78747 1.09 2.87947 1.73 2.71947L2.522 2.52147L2.72 1.72947L2.73667 1.67147ZM3.334 3.19813C3.29563 3.24952 3.25005 3.2951 3.19867 3.33347C3.25005 3.37183 3.29563 3.41742 3.334 3.4688C3.37237 3.41742 3.41795 3.37183 3.46933 3.33347C3.4179 3.2949 3.37232 3.24976 3.334 3.19813ZM11.1593 2.4848C11.3219 2.32237 11.5422 2.23112 11.772 2.23112C12.0018 2.23112 12.2221 2.32237 12.3847 2.4848L13.516 3.61613C13.6784 3.77865 13.7697 3.99902 13.7697 4.2288C13.7697 4.45858 13.6784 4.67895 13.516 4.84147L12.2433 6.1148L9.886 3.75747L11.1593 2.4848ZM5.87933 12.4788C5.83283 12.5251 5.77369 12.5566 5.70933 12.5695L3.352 13.0408C3.29823 13.0515 3.24265 13.0488 3.19018 13.0329C3.13772 13.017 3.08998 12.9884 3.05122 12.9496C3.01245 12.9108 2.98384 12.8631 2.96793 12.8106C2.95202 12.7582 2.9493 12.7026 2.96 12.6488L3.43133 10.2921C3.44423 10.2275 3.47601 10.1681 3.52267 10.1215L9.41467 4.2288L11.772 6.58613L5.87933 12.4788Z" fill="#7FFFD4"/>
  </svg>
);

const SendListingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3426 14L15.3359 8L1.3426 2L1.33594 6.66667L11.3359 8L1.33594 9.33333L1.3426 14Z" fill="#2EAF84"/>
  </svg>
);

const BudgetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="budgetMask" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="1" y="2" width="14" height="12">
      <path d="M9.3361 2.67188H6.66944C4.15544 2.67188 2.8981 2.67187 2.11744 3.45321C1.55477 4.01521 1.39744 4.82454 1.35344 6.17188H14.6521C14.6081 4.82454 14.4508 4.01521 13.8881 3.45321C13.1074 2.67187 11.8501 2.67188 9.3361 2.67188ZM6.66944 13.3385H9.3361C11.8501 13.3385 13.1074 13.3385 13.8881 12.5572C14.6688 11.7759 14.6694 10.5192 14.6694 8.00521C14.6694 7.71099 14.669 7.43321 14.6681 7.17188H1.33744C1.3361 7.43321 1.33566 7.71099 1.3361 8.00521C1.3361 10.5192 1.3361 11.7765 2.11744 12.5572C2.89877 13.3379 4.15544 13.3385 6.66944 13.3385Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.5 10.6719C3.5 10.5393 3.55268 10.4121 3.64645 10.3183C3.74021 10.2246 3.86739 10.1719 4 10.1719H6.66667C6.79927 10.1719 6.92645 10.2246 7.02022 10.3183C7.11399 10.4121 7.16667 10.5393 7.16667 10.6719C7.16667 10.8045 7.11399 10.9317 7.02022 11.0254C6.92645 11.1192 6.79927 11.1719 6.66667 11.1719H4C3.86739 11.1719 3.74021 11.1192 3.64645 11.0254C3.55268 10.9317 3.5 10.8045 3.5 10.6719ZM7.83333 10.6719C7.83333 10.5393 7.88601 10.4121 7.97978 10.3183C8.07355 10.2246 8.20073 10.1719 8.33333 10.1719H9.33333C9.46594 10.1719 9.59312 10.2246 9.68689 10.3183C9.78065 10.4121 9.83333 10.5393 9.83333 10.6719C9.83333 10.8045 9.78065 10.9317 9.68689 11.0254C9.59312 11.1192 9.46594 11.1719 9.33333 11.1719H8.33333C8.20073 11.1719 8.07355 11.1192 7.97978 11.0254C7.88601 10.9317 7.83333 10.8045 7.83333 10.6719Z" fill="black"/>
    </mask>
    <g mask="url(#budgetMask)">
      <path d="M0 0H16V16H0V0Z" fill="#999999"/>
    </g>
  </svg>
);

const BackArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ───── Message Bubble ───── */
function MessageBubble({ message }) {
  return (
    <div className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] sm:max-w-[70%] lg:max-w-[400px] px-4 pt-3 pb-3 rounded-[10px] flex flex-col gap-1 ${
          message.sent ? "bg-[var(--form-secondary)]" : "bg-[#F3F4F6]"
        }`}
      >
        <p className="text-[#101828] font-manrope text-sm leading-5">{message.text}</p>
        <span className="text-[#4A5565] font-manrope text-xs leading-4">{message.time}</span>
      </div>
    </div>
  );
}

/* ───── Smart AI Panel ───── */
function SmartAIPanel() {
  const [autoReplay, setAutoReplay] = useState(true);

  return (
    <div className="border-t border-[hsl(var(--chat-border))] bg-white shrink-0">

      <div className="flex flex-col 2xl:flex-row 2xl:items-stretch gap-4 2xl:gap-0 p-4 2xl:p-0">

        {/* Left: AI Controls */}
        <div className="flex flex-col gap-3 2xl:px-6 2xl:py-4 2xl:w-auto 2xl:shrink-0">

          {/* Label + Toggle */}
          <div className="flex items-center justify-between 2xl:justify-start 2xl:gap-6">

            <div className="flex items-center gap-2">
              <AiEditIcon />
              <span className="text-[var(--Colors-for-white-theme-Gray-Text)] font-manrope text-xs font-semibold leading-6 tracking-wide">
                SMART AI ASSISTANT
              </span>
            </div>

            <div className="flex items-center gap-2 ">
              <span className="text-[var(--Colors-for-white-theme-Gray-Text)] font-manrope text-xs font-semibold leading-6">
                Auto-Replay
              </span>

              <button
                onClick={() => setAutoReplay(v => !v)}
                className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                  autoReplay ? "bg-[var(--form-secondary)]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white shadow transition-transform ${
                    autoReplay ? "translate-x-[0px]" : "translate-x-[-20px]"
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">

            <button className="flex items-center gap-2 h-8 px-4 rounded-full  bg-white hover:bg-primary/10 transition-colors" style={{border:"1px solid #2EAF84"}}>
              <SendListingsIcon />
              <span className="text-[#2EAF84] font-manrope text-xs font-semibold leading-6">
                Send listings
              </span>
            </button>

            <button className="flex items-center gap-2 h-8 px-4 rounded-full border border-[var(--Colors-for-white-theme-Gray-Text)] bg-white hover:bg-gray-50 transition-colors">
              <BudgetIcon />
              <span className="text-[var(--Colors-for-white-theme-Gray-Text)] font-manrope text-xs font-semibold leading-6">
                Ask for budget
              </span>
            </button>

          </div>
        </div>

        {/* Right: AI Message Preview */}
        <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 min-w-0 2xl:border-l 2xl:border-[hsl(var(--chat-border))] 2xl:px-6 2xl:py-4">

          {/* Preview box */}
          <div className="flex-1 min-w-0 px-3 py-3 rounded-lg border border-[hsl(var(--chat-input-border))] overflow-hidden">
            <p className="text-[var(--Colors-for-white-theme-Gray-Text)] font-manrope text-sm leading-[140%] line-clamp-2">
              "Hi John! Based on your interest, here are 3 listings I have selected for you in the Northside district. Would you like to schedule a viewing?"
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-col gap-2 shrink-0 w-full sm:w-auto">

            <button className="flex items-center justify-center h-8 px-4 rounded bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto">
              <span className="text-[#2EAF84] font-manrope text-xs font-semibold leading-6">
                Edit
              </span>
            </button>

            <button className="flex items-center justify-center h-8 px-4 rounded bg-[var(--form-secondary)] hover:bg-primary/90 transition-colors w-full sm:w-auto">
              <span className="text-[var(--base-black)] font-manrope text-xs font-semibold leading-6">
                Send
              </span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

/* ───── Message Input ───── */
function MessageInput() {
  const [value, setValue] = useState("");

  return (
    <div className="border-t border-[hsl(var(--chat-border))] bg-white shrink-0 px-4 py-4">
      <div className="flex items-center gap-3">
        {/* Attachment */}
        <button className="flex items-center justify-center w-9 h-9 rounded-[10px] hover:bg-gray-100 transition-colors shrink-0">
          <AttachIcon />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Type your message..."
          value={value}
          onChange={e => setValue(e.target.value)}
          className="flex-1 h-[50px] px-4 rounded-[10px] border border-[hsl(var(--chat-input-border))] font-manrope text-base text-[rgba(10,10,10,0.5)] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:ring-1 focus:ring-primary bg-white"
        />

        {/* Send */}
        <button className="flex items-center justify-center w-[49px] h-[50px] rounded-[10px] bg-[var(--form-secondary)] hover:bg-primary/90 transition-colors shrink-0">
          <SendPaperPlaneIcon />
        </button>
      </div>
    </div>
  );
}

/* ───── Chat Header ───── */
function ChatHeader({ conversation, onBack }) {
  return (
    <div className="flex items-center justify-between px-4 h-[73px]  bg-white shrink-0" style={{borderBottom:"1px solid #F3F4F6"}}>
      {/* Left: Back (mobile) + Avatar + Name */}
      <div className="flex items-center gap-3">
        {/* Back button - mobile only */}
        <button
          onClick={onBack}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <BackArrowIcon />
        </button>

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

        {/* Name + status */}
        <div className="flex flex-col">
          <span className="text-[#101828] font-manrope text-base font-normal leading-6">
            {conversation.name}
          </span>
          <span className="text-[#6A7282] font-arimo text-xs leading-4">Online</span>
        </div>
      </div>

      {/* Right: Action icons */}
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center w-9 h-9 rounded-[10px] hover:bg-gray-100 transition-colors">
          <PhoneIcon />
        </button>
        <button className="flex items-center justify-center w-9 h-9 rounded-[10px] hover:bg-gray-100 transition-colors">
          <VideoIcon />
        </button>
        <button className="flex items-center justify-center w-9 h-9 rounded-[10px] hover:bg-gray-100 transition-colors">
          <MoreIcon />
        </button>
      </div>
    </div>
  );
}

/* ───── Main ChatArea ───── */
export default function ChatArea({ conversation, messages, onBack, visible }) {
  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } md:flex flex-col flex-1 min-w-0 h-full bg-white`}
    >
      {/* Header */}
      <ChatHeader conversation={conversation} onBack={onBack} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6 bg-white">
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* Smart AI Panel */}
      <SmartAIPanel />

      {/* Message Input */}
      <MessageInput />
    </div>
  );
}
