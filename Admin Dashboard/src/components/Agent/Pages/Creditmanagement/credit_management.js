import { useState } from "react";
import AdjustCreditsModal from "../SubscriptionPayment/adjust_credit_modal";


const credit = [
    {
        credit_id: "CR-9281",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        tier: "Premium",
        balance: "250",
        total_purchased: "5,000",
        total_used: "4,750",
        status: "active",
    },
    {
        credit_id: "CR-9281",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        tier: "Enterprise",
        balance: "250",
        total_purchased: "5,000",
        total_used: "4,750",
        status: "active",
    },
    {
        credit_id: "CR-9281",
        sign_up: "Brokerage",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        tier: "Premium",
        balance: "250",
        total_purchased: "5,000",
        total_used: "4,750",
        status: "active",
    },
    {
        credit_id: "CR-9281",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        tier: "Premium",
        balance: "250",
        total_purchased: "5,000",
        total_used: "4,750",
        status: "active",
    },
    {

        credit_id: "CR-9281",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        tier: "Basic",
        balance: "250",
        total_purchased: "5,000",
        total_used: "4,750",
        status: "Low",
    },
    {
        credit_id: "CR-9281",
        sign_up: "Brokerage",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        tier: "Basic",
        balance: "250",
        total_purchased: "5,000",
        total_used: "4,750",
        status: "active",
    },
    {
        credit_id: "CR-9281",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        tier: "Premium",
        balance: "250",
        total_purchased: "5,000",
        total_used: "4,750",
        status: "Critical",
    },
];



const statusBadge = (status) => {
    const styles = {
        active: "bg-[#DCFCE7] text-[#016630]",
        Critical: "bg-[#FCE7DC] text-[#D02F2D]",
        Low: "bg-[#FEF9C2] text-[#894B00]",
    };
    return (
        <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium font-[Poppins] whitespace-nowrap ${styles[status] || "bg-gray-100 text-gray-600"}`}
        >
            {status}
        </span>
    );
};

const tierBadge = (cat) => {
    const styles = {
        Basic: "bg-[#DCFCE7] text-[#016630]",
        Premium: "bg-[#DBEAFE] text-[#193CB8]",
        Enterprise: "bg-[#F3E8FF] text-[#6E11B0]",
    };
    return (
        <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium font-[Poppins] whitespace-nowrap ${styles[cat] || "bg-gray-100 text-gray-600"}`}
        >
            {cat}
        </span>
    );
};



const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#717182" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4974 17.4974L13.9141 13.9141" stroke="#717182" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6L8 10L12 6" stroke="#717182" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
);

