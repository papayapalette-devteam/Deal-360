// Icons for each notification type
const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
      stroke="#7FFFD4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BellIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M8.55859 17.5C8.70488 17.7533 8.91527 17.9637 9.16863 18.11C9.42199 18.2563 9.70938 18.3333 10.0019 18.3333C10.2945 18.3333 10.5819 18.2563 10.8352 18.11C11.0886 17.9637 11.299 17.7533 11.4453 17.5"
      stroke={color || "#F88379"}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.71772 12.7691C2.60886 12.8884 2.53702 13.0368 2.51094 13.1962C2.48486 13.3556 2.50566 13.5191 2.57081 13.6669C2.63597 13.8147 2.74267 13.9404 2.87794 14.0286C3.0132 14.1169 3.17121 14.1639 3.33272 14.1641H16.6661C16.8276 14.1641 16.9856 14.1172 17.1209 14.0292C17.2563 13.9411 17.3631 13.8155 17.4285 13.6678C17.4938 13.5201 17.5148 13.3566 17.4889 13.1972C17.4631 13.0378 17.3914 12.8893 17.2827 12.7699C16.1744 11.6274 14.9994 10.4132 14.9994 6.66406C14.9994 5.33798 14.4726 4.06621 13.5349 3.12853C12.5972 2.19085 11.3255 1.66406 9.99939 1.66406C8.67331 1.66406 7.40154 2.19085 6.46386 3.12853C5.52618 4.06621 4.99939 5.33798 4.99939 6.66406C4.99939 10.4132 3.82356 11.6274 2.71772 12.7691Z"
      stroke={color || "#F88379"}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M15.8346 11.6667C17.0763 10.45 18.3346 8.99167 18.3346 7.08333C18.3346 5.86776 17.8517 4.70197 16.9922 3.84243C16.1327 2.98289 14.9669 2.5 13.7513 2.5C12.2846 2.5 11.2513 2.91667 10.0013 4.16667C8.7513 2.91667 7.71797 2.5 6.2513 2.5C5.03573 2.5 3.86994 2.98289 3.0104 3.84243C2.15085 4.70197 1.66797 5.86776 1.66797 7.08333C1.66797 9 2.91797 10.4583 4.16797 11.6667L10.0013 17.5L15.8346 11.6667Z"
      stroke="#7FFFD4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M12.4987 1.66406H4.9987C4.55667 1.66406 4.13275 1.83966 3.82019 2.15222C3.50763 2.46478 3.33203 2.8887 3.33203 3.33073V16.6641C3.33203 17.1061 3.50763 17.53 3.82019 17.8426C4.13275 18.1551 4.55667 18.3307 4.9987 18.3307H14.9987C15.4407 18.3307 15.8646 18.1551 16.1772 17.8426C16.4898 17.53 16.6654 17.1061 16.6654 16.6641V5.83073L12.4987 1.66406Z"
      stroke="#7FFFD4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.1669 8.33357C18.5474 10.2013 18.2762 12.1431 17.3984 13.8351C16.5206 15.527 15.0893 16.8669 13.3431 17.6313C11.597 18.3957 9.64154 18.5384 7.80293 18.0355C5.96433 17.5327 4.35368 16.4147 3.23958 14.8681C2.12548 13.3214 1.57529 11.4396 1.68074 9.53639C1.78619 7.63318 2.54092 5.82364 3.81906 4.40954C5.0972 2.99545 6.8215 2.06226 8.7044 1.76561C10.5873 1.46897 12.515 1.82679 14.166 2.7794" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12 4L4 12" stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" />
    <path d="M4 4L12 12" stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" />
  </svg>
);

const iconMap = {
  chat: { Icon: ChatIcon, color: "#7FFFD4" },
  bell: { Icon: BellIcon, color: "#F88379" },
  heart: { Icon: HeartIcon, color: "#7FFFD4" },
  file: { Icon: FileIcon, color: "#7FFFD4" },
  check: { Icon: CheckIcon, color: "#9CA3AF" },
};

export default function NotificationItem({ notification, onDismiss }) {
  const { Icon, color } = iconMap[notification.iconType] || iconMap.check;

  const iconBg = {
    mint: "rgba(127,255,212,0.13)",
    salmon: "rgba(248,131,121,0.13)",
    gray: "rgba(156,163,175,0.13)",
  };

  return (
    <div
      className="flex items-start gap-4 px-5 py-5 border-b"
      style={{
        borderColor: "#E5E7EB",
        backgroundColor: notification.unread
          ? "rgba(239,246,255,0.30)"
          : "transparent",
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-[10px] flex items-center justify-center mt-0.5"
        style={{ backgroundColor: iconBg[notification.iconColor] || iconBg.gray }}
      >
        <Icon color={color} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-manrope font-medium text-[18px] leading-[1.5] truncate text-[#101828]">
            {notification.title}
          </h3>

          {notification.unread && (
            <span className="w-2 h-2 rounded-full bg-[#F88379]" />
          )}
        </div>

        <p className="font-manrope text-sm leading-5 mb-1 text-[#4A5565]">
          {notification.description}
        </p>

        <p className="font-manrope text-xs leading-4 text-[#6A7282]">
          {notification.time}
        </p>
      </div>

      {/* Close */}
      <button
        onClick={() => onDismiss && onDismiss(notification.id)}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-[10px] hover:bg-gray-100 transition"
      >
        <CloseIcon />
      </button>
    </div>
  );
}