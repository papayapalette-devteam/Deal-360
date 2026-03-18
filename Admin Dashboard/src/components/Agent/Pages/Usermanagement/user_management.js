import { useState } from "react";
import UserDetailsModal from "./user_details_modal";
import ConfirmSuspensionModal from "./confirm_suspension_modal";

const USERS = [
  {
    id: "U-8392",
    name: "John Martinez",
    email: "john.m@email.com",
    role: "seller",
    status: "active",
    listings: 12,
    subscription: "Premium",
  },
  {
    id: "U-8393",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    role: "Buyer",
    status: "suspended",
    listings: 2,
    subscription: "Premium",
  },
  {
    id: "U-8394",
    name: "Michael Chen",
    email: "m.chen@email.com",
    role: "seller",
    status: "active",
    listings: 26,
    subscription: "Enterprise",
  },
  {
    id: "U-8395",
    name: "Emily Rodriguez",
    email: "e.rod@email.com",
    role: "Agent",
    status: "pending",
    listings: 3,
    subscription: "Basic",
  },
  {
    id: "U-8396",
    name: "David Kim",
    email: "david.k@email.com",
    role: "Agent",
    status: "active",
    listings: 11,
    subscription: "Free",
  },
  {
    id: "U-8397",
    name: "Lisa Thompson",
    email: "lisa.t@email.com",
    role: "Buyer",
    status: "active",
    listings: 5,
    subscription: "Basic",
  },
  {
    id: "U-8398",
    name: "James Wilson",
    email: "j.wilson@email.com",
    role: "seller",
    status: "pending",
    listings: 18,
    subscription: "Premium",
  },
];

const roleBadge = (role) => (
  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#DBEAFE] text-[#193CB8] text-xs font-medium font-[Poppins] whitespace-nowrap">
    {role}
  </span>
);

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

const ThreeDotsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9974 10.8385C10.4576 10.8385 10.8307 10.4654 10.8307 10.0052C10.8307 9.54497 10.4576 9.17188 9.9974 9.17188C9.53716 9.17188 9.16406 9.54497 9.16406 10.0052C9.16406 10.4654 9.53716 10.8385 9.9974 10.8385Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.9974 4.99479C10.4576 4.99479 10.8307 4.6217 10.8307 4.16146C10.8307 3.70122 10.4576 3.32812 9.9974 3.32812C9.53716 3.32812 9.16406 3.70122 9.16406 4.16146C9.16406 4.6217 9.53716 4.99479 9.9974 4.99479Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.9974 16.6667C10.4576 16.6667 10.8307 16.2936 10.8307 15.8333C10.8307 15.3731 10.4576 15 9.9974 15C9.53716 15 9.16406 15.3731 9.16406 15.8333C9.16406 16.2936 9.53716 16.6667 9.9974 16.6667Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

function UsersTable({ users, setuser_details }) {
  return (
    <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-[rgba(248,131,121,0.10)]">
              <th className="text-left px-6 py-3 text-base font-medium font-[Poppins] text-black rounded-tl-[12px] whitespace-nowrap">
                User ID
              </th>
              <th className="text-center px-6 py-3 text-base font-medium font-[Poppins] text-black whitespace-nowrap">
                Name
              </th>
              <th className="text-center px-6 py-3 text-base font-medium font-[Poppins] text-black whitespace-nowrap">
                Email
              </th>
              <th className="text-center px-6 py-3 text-base font-medium font-[Poppins] text-black whitespace-nowrap">
                Role
              </th>
              <th className="text-center px-6 py-3 text-base font-medium font-[Poppins] text-black whitespace-nowrap">
                Status
              </th>
              <th className="text-center px-6 py-3 text-base font-medium font-[Poppins] text-black whitespace-nowrap">
                Listings
              </th>
              <th className="text-center px-6 py-3 text-base font-medium font-[Poppins] text-black whitespace-nowrap">
                Subscription
              </th>
              <th className="text-center px-6 py-3 text-base font-medium font-[Poppins] text-black rounded-tr-[12px] whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-[#717182] font-[Poppins] text-sm">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user, i) => (
                <tr key={`${user.id}-${i}`} className="border-b border-[#E6E7E6] last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-[18px]">
                    <span onClick={() => setuser_details(true)} className="cursor-pointer text-sm font-medium font-[Poppins] text-black">
                      {user.id}
                    </span>
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    <span className="text-base font-normal font-[Poppins] text-[var(--secondary-text)] truncate max-w-[180px] block">
                      {user.name}
                    </span>
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    <span className="text-base font-normal font-[Poppins] text-[var(--secondary-text)]">
                      {user.email}
                    </span>
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    {roleBadge(user.role)}
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    {statusBadge(user.status)}
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    <span className="text-base font-normal font-[Poppins] text-[var(--secondary-text)]">
                      {user.listings}
                    </span>
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    <span className="text-base font-normal font-[Poppins] text-[var(--secondary-text)]">
                      {user.subscription}
                    </span>
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors mx-auto">
                      <ThreeDotsIcon />
                    </button>
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

export default function Usermanagement() {

  const [user_details, setuser_details] = useState(false);
  const [suspend_user, setsuspend_user] = useState(false)

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const filtered = USERS.filter((u) => {
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
        <UsersTable users={filtered} setuser_details={setuser_details} />

        {
          user_details && (
            <UserDetailsModal onClose={() => setuser_details(false)} setsuspend_user={setsuspend_user} />
          )
        }


        {
          suspend_user && (
            <ConfirmSuspensionModal onCancel={() => setsuspend_user(false)} />
          )
        }

        {/* Footer count */}
        <div className="mt-3 px-1">
          <p className="text-sm text-[#717182] font-[Poppins]">
            Showing {filtered.length} of {USERS.length} users
          </p>
        </div>
      </div>
    </div>
  );
}
