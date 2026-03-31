import { useState } from "react";


const payments = [
    {
        subscription_id: "SUB-8821",
        user: "John Martinez",
        tier: "Premium",
        status: "active",
        amount: "AED99/mo",
        renewal_date: "20-01-2026",
        payment_method: "Visa ****4532",
    },
    {
        subscription_id: "SUB-8821",
        user: "John Martinez",
        tier: "Enterprise",
        status: "suspended",
        amount: "AED99/mo",
        renewal_date: "20-01-2026",
        payment_method: "Mastercard ****7821",
    },
    {
        subscription_id: "SUB-8821",
        user: "John Martinez",
        tier: "Premium",
        status: "pending",
        amount: "AED99/mo",
        renewal_date: "20-01-2026",
        payment_method: "Visa ****4532",
    },
    {
        subscription_id: "SUB-8821",
        user: "John Martinez",
        tier: "Basic",
        status: "active",
        amount: "AED99/mo",
        renewal_date: "20-01-2026",
        payment_method: "Visa ****4532",
    },
    {

        subscription_id: "SUB-8821",
        user: "John Martinez",
        tier: "Premium",
        status: "active",
        amount: "AED99/mo",
        renewal_date: "20-01-2026",
        payment_method: "Visa ****4532",
    },
    {
        subscription_id: "SUB-8821",
        user: "John Martinez",
        tier: "Premium",
        status: "active",
        amount: "AED99/mo",
        renewal_date: "20-01-2026",
        payment_method: "Visa ****4532",
    },
    {
        subscription_id: "SUB-8821",
        user: "John Martinez",
        tier: "Premium",
        status: "active",
        amount: "AED99/mo",
        renewal_date: "20-01-2026",
        payment_method: "Amex ****1009",
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

function ListingsTable({ users }) {
    return (
        <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">

                    {/* HEADER */}
                    <thead>
                        <tr className="bg-[rgba(248,131,121,0.10)] whitespace-nowrap">
                            <th className="px-6 py-3 text-left text-base font-medium font-[Poppins] text-black">
                                Subscription ID
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                User
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Tier
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Status
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Amount
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Renewal Date
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Payment Method
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
                                    {/* subscription_id */}
                                    <td className="px-6 py-3 text-[var(--form-text-black)] font-medium">
                                        {user.subscription_id}
                                    </td>

                                    {/* user */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.user}
                                    </td>

                                    {/* tier */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {tierBadge(user.tier)}
                                    </td>

                                    {/* status */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {statusBadge(user.status)}
                                    </td>

                                    {/* amount */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.amount}
                                    </td>


                                    {/* renewal_date */}
                                    <td className="px-6 py-3 text-center">
                                        {user.renewal_date}
                                    </td>

                                    {/* payment_method */}
                                    <td className="px-6 py-3 text-center">
                                        {user.payment_method}
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
        value: "AED48,293",
        label: "MRR",
        iconBg: "rgba(127, 255, 212, 0.13)",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2V22" stroke="#7FFFD4" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#7FFFD4" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 2,
        value: "1,247",
        label: "Active Subscriptions",
        iconBg: "#DBEAFE",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                <path d="M10.6641 2.32812V6.99479" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.3359 2.32812V6.99479" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.3333 4.67188H6.66667C5.19391 4.67188 4 5.71654 4 7.00521V23.3385C4 24.6272 5.19391 25.6719 6.66667 25.6719H25.3333C26.8061 25.6719 28 24.6272 28 23.3385V7.00521C28 5.71654 26.8061 4.67188 25.3333 4.67188Z" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 11.6719H28" stroke="#155DFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 3,
        value: "89",
        label: "Renewals This Month",
        iconBg: "#DCFCE7",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 5.00059C4.9999 4.64868 5.09265 4.30298 5.26888 3.99838C5.44512 3.69379 5.69861 3.44108 6.00375 3.26579C6.30889 3.09049 6.65488 2.99882 7.00679 3.00001C7.3587 3.00121 7.70406 3.09523 8.008 3.27259L20.005 10.2706C20.3078 10.4463 20.5591 10.6983 20.7339 11.0016C20.9088 11.3049 21.0009 11.6487 21.0012 11.9987C21.0015 12.3488 20.91 12.6928 20.7357 12.9963C20.5614 13.2999 20.3105 13.5524 20.008 13.7286L8.008 20.7286C7.70406 20.906 7.3587 21 7.00679 21.0012C6.65488 21.0024 6.30889 20.9107 6.00375 20.7354C5.69861 20.5601 5.44512 20.3074 5.26888 20.0028C5.09265 19.6982 4.9999 19.3525 5 19.0006V5.00059Z" stroke="#00A63E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        id: 4,
        value: "2.3%",
        label: "Churn Rate",
        iconBg: "#FFE2E2",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 9L9 15" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 9L15 15" stroke="#E7000B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
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


export default function SubscriptionPayment() {



    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    const filtered = payments.filter((u) => {
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
                <ListingsTable users={filtered} />



                {/* Footer count */}
                <div className="mt-3 px-1">
                    <p className="text-sm text-[#717182] font-[Poppins]">
                        Showing {filtered.length} of {payments.length} users
                    </p>
                </div>
            </div>
        </div>
    );
}
