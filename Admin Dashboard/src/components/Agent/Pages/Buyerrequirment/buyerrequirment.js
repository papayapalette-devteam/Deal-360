import { useState } from "react";


const Buyer = [
    {
        requirement_id: "BR-4821",
        buyer: "John Martinez",
        property_type: "Residential - Single Family",
        budget_range: "AED800,000 - AED1,200,000",
        location: "Dubai marina",
        status: "Approved",
        submitted: "01-07-2026",
    },
    {
        requirement_id: "BR-4821",
        buyer: "John Martinez",
        property_type: "Residential - Single Family",
        budget_range: "AED800,000 - AED1,200,000",
        location: "Dubai marina",
        status: "Approved",
        submitted: "01-07-2026",
    },
    {
        requirement_id: "BR-4821",
        buyer: "John Martinez",
        property_type: "Residential - Single Family",
        budget_range: "AED800,000 - AED1,200,000",
        location: "Dubai marina",
        status: "pending",
        submitted: "01-07-2026",
    },
    {
        requirement_id: "BR-4821",
        buyer: "John Martinez",
        property_type: "Residential - Single Family",
        budget_range: "AED800,000 - AED1,200,000",
        location: "Dubai marina",
        status: "Approved",
        submitted: "01-07-2026",
    },
    {
        requirement_id: "BR-4821",
        buyer: "John Martinez",
        property_type: "Residential - Single Family",
        budget_range: "AED800,000 - AED1,200,000",
        location: "Dubai marina",
        status: "pending",
        submitted: "01-07-2026",
    },
    {
        requirement_id: "BR-4821",
        buyer: "John Martinez",
        property_type: "Residential - Single Family",
        budget_range: "AED800,000 - AED1,200,000",
        location: "Dubai marina",
        status: "Approved",
        submitted: "01-07-2026",
    },
    {
        requirement_id: "BR-4821",
        buyer: "John Martinez",
        property_type: "Residential - Single Family",
        budget_range: "AED800,000 - AED1,200,000",
        location: "Dubai marina",
        status: "Approved",
        submitted: "01-07-2026",
    },
];



const statusBadge = (status) => {
    const styles = {
        Approved: "bg-[#DCFCE7] text-[#016630]",
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

const categoryBadge = (cat) => {
    const styles = {
        Residential: "bg-[#DBEAFE] text-[#193CB8]",
        Commercial: "bg-[#DBEAFE] text-[#193CB8]",
        Industrial: "bg-[#DBEAFE] text-[#193CB8]",
        Land: "bg-[#DBEAFE] text-[#193CB8]",
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
                                Requirement ID
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Buyer
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Property Type
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Budget Range
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Location
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Status
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                                Submitted
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
                                    {/* requirment id */}
                                    <td className="px-6 py-3 text-[var(--form-text-black)] font-medium">
                                        {user.requirement_id}
                                    </td>

                                    {/* buyer */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.buyer}
                                    </td>

                                    {/* property type */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.property_type}
                                    </td>

                                    {/* budget range */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.budget_range}
                                    </td>

                                    {/* location */}
                                    <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                                        {user.location}
                                    </td>

                          
                                    {/* STATUS */}
                                    <td className="px-6 py-3 text-center">
                                        {statusBadge(user.status)}
                                    </td>

                                    {/* submitted */}
                                    <td className="px-6 py-3 text-center">
                                        {user.submitted}
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

export default function BuyerRequirment() {



    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    const filtered = Buyer.filter((u) => {
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
                <ListingsTable users={filtered} />



                {/* Footer count */}
                <div className="mt-3 px-1">
                    <p className="text-sm text-[#717182] font-[Poppins]">
                        Showing {filtered.length} of {Buyer.length} users
                    </p>
                </div>
            </div>
        </div>
    );
}