function SearchFilterBar({ search, setSearch, statusFilter, setStatusFilter, roleFilter, setRoleFilter }) {
    return (
        <div className="bg-white rounded-[14px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_2px_4px_-2px_rgba(0,0,0,0.10)] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search Input */}
                <div className="flex-1 flex items-center gap-2.5 bg-[#F3F3F5] rounded-lg px-4 py-2.5">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search by name, email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 bg-transparent text-sm font-[Poppins] text-[#0A0A0A] placeholder-[#717182] outline-none min-w-0"
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-2 flex-shrink-0">
                    {/* Status Filter */}
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="appearance-none bg-[#F3F3F5] rounded-lg px-4 pr-9 py-2.5 text-sm font-[Poppins] text-[#0A0A0A] outline-none cursor-pointer min-w-[140px] h-[40px]"
                        >
                            <option value="">All Statuses</option>
                            <option value="active">Active</option>
                            <option value="suspended">Suspended</option>
                            <option value="pending">Pending</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                            <ChevronDownIcon />
                        </div>
                    </div>

                    {/* Role Filter */}
                    <div className="relative">
                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="appearance-none bg-[#F3F3F5] rounded-lg px-4 pr-9 py-2.5 text-sm font-[Poppins] text-[#0A0A0A] outline-none cursor-pointer min-w-[130px] h-[40px]"
                        >
                            <option value="">All Roles</option>
                            <option value="seller">Seller</option>
                            <option value="Buyer">Buyer</option>
                            <option value="Agent">Agent</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ListingsTable({ users, setadjust_credit_modal }) {
    return (
        <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">

                    {/* HEADER */}
                    <thead>
                        <tr className="bg-[rgba(248,131,121,0.10)] whitespace-nowrap">
                            <th className="px-6 py-3 text-left text-base font-medium font-[Poppins] text-black">
                                Credit ID
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Sign up
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Agent
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Brokerage
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Tier
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Balance
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Total Purchased
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Total Used
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Status
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Action
                            </th>


                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center py-12 text-[#717182] text-sm">
                                    No users found.
                                </td>
                            </tr>
                        ) : (
                            users.map((user, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-[#E6E7E6] last:border-b-0 hover:bg-gray-50 whitespace-nowrap"
                                >
                                    {/* credit_id */}
                                    <td className="px-6 py-3 text-[var(--form-text-black)] font-medium">
                                        {user.credit_id}
                                    </td>

                                    {/* sign_up */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.sign_up}
                                    </td>

                                    {/* agent */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.agent}
                                    </td>

                                    {/* brokerage */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.brokerage}
                                    </td>

                                    {/* tier */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {tierBadge(user.tier)}
                                    </td>

                                    {/* balance */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.balance}
                                    </td>

                                    {/* total_purchased */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.total_purchased}
                                    </td>

                                    {/* total_used */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.total_used}
                                    </td>

                                    {/* status */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {statusBadge(user.status)}
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-6 py-3">
                                        <div className="flex items-center justify-center gap-4">

                                            {/* VIEW */}
                                            <button onClick={() => setadjust_credit_modal(true)}
                                                className="flex items-center justify-center text-xs text-[var(--secondary-text)] font-medium px-[18px] py-[7px] pl-[17px] hover:opacity-70 transition p-2 rounded-xl bg-[var(--form-secondary)]"
                                            >
                                                Adjust Credits
                                            </button>



                                        </div>
                                    </td>





                                </tr>
                            ))
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
}


const statsData = [
    {
        id: 1,
        value: "20,000",
        label: "Total Credits Issued",
        iconBg: "rgba(127, 255, 212, 0.13)",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 7H22V13" stroke="#7FFFD4" stroke-width="1.99942" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#7FFFD4" stroke-width="1.99942" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 2,
        value: "3,432",
        label: "Credits in Circulation",
        iconBg: "#DCFCE7",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5V19" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 3,
        value: "14,049",
        label: "Credits Used (MTD)",
        iconBg: "#DBEAFE",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 4,
        value: "12",
        label: "Low Balance Accounts",
        iconBg: "#FFE2E2",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12C3 13.78 3.52784 15.5201 4.51677 17.0001C5.50571 18.4802 6.91131 19.6337 8.55585 20.3149C10.2004 20.9961 12.01 21.1743 13.7558 20.8271C15.5016 20.4798 17.1053 19.6226 18.364 18.364C19.6226 17.1053 20.4798 15.5016 20.8271 13.7558C21.1743 12.01 20.9961 10.2004 20.3149 8.55585C19.6337 6.91131 18.4802 5.50571 17.0001 4.51677C15.5201 3.52784 13.78 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 3V8H8" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 7V12L16 14" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
];


function StatCard({ stat }) {
    return (
        <div className="bg-white rounded-[10px] border border-[#E5E7EB] shadow-sm p-6 flex flex-col gap-6">
            <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: stat.iconBg }}
            >
                {stat.icon}
            </div>
            <div className="flex flex-col gap-1">
                <p
                    className="font-semibold leading-[120%] text-[var(--secondary-text)]"
                    style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}
                >
                    {stat.value}
                </p>
                <p className="text-[18px] font-normal leading-[120%] text-[#4A5565]">
                    {stat.label}
                </p>
            </div>
        </div>
    );
}


export default function CreditManagement() {

    const [adjust_credit_modal, setadjust_credit_modal] = useState(false)

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    const filtered = credit.filter((u) => {
        const matchSearch =
            !search ||
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase()) ||
            u.id.toLowerCase().includes(search.toLowerCase());
        const matchStatus = !statusFilter || u.status === statusFilter;
        const matchRole = !roleFilter || u.role === roleFilter;
        return matchSearch && matchStatus && matchRole;
    });

    return (
        <div className=" bg-background font-[Poppins]">
            <div className="w-full mx-auto px-2 sm:px-2 lg:px-2 py-2 sm:py-2">
                {/* Page Header */}
                {/* <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--brand-dark-secondary)] font-[Poppins]">
            User Management
          </h1>
          <p className="text-sm text-[var(--secondary-text)] mt-1 font-[Poppins]">
            Manage and monitor all platform users
          </p>
        </div> */}

                {/* Search & Filter Bar */}
                <div className="mb-4">
                    <SearchFilterBar
                        search={search}
                        setSearch={setSearch}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        roleFilter={roleFilter}
                        setRoleFilter={setRoleFilter}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                    {statsData.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>

                {/* Users Table */}
                <ListingsTable users={filtered} setadjust_credit_modal={setadjust_credit_modal} />

                {
                    adjust_credit_modal && (
                        <AdjustCreditsModal onClose={() => setadjust_credit_modal(false)} />
                    )
                }

                {/* Footer count */}
                <div className="mt-3 px-1">
                    <p className="text-sm text-[#717182] font-[Poppins]">
                        Showing {filtered.length} of {credit.length} users
                    </p>
                </div>
            </div>
        </div>
    );
}
