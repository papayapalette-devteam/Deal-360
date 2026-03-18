import { useState } from "react";
import AdjustCreditsModal from "../SubscriptionPayment/adjust_credit_modal";
import Documentsreview from "./documents_review";


const compliance = [
    {
        request_id: "COMP-7821",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        type: "identity",
        documents: "2",
        submitted: "01-02-2026",
        status: "active",
    },
    {
        request_id: "COMP-7821",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        type: "identity",
        documents: "2",
        submitted: "01-02-2026",
        status: "active",
    },
    {
        request_id: "COMP-7821",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        type: "identity",
        documents: "2",
        submitted: "01-02-2026",
        status: "active",
    },
    {
        request_id: "COMP-7821",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        type: "business",
        documents: "2",
        submitted: "01-02-2026",
        status: "active",
    },
    {

        request_id: "COMP-7821",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        type: "identity",
        documents: "2",
        submitted: "01-02-2026",
        status: "pending",
    },
    {
        request_id: "COMP-7821",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        type: "identity",
        documents: "2",
        submitted: "01-02-2026",
        status: "suspended",
    },
    {
        request_id: "COMP-7821",
        sign_up: "Agent",
        agent: "Natasha  Howe",
        brokerage: "Barnes",
        type: "identity",
        documents: "2",
        submitted: "01-02-2026",
        status: "active",
    },
];



const statusBadge = (status) => {
    const styles = {
        active: "bg-[#DCFCE7] text-[#016630]",
        suspended: "bg-[#FCE7DC] text-[#D02F2D]",
        pending: "bg-[#FEF9C2] text-[#894B00]",
    };
    return (
        <span
            className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium font-[Poppins] whitespace-nowrap ${styles[status] || "bg-gray-100 text-gray-600"}`}
        >
            {status}
        </span>
    );
};

const typeBadge = (cat) => {
    const styles = {
        identity: "bg-[#DBEAFE] text-[#193CB8]",
        business: "bg-[#DBEAFE] text-[#193CB8]",
        address: "bg-[#DBEAFE] text-[#193CB8]",
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

function ListingsTable({ users, setdocuments_review_modal }) {
    return (
        <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">

                    {/* HEADER */}
                    <thead>
                        <tr className="bg-[rgba(248,131,121,0.10)] whitespace-nowrap">
                            <th className="px-6 py-3 text-left text-base font-medium font-[Poppins] text-black">
                                Request ID
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
                                Type
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Documents
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Submitted
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
                                    {/* request_id */}
                                    <td className="px-6 py-3 text-[var(--form-text-black)] font-medium">
                                        {user.request_id}
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

                                    {/* type */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {typeBadge(user.type)}
                                    </td>

                                    {/* documents */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.documents}
                                    </td>

                                    {/* submitted */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.submitted}
                                    </td>

                                    {/* status */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {statusBadge(user.status)}
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-6 py-3">
                                        <div onClick={()=>setdocuments_review_modal(true)}
                                        className="flex items-center justify-center gap-4 cursor-pointer">

                                            {/* VIEW */}

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


const statsData = [
    {
        id: 1,
        value: "2",
        label: "Pending Reviews",
        iconBg: "#FEF9C2",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="#D08700" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20" stroke="#D08700" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 9H8" stroke="#D08700" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 13H8" stroke="#D08700" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 17H8" stroke="#D08700" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 2,
        value: "127",
        label: "Approved (MTD)",
        iconBg: "#DCFCE7",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.7987 10.0034C22.2554 12.2447 21.9299 14.5748 20.8765 16.6052C19.8231 18.6356 18.1055 20.2435 16.0102 21.1607C13.9148 22.078 11.5683 22.2492 9.36196 21.6458C7.15563 21.0424 5.22285 19.7008 3.88593 17.8448C2.54902 15.9889 1.88878 13.7306 2.01532 11.4468C2.14186 9.16294 3.04754 6.9915 4.58131 5.29458C6.11508 3.59766 8.18424 2.47784 10.4437 2.12186C12.7032 1.76588 15.0164 2.19527 16.9977 3.33841" stroke="#2A795E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 11L12 14L22 4" stroke="#2A795E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 3,
        value: "14",
        label: "Rejected (MTD)",
        iconBg: "#FFE2E2",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 9L9 15" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 9L15 15" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 4,
        value: "5521",
        label: "Total Verified Users",
        iconBg: "#DBEAFE",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 9H8" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 13H8" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 17H8" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
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


export default function Compliance() {

    const [documents_review_modal, setdocuments_review_modal] = useState(false)

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    const filtered = compliance.filter((u) => {
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
                <ListingsTable users={filtered} setdocuments_review_modal={setdocuments_review_modal} />

                {
                    documents_review_modal && (
                        <Documentsreview onClose={() => setdocuments_review_modal(false)} />
                    )
                }

                {/* Footer count */}
                <div className="mt-3 px-1">
                    <p className="text-sm text-[#717182] font-[Poppins]">
                        Showing {filtered.length} of {compliance.length} users
                    </p>
                </div>
            </div>
        </div>
    );
}
