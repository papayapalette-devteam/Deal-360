import { useState } from "react";
import AdjustCreditsModal from "../SubscriptionPayment/adjust_credit_modal";
import ViewLogDetails from "./leg_details";


const log = [
    {
        log_id: "LOG-9821",
        timestamp: "2026-01-18 14:32:15",
        actor: "admin@deal360.com",
        action: "User Suspended",
        resource: "User",
        details: "Lisa Anderson suspended for policy violation",
        severity: "info",
    },
    {
        log_id: "LOG-9821",
        timestamp: "2026-01-18 14:32:15",
        actor: "John Martinez",
        action: "User Suspended",
        resource: "User",
        details: "Modern Office Space approved after review",
        severity: "Warning",
    },
    {
        log_id: "LOG-9821",
        timestamp: "2026-01-18 14:32:15",
        actor: "admin@deal360.com",
        action: "User Suspended",
        resource: "User",
        details: "Upgraded from Basic to Premium tier",
        severity: "info",
    },
    {
        log_id: "LOG-9821",
        timestamp: "2026-01-18 14:32:15",
        actor: "Empire Realty Group",
        action: "Listing Created",
        resource: "Credits",
        details: "Added 100 credits - Compensation for issue",
        severity: "Warning",
    },
    {

        log_id: "LOG-9821",
        timestamp: "2026-01-18 14:32:15",
        actor: "admin@deal360.com",
        action: "User Suspended",
        resource: "User",
        details: "Lisa Anderson suspended for policy violation",
        severity: "info",
    },
    {
        log_id: "LOG-9821",
        timestamp: "2026-01-18 14:32:15",
        actor: "admin@deal360.com",
        action: "User Suspended",
        resource: "Subscription",
        details: "Lisa Anderson suspended for policy violation",
        severity: "Critical",
    },
    {
        log_id: "LOG-9821",
        timestamp: "2026-01-18 14:32:15",
        actor: "admin@deal360.com",
        action: "Bulk Upload",
        resource: "Listing",
        details: "New listing: Luxury Villa in Downtown",
        severity: "info",
    },
];



const servityBadge = (status) => {
    const styles = {
        info: "bg-[#DCFCE7] text-[#016630]",
        Critical: "bg-[#FCE7DC] text-[#D02F2D]",
        Warning: "bg-[#FEF9C2] text-[#894B00]",
    };
    return (
        <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium font-[Poppins] whitespace-nowrap ${styles[status] || "bg-gray-100 text-gray-600"}`}
        >
            {status}
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
    const [dateFilter, setDateFilter] = useState("today");
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
            <div className="flex gap-2 mt-4">
                {["today", "7days", "30days"].map((item) => {
                    const isActive = dateFilter === item;

                    const label =
                        item === "today"
                            ? "Today"
                            : item === "7days"
                                ? "Last 7 Days"
                                : "Last 30 Days";

                    return (
                        <button
                            key={item}
                            onClick={() => setDateFilter(item)}
                            className={`flex items-center justify-center 
        pt-[5.984px] pr-[15.574px] pb-[9.97px] pl-[15.992px]
        text-[14px] leading-[20px] font-normal font-[Arimo] rounded-md transition
        ${isActive
                                    ? "bg-[var(--form-secondary)] text-[var(--secondary-text)]"
                                    : "bg-transparent text-[#4A5565] hover:bg-gray-100"
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function ListingsTable({ users, setlog_details_modal }) {
    return (
        <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">

                    {/* HEADER */}
                    <thead>
                        <tr className="bg-[rgba(248,131,121,0.10)] whitespace-nowrap">
                            <th className="px-6 py-3 text-left text-base font-medium font-[Poppins] text-black">
                                Log ID
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Timestamp
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Actor
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Action
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Resource
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Details
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Details
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
                                    {/* log_id */}
                                    <td className="px-6 py-3 text-[var(--form-text-black)] font-medium">
                                        {user.log_id}
                                    </td>

                                    {/* timestamp */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.timestamp}
                                    </td>

                                    {/* actor */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.actor}
                                    </td>

                                    {/* action */}
                                    <td className="mt-3 inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium font-[Poppins] whitespace-nowrap  bg-[#DBEAFE] text-[#193CB8]">
                                        {user.action}
                                    </td>

                                    {/* resource */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.resource}
                                    </td>

                                    {/* details */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.details}
                                    </td>

                                    {/* severity */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {servityBadge(user.severity)}
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-6 py-3">
                                        <div className="flex items-center justify-center gap-4 cursor-pointer" onClick={()=>setlog_details_modal(true)}>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2.06251 12.3474C1.97916 12.1229 1.97916 11.8759 2.06251 11.6514C2.87421 9.68324 4.25202 8.00042 6.02128 6.81628C7.79053 5.63214 9.87155 5 12.0005 5C14.1295 5 16.2105 5.63214 17.9797 6.81628C19.749 8.00042 21.1268 9.68324 21.9385 11.6514C22.0218 11.8759 22.0218 12.1229 21.9385 12.3474C21.1268 14.3155 19.749 15.9983 17.9797 17.1825C16.2105 18.3666 14.1295 18.9988 12.0005 18.9988C9.87155 18.9988 7.79053 18.3666 6.02128 17.1825C4.25202 15.9983 2.87421 14.3155 2.06251 12.3474Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

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








export default function ActivityLog() {

    const [log_details_modal, setlog_details_modal] = useState(false)

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    const filtered = log.filter((u) => {
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



                {/* Users Table */}
                <ListingsTable users={filtered} setlog_details_modal={setlog_details_modal} />

                {
                    log_details_modal && (
                        <ViewLogDetails onClose={() => setlog_details_modal(false)} />
                    )
                }

                {/* Footer count */}
                <div className="mt-3 px-1">
                    <p className="text-sm text-[#717182] font-[Poppins]">
                        Showing {filtered.length} of {log.length} users
                    </p>
                </div>
            </div>
        </div>
    );
}
