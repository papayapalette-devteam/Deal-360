import { useState, useMemo, useEffect } from "react";
import { Moon, Sun, ChevronDown, X } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../../../UI/table";

// ─── Sample Data ──────────────────────────────────────────────────────────────
const SAMPLE_AGENTS = [
  {
    id: "LST-001",
    agent:"Sarah Johnson",
    email:"sarah.j@email.com",
    propertyname: "Downtown Apartment - 2BR",
    propertyprice: "D750K - D850K",
    status: "Converted",
    priority: "High",
    assign: "Assign to agents",
  },
  {
    id: "LST-001",
    agent:"Sarah Johnson",
    email:"sarah.j@email.com",
    propertyname: "Downtown Apartment - 2BR",
    propertyprice: "D750K - D850K",
    status: "Converted",
    priority: "Low",
    assign: "Assign to agents",
  },
  {
    id: "LST-001",
    agent:"Sarah Johnson",
    email:"sarah.j@email.com",
    propertyname: "Downtown Apartment - 2BR",
    propertyprice: "D750K - D850K",
    status: "Converted",
    priority: "Medium",
    assign: "Assign",
  },
  {
    id: "LST-001",
    agent:"Sarah Johnson",
    email:"sarah.j@email.com",
    propertyname: "Downtown Apartment - 2BR",
    propertyprice: "D750K - D850K",
    status: "Unassigned",
    priority: "High",
    assign: "Assign to agents",
  },
  {
    id: "LST-001",
    agent:"Sarah Johnson",
    email:"sarah.j@email.com",
    propertyname: "Downtown Apartment - 2BR",
    propertyprice: "D750K - D850K",
    status: "Contacted",
    priority: "High",
    assign: "Assign to agents",
  },
];

const agents= [
  { name: "Sarah Johnson",   current: 8, total: 15, fillPercent: 66, color: "aquamarine" },
  { name: "Michael Chen",    current: 8, total: 15, fillPercent: 85, color: "coral"      },
  { name: "David Kim",       current: 8, total: 15, fillPercent: 63, color: "aquamarine" },
  { name: "Lisa Anderson",   current: 8, total: 15, fillPercent: 49, color: "aquamarine" },
  { name: "Emily Rodriguez", current: 8, total: 15, fillPercent: 34, color: "aquamarine" },
];

const STATUS_OPTIONS = [
  "All Statuses",
  "Active",
  "Pending Verification",
  "Inactive",
];

// ─── Reusable Inline SVG Icons ────────────────────────────────────────────────
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M11.9948 4L4 11.9948"
      stroke="#0A0A0A"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4L11.9948 11.9948"
      stroke="#0A0A0A"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPhone = ({ size = 12, color = "#62748E" }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path
      d="M10.9987 8.46V9.96C10.9993 10.0993 10.9708 10.2371 10.915 10.3647C10.8592 10.4923 10.7774 10.6068 10.6748 10.701C10.5722 10.7951 10.451 10.8668 10.3191 10.9114C10.1872 10.956 10.0474 10.9726 9.90875 10.96C8.37016 10.7929 6.89225 10.2671 5.59375 9.42505C4.38566 8.65738 3.36141 7.63313 2.59375 6.42505C1.74873 5.12065 1.22287 3.63555 1.05875 2.09005C1.04625 1.95178 1.06268 1.81243 1.107 1.68086C1.15131 1.54929 1.22253 1.42839 1.31613 1.32586C1.40973 1.22332 1.52365 1.1414 1.65064 1.08531C1.77763 1.02922 1.91492 1.00018 2.05375 1.00005H3.55375C3.7964 0.99766 4.03164 1.08359 4.21563 1.24181C4.39961 1.40004 4.51978 1.61977 4.55375 1.86005C4.61706 2.34008 4.73447 2.81141 4.90375 3.26505C4.97102 3.44401 4.98558 3.63851 4.9457 3.82549C4.90582 4.01247 4.81318 4.1841 4.67875 4.32005L4.04375 4.95505C4.75552 6.20682 5.79197 7.24327 7.04375 7.95505L7.67875 7.32005C7.81469 7.18562 7.98632 7.09297 8.17331 7.0531C8.36029 7.01322 8.55478 7.02778 8.73375 7.09505C9.18738 7.26432 9.65871 7.38174 10.1387 7.44505C10.3816 7.47931 10.6034 7.60165 10.762 7.7888C10.9206 7.97594 11.0048 8.21484 10.9987 8.46Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEmail = ({ size = 12, color = "#62748E" }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path
      d="M10 2H2C1.44772 2 1 2.44772 1 3V9C1 9.55228 1.44772 10 2 10H10C10.5523 10 11 9.55228 11 9V3C11 2.44772 10.5523 2 10 2Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 3.5L6.515 6.35C6.36064 6.44671 6.18216 6.49801 6 6.49801C5.81784 6.49801 5.63936 6.44671 5.485 6.35L1 3.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLocation = ({ size = 12, color = "#62748E" }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path
      d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M9.6877 14.4452C9.71301 14.5083 9.75701 14.5622 9.8138 14.5995C9.87059 14.6369 9.93744 14.6559 10.0054 14.6542C10.0733 14.6525 10.1391 14.63 10.1939 14.5898C10.2487 14.5496 10.2899 14.4935 10.312 14.4293L14.6425 1.77083C14.6638 1.7118 14.6679 1.64792 14.6542 1.58666C14.6405 1.5254 14.6097 1.46929 14.5653 1.42491C14.521 1.38053 14.4649 1.34971 14.4036 1.33605C14.3423 1.32239 14.2784 1.32646 14.2194 1.34778L1.56099 5.67829C1.4967 5.70034 1.44069 5.74153 1.40048 5.79633C1.36027 5.85113 1.33779 5.91692 1.33605 5.98486C1.33431 6.05281 1.35339 6.11966 1.39074 6.17645C1.4281 6.23324 1.48192 6.27724 1.545 6.30255L6.82823 8.42117C6.99525 8.48804 7.14699 8.58803 7.27432 8.71513C7.40164 8.84223 7.50191 8.99379 7.56908 9.16069L9.6877 14.4452Z"
      stroke="#0F172A"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.562 1.42969L7.27344 8.71761"
      stroke="#0F172A"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPhoneLg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M14.6564 11.2762V13.2749C14.6571 13.4604 14.6191 13.6441 14.5448 13.8141C14.4704 13.9841 14.3614 14.1367 14.2247 14.2622C14.088 14.3876 13.9266 14.4831 13.7508 14.5425C13.575 14.602 13.3888 14.6241 13.204 14.6074C11.1539 14.3846 9.18459 13.6841 7.45439 12.562C5.84465 11.5391 4.47988 10.1744 3.45699 8.56463C2.33104 6.82656 1.63034 4.84771 1.41166 2.78839C1.39501 2.60415 1.4169 2.41847 1.47595 2.24316C1.53499 2.06785 1.6299 1.90676 1.75461 1.77013C1.87933 1.63351 2.03112 1.52435 2.20034 1.44961C2.36955 1.37487 2.55247 1.33618 2.73746 1.336H4.73616C5.05949 1.33282 5.37294 1.44732 5.61809 1.65815C5.86325 1.86898 6.02337 2.16176 6.06862 2.48192C6.15298 3.12155 6.30943 3.74958 6.53499 4.35404C6.62462 4.5925 6.64402 4.85165 6.59089 5.1008C6.53775 5.34995 6.41431 5.57865 6.23518 5.75979L5.38907 6.6059C6.33749 8.27385 7.71852 9.65488 9.38646 10.6033L10.2326 9.75718C10.4137 9.57806 10.6424 9.45461 10.8916 9.40148C11.1407 9.34834 11.3999 9.36774 11.6383 9.45738C12.2428 9.68293 12.8708 9.83938 13.5104 9.92374C13.8341 9.9694 14.1296 10.1324 14.3409 10.3818C14.5522 10.6311 14.6645 10.9495 14.6564 11.2762Z"
      stroke="#0A0A0A"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconAward = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M10.3217 8.59375L11.3317 14.2778C11.3431 14.3447 11.3337 14.4135 11.3048 14.4749C11.276 14.5364 11.2291 14.5875 11.1704 14.6216C11.1116 14.6557 11.0439 14.671 10.9763 14.6656C10.9086 14.6601 10.8442 14.6341 10.7917 14.5911L8.40507 12.7997C8.28986 12.7137 8.14989 12.6672 8.00607 12.6672C7.86225 12.6672 7.72229 12.7137 7.60707 12.7997L5.21641 14.5904C5.16395 14.6334 5.09965 14.6593 5.03207 14.6648C4.96449 14.6702 4.89686 14.655 4.83818 14.621C4.77951 14.587 4.73259 14.536 4.70369 14.4746C4.67478 14.4133 4.66527 14.3446 4.67641 14.2778L5.68574 8.59375"
      stroke="#7FFFD4"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9.33594C10.2091 9.33594 12 7.54508 12 5.33594C12 3.1268 10.2091 1.33594 8 1.33594C5.79086 1.33594 4 3.1268 4 5.33594C4 7.54508 5.79086 9.33594 8 9.33594Z"
      stroke="#7FFFD4"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M1.3737 8.23419C1.31814 8.08452 1.31814 7.91987 1.3737 7.77019C1.91483 6.4581 2.83338 5.33622 4.01288 4.54679C5.19239 3.75736 6.57973 3.33594 7.99904 3.33594C9.41834 3.33594 10.8057 3.75736 11.9852 4.54679C13.1647 5.33622 14.0832 6.4581 14.6244 7.77019C14.6799 7.91987 14.6799 8.08452 14.6244 8.23419C14.0832 9.54629 13.1647 10.6682 11.9852 11.4576C10.8057 12.247 9.41834 12.6684 7.99904 12.6684C6.57973 12.6684 5.19239 12.247 4.01288 11.4576C2.83338 10.6682 1.91483 9.54629 1.3737 8.23419Z"
      stroke="currentColor"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconAgent = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
  <path d="M9.41797 12.6641V11.3307C9.41797 10.6235 9.15458 9.94521 8.68574 9.44511C8.21689 8.94501 7.58101 8.66406 6.91797 8.66406H3.16797C2.50493 8.66406 1.86904 8.94501 1.4002 9.44511C0.931361 9.94521 0.667969 10.6235 0.667969 11.3307V12.6641" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.04297 5.9974C6.42368 5.9974 7.54297 4.80349 7.54297 3.33073C7.54297 1.85797 6.42368 0.664062 5.04297 0.664062C3.66226 0.664062 2.54297 1.85797 2.54297 3.33073C2.54297 4.80349 3.66226 5.9974 5.04297 5.9974Z" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

const IconLocationSm = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13.3346 6.66927C13.3346 9.99794 9.64197 13.4646 8.40197 14.5353C8.28645 14.6221 8.14583 14.6691 8.0013 14.6691C7.85677 14.6691 7.71615 14.6221 7.60064 14.5353C6.36064 13.4646 2.66797 9.99794 2.66797 6.66927C2.66797 5.25478 3.22987 3.89823 4.23007 2.89803C5.23026 1.89784 6.58681 1.33594 8.0013 1.33594C9.41579 1.33594 10.7723 1.89784 11.7725 2.89803C12.7727 3.89823 13.3346 5.25478 13.3346 6.66927Z"
      stroke="#45556C"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8.66406C9.10457 8.66406 10 7.76863 10 6.66406C10 5.55949 9.10457 4.66406 8 4.66406C6.89543 4.66406 6 5.55949 6 6.66406C6 7.76863 6.89543 8.66406 8 8.66406Z"
      stroke="#45556C"
      strokeWidth="1.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Shared Modal Wrapper ─────────────────────────────────────────────────────
const ModalBackdrop = ({ onClose, children }) => (
  <div
    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
    onClick={onClose}
  >
    <div
      className="relative my-auto bg-white dark:bg-[#0f0f0f] border border-black/10 dark:border-white/10 rounded-[0.625rem] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

const ModalCloseBtn = ({ onClose }) => (
  <button
    onClick={onClose}
    className="absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity"
    aria-label="Close"
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M11.9948 4L4 11.9948"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#0A0A0A] dark:text-white"
      />
      <path
        d="M4 4L11.9948 11.9948"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#0A0A0A] dark:text-white"
      />
    </svg>
  </button>
);

// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const s = {
    Active:
      "bg-[#DCFCE7] border border-[#B9F8CF] text-[#008236] dark:bg-[#008236]/20 dark:border-[#008236]/40 dark:text-[#4ade80]",
    "Pending Verification":
      "bg-[#FEF9C2] border border-[#FFF085] text-[#A65F00] dark:bg-[#A65F00]/20 dark:border-[#FFF085]/40 dark:text-[#fbbf24]",
    Inactive:
      "bg-[#F1F5F9] border border-[#E2E8F0] text-[#314158] dark:bg-white/10 dark:border-white/20 dark:text-white/70",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-lg font-arimo text-xs leading-4 whitespace-nowrap ${s[status]}`}
    >
      {status}
    </span>
  );
};

// ─── Performance Bar ──────────────────────────────────────────────────────────
const PerformanceBar = ({ value }) => (
  <div className="flex items-center gap-2 w-full min-w-[6.25rem]">
    <div className="flex-1 h-2 bg-[#E2E8F0] dark:bg-white/10 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${
          value < 50 ? "bg-red-400" : "bg-green-400"
        }`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="font-arimo text-sm text-[#0A0A0A] dark:text-white/70 w-8 flex-shrink-0 text-right">
      {value}%
    </span>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LeadDistribution() {
  // const [dark, setDark] = useDarkMode();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const openModal = (agentdetails, agent) => {
  

    setSelectedAgent(agent);
    setActiveModal(agentdetails);
  };
  const closeModal = () => {
    setActiveModal(null);
    setSelectedAgent(null);
  };

  const filteredAgents = useMemo(
    () =>
      SAMPLE_AGENTS.filter((a) => {
        const matchSearch =
          search === "" ||
          a.agent.toLowerCase().includes(search.toLowerCase()) ||
          a.email.toLowerCase().includes(search.toLowerCase());
        const matchStatus =
          statusFilter === "All Statuses" || a.status === statusFilter;
        return matchSearch && matchStatus;
      }),
    [search, statusFilter],
  );

 const stats = [
  {
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M3.33203 6.66406L5.33203 8.66406L9.33203 4.66406M3.33203 15.9974L5.33203 17.9974L9.33203 13.9974M3.33203 25.3307L5.33203 27.3307L9.33203 23.3307M13.9987 15.9974H28.6654M13.9987 25.3307H28.6654M13.9987 6.66406H28.6654" stroke="#7FFFD4" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    value: "10",
    valueColor: "text-[#7FFFD4] dark:text-white",
    label: "Available leads",
  },
  {
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16.0038 29.3278C23.3668 29.3278 29.3357 23.3589 29.3357 15.996C29.3357 8.63295 23.3668 2.66406 16.0038 2.66406C8.64076 2.66406 2.67188 8.63295 2.67188 15.996C2.67188 23.3589 8.64076 29.3278 16.0038 29.3278Z" stroke="#D08700" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 8V15.9991L21.3328 18.6655" stroke="#D08700" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    value: "2",
    valueColor: "text-[#D08700] dark:text-white",
    label: "Unassigned",
  },
    {
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.0672 13.3341C29.6761 16.3222 29.2422 19.4287 27.8378 22.1356C26.4335 24.8424 24.1436 26.986 21.3501 28.2089C18.5565 29.4318 15.4282 29.6601 12.4868 28.8556C9.5453 28.0511 6.96854 26.2626 5.18618 23.7882C3.40382 21.3138 2.5236 18.3032 2.6923 15.2584C2.86101 12.2136 4.06844 9.31867 6.11325 7.05636C8.15805 4.79404 10.9166 3.30111 13.929 2.82653C16.9413 2.35194 20.0252 2.92439 22.6666 4.44841" stroke="#9810FA" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 14.6683L15.9996 18.6678L29.3315 5.33594" stroke="#9810FA" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    value: "1",
    valueColor: "text-[#9810FA] dark:text-white",
    label: "Contacted ",
  },
  {
    icon: (
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16.0038 29.3278C23.3668 29.3278 29.3357 23.3589 29.3357 15.996C29.3357 8.63295 23.3668 2.66406 16.0038 2.66406C8.64076 2.66406 2.67188 8.63295 2.67188 15.996C2.67188 23.3589 8.64076 29.3278 16.0038 29.3278Z" stroke="#00A63E" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.9991 12L12 19.9991" stroke="#00A63E" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 12L19.9991 19.9991" stroke="#00A63E" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    value: "1",
    valueColor: "text-[#3EBF83] dark:text-white",
    label: "Converted",
  },
  {
    icon: (
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M21.3365 27.9991V25.3328C21.3365 23.9184 20.7747 22.562 19.7746 21.5619C18.7745 20.5618 17.4181 20 16.0038 20H8.00463C6.5903 20 5.23389 20.5618 4.2338 21.5619C3.23372 22.562 2.67188 23.9184 2.67188 25.3328V27.9991" stroke="#155DFC" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.9968 14.6655C14.942 14.6655 17.3296 12.278 17.3296 9.33275C17.3296 6.38756 14.942 4 11.9968 4C9.05162 4 6.66406 6.38756 6.66406 9.33275C6.66406 12.278 9.05162 14.6655 11.9968 14.6655Z" stroke="#155DFC" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.3281 10.6641V18.6632" stroke="#155DFC" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.3273 14.6641H21.3281" stroke="#155DFC" stroke-width="2.66638" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    value: "1",
    valueColor: "text-[#155DFC] dark:text-white",
    label: "Assigned",
  },
];

  const thBase =
    "font-poppins font-medium text-sm text-[#0A0A0A] dark:text-white leading-[120%]";
  const thMain = "bg-[rgba(248,131,121,0.10)] dark:bg-[rgba(248,131,121,0.08)]";
  const thSub = "bg-[#FFF3F2] dark:bg-[rgba(248,131,121,0.06)]";
  const tdBase = "px-6 border-b border-[#E6E7E6] dark:border-border text-sm";

  const statusStyles = {
  assigned: "bg-[#155DFC30] text-[#155DFC]",
  unassigned: "bg-[#D087002B] text-[#D08700]",
  contacted: "bg-[#A52EFB26] text-[#9810FA]",
  converted: "bg-[#3EBF833D] text-[#16A34A]",
};

  const priorityStyles = {
  high: "text-[#AB252E]",
  medium: "text-[#D89D2F]",
  low: "text-[#3467AE]",
};



  return (
    <div className="min-h-screen bg-background font-poppins transition-colors duration-200">
      {/* ── Main Content ───────────────────────────────────────────────────── */}
      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Page title */}
        <div>
          <h1 className="font-manrope font-bold text-2xl sm:text-3xl text-foreground">
            Lead Distribution
          </h1>
          <p className="mt-1 font-poppins text-sm text-muted-foreground">
            Manage your public-facing brokerage information
          </p>
        </div>

        {/* Stats + Invite */}
        <div className="flex flex-col gap-6">
      
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5  gap-6">
            {stats.map((s, i) => (
            <div
  key={i}
  className="bg-card border border-[#E5E7EB] dark:border-border rounded-[0.625rem] shadow-sm px-6 py-12 flex flex-col"
>
  {/* Top Row (Icon Right) */}
  <div className="flex justify-end">
   {s.icon}
  </div>

  {/* Bottom Content (Left) */}
  <div className="mt-auto flex flex-col gap-2">
    <span
      className={`font-manrope font-bold text-4xl leading-none ${s.valueColor}`}
    >
      {s.value}
    </span>
    <span className="font-poppins text-lg text-[#4A5565] dark:text-white/70 leading-[120%]">
      {s.label}
    </span>
  </div>
</div>
            ))}
          </div>
        </div>

        {/* Search + Filter */}
        <div className="bg-card rounded-[0.875rem] shadow-md px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#90A1B9"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.9992 21.0031L16.6992 16.7031"
                    stroke="#90A1B9"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search agents by name or email..."
                className="w-full h-10 pl-10 pr-4 bg-[#F3F3F5] dark:bg-[#1a1a1a] border border-transparent rounded-lg font-poppins text-sm text-[#0A0A0A] dark:text-white placeholder-[#717182] dark:placeholder-white/40 outline-none focus:ring-2 focus:ring-mint/40 transition-all"
              />
            </div>
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between gap-2 h-10 px-3 min-w-[10rem] bg-[#F3F3F5] dark:bg-[#1a1a1a] rounded-lg font-poppins text-sm text-[#0A0A0A] dark:text-white hover:bg-[#EBEBED] dark:hover:bg-[#222] transition-colors"
              >
                <span>{statusFilter}</span>
                <ChevronDown className="w-4 h-4 opacity-50 text-[#717182]" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-card border border-border rounded-lg shadow-lg z-50 py-1">
                  {STATUS_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setStatusFilter(opt);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 font-poppins text-sm transition-colors hover:bg-muted dark:hover:bg-[#1a1a1a] ${statusFilter === opt ? "text-[#0A0A0A] dark:text-white font-medium" : "text-[#717182] dark:text-white/70"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border border-[#E6E7E6] dark:border-border rounded-xl bg-card overflow-hidden">
          <Table className="min-w-[56.25rem]">
            {/* HEADER */}
            <thead className="bg-[rgba(248,131,121,0.10)]">
              <TableRow>
                <TableHead
                  rowSpan={2}
                  className="px-6 text-left whitespace-nowrap rounded-tl-xl text-[var(--form-text-black)]"
                >
                  Lead
                </TableHead>

                <TableHead
                  rowSpan={2}
                  className="px-6 text-center whitespace-nowrap text-[var(--form-text-black)]"
                 
                >
                  Property Interest
                </TableHead>

                <TableHead
                  rowSpan={2}
                  className="px-6 text-center whitespace-nowrap text-[var(--form-text-black)]"
                  
                >
                  Status
                </TableHead>

                <TableHead
                  rowSpan={2}
                  className="px-6 text-center whitespace-nowrap text-[var(--form-text-black)]" 
                  
                >
                  Priority
                </TableHead>

                <TableHead
                  rowSpan={2}
                  className="px-6 text-center whitespace-nowrap text-[var(--form-text-black)]"
                 
                >
                  Assign
                </TableHead>



                <TableHead
                  rowSpan={2}
                  className="px-6 text-center whitespace-nowrap rounded-tr-xl text-[var(--form-text-black)]"
                 
                >
                  Active Listings
                </TableHead>
              </TableRow>

 
            </thead>

            {/* BODY */}
            <TableBody>
              {filteredAgents.map((agent, idx) => {
                const isLast = idx === filteredAgents.length - 1;

                return (
                  <TableRow
                    key={agent.id}
                    className="hover:bg-muted/30 dark:hover:bg-white/5"
                  >
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-poppins font-medium text-base text-[#000] dark:text-white">
                          {agent.agent}
                        </span>
                   <span className="font-poppins text-xs text-[#999] dark:text-white/50 flex items-center gap-1">
  {agent.email}
</span>
                     
                      </div>
                    </TableCell>

                    <TableCell className="px-6 py-4 text-center whitespace-nowrap ">
                      <div className="flex flex-col justify-center text-md">
                                                <span className="font-poppins font-medium text-base text-[#000] dark:text-white">
                          {agent.propertyname}
                        </span>
                   <span className="font-poppins text-xs text-[#999] dark:text-white/50 flex items-center gap-1">
  {agent.propertyprice}
</span>
                      </div>
                    </TableCell>

                    <TableCell className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1.5">
                        
                        <span className="font-poppins text-md text-[#45556C] dark:text-white/70">
                            <span
    className={`inline-flex w-[8.125rem] px-6 py-2 justify-center items-center rounded 
    text-[1rem] font-bold leading-[120%] font-poppins 
    ${statusStyles[agent.status?.toLowerCase()]}`}
  >
    {agent.status}
  </span>
                        </span>
                      </div>
                    </TableCell>

               <TableCell className="px-6 py-4 text-center whitespace-nowrap dark:text-white/70">
  <span
    className={`inline-flex w-[8.125rem] px-6 py-2 justify-center items-center rounded 
    text-[1rem] font-normal leading-[120%] font-poppins 
    ${priorityStyles[agent.priority?.toLowerCase()]}`}
  >
    {agent.priority}
  </span>
</TableCell>

<TableCell className="px-6 py-4 text-left whitespace-nowrap">
  <div
    className={`flex items-center justify-center px-6 py-2 rounded-[0.25rem] ${
      agent.assign === "Assign to agents"
        ? "w-[9.0625rem] border-[1px] border-[#15661D] "
        : "w-[8.125rem] border-[1px] border-[#B2B2B2] bg-[rgba(188,188,188,0.24)]"
    }`}
  >
    <span
      className={`text-center font-poppins leading-[120%] ${
        agent.assign === "Assign"
          ? "text-[1rem] font-bold text-[#797979] dark:text-white/70 "
          : "text-[0.875rem] font-normal text-[#2A9061]"
      }`}
    >
      {agent.assign}
    </span>
  </div>
</TableCell>

                  


             

                    <TableCell className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => openModal("agentDetails", agent)}
                          className="w-9 h-8 flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10"
                        >
                          <IconEye />
                        </button>

                        <button
                          onClick={() => openModal("listingDetails", agent)}
                          className="w-9 h-8 flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <IconAgent />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}

              {filteredAgents.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={10}
                    className="px-6 py-12 text-center text-sm text-[#999] dark:text-white/40"
                  >
                    No agents found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
           <div className="bg-white rounded-2xl shadow-md pt-6 pb-0 w-full max-w-[38.6875rem]">
      {/* Card Title */}
      <div className="px-6 mb-[1.625rem]">
        <h2
          className="text-[1rem] leading-4 text-[#0A0A0A]"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
        >
          Agent Capacity
        </h2>
      </div>

      {/* Card Content */}
      <div className="px-6 pb-6 flex flex-col gap-4">
        {agents.map((agent) => (
          <div key={agent.name} className="flex flex-col gap-2">
            {/* Row: Name + Fraction */}
            <div className="flex items-center justify-between">
              <span
                className="text-[0.875rem] leading-5 text-[#0A0A0A]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                {agent.name}
              </span>
              <span
                className="text-[0.875rem] leading-5 text-[#62748E]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                {agent.current}/{agent.total}
              </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-2 w-full rounded-full bg-[#E2E8F0] overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${agent.fillPercent}%`,
                  backgroundColor:
                    agent.color === "coral" ? "#F88379" : "#7FFFD4",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
      </main>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
      {/* {activeModal === "invite" && (
        <InviteModal onClose={closeModal} />
      )}

      {activeModal === "agentDetails" && selectedAgent && (
        <AgentDetailsModal
          agent={selectedAgent}
          onClose={closeModal}
          onContactAgent={(a) => openModal("contactAgent", a)}
        />
      )}

      {activeModal === "contactAgent" && selectedAgent && (
        <ContactModal agent={selectedAgent} onClose={closeModal} />
      )}

      {activeModal === "listingDetails" && selectedAgent && (
        <ListingDetailsModal
          agent={selectedAgent}
          onClose={closeModal}
          onContactAgent={(a) => openModal("contactAgent", a)}
        />
      )} */}
    </div>
  );
}
