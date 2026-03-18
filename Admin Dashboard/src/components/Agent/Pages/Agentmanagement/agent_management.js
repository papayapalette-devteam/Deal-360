import { useState } from "react";
import UserDetailsModal from "./confirm_delete_agent";
import ConfirmSuspensionModal from "./view_agent_details";
import ViewagentDetails from "./view_agent_details";
import ConfirmDeleteAgent from "./confirm_delete_agent";

const Agents = [
  {
    name: "John Martinez",
    email: "john.m@email.com",
    brokerage:"Barnes International Realty-Dubai",
    ORN: "2982398246",
    KYC_method:"UAE Pass",
    status: "active",
    listings: 12,
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    brokerage:"Barnes International Realty-Dubai",
    ORN: "2982398246",
    KYC_method:"UAE Pass",
    status: "suspended",
    listings: 2,
    subscription: "Premium",
  },
  {
    name: "Michael Chen",
    email: "m.chen@email.com",
    brokerage:"Barnes International Realty-Dubai",
    ORN: "2982398246",
    KYC_method:"UAE Pass",
    status: "active",
    listings: 26,
  },
  {
    name: "Emily Rodriguez",
    email: "e.rod@email.com",
    brokerage:"Barnes International Realty-Dubai",
    ORN: "2982398246",
    KYC_method:"Manual ID",
    status: "pending",
    listings: 3,
  },
  {
    name: "David Kim",
    email: "david.k@email.com",
    brokerage:"Barnes International Realty-Dubai",
    ORN: "2982398246",
    KYC_method:"UAE Pass",
    status: "active",
    listings: 11,
  },
  {
    name: "Lisa Thompson",
    email: "lisa.t@email.com",
    brokerage:"Barnes International Realty-Dubai",
    ORN: "2982398246",
    KYC_method:"Manual ID",
    status: "active",
    listings: 5,
  },
  {
    name: "James Wilson",
    email: "j.wilson@email.com",
    brokerage:"Barnes International Realty-Dubai",
    ORN: "2982398246",
    KYC_method:"UAE Pass",
    status: "pending",
    listings: 18,
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

function AgentTable({ users, setagent_details ,setdelete_agent}) {
  return (
    <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          
          {/* HEADER */}
          <thead>
            <tr className="bg-[rgba(248,131,121,0.10)] whitespace-nowrap">
              <th className="px-6 py-3 text-left text-base font-medium font-[Poppins] text-black">
                Name
              </th>

              <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                Brokerage
              </th>

              <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                ORN
              </th>

              <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                KYC Method
              </th>

              <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                Listings
              </th>

              <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                Status
              </th>

              <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-black">
                Actions
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
                  {/* NAME + EMAIL */}
                  <td className="px-6 py-3">
                    <div
                      className="cursor-pointer"
                    >
                      <p className="text-sm font-medium text-[var(--brand-dark)]">
                        {user.name}
                      </p>
                      <p className="text-xs text-[var(--brand-grey)]">
                        {user.email}
                      </p>
                    </div>
                  </td>

                  {/* BROKERAGE */}
                  <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                    {user.brokerage}
                  </td>

                  {/* ORN */}
                  <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                    {user.ORN}
                  </td>

                  {/* KYC */}
                  <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                    {user.KYC_method}
                  </td>

                  {/* LISTINGS */}
                  <td className="px-6 py-3 text-center text-sm text-[var(--secondary-text1)]">
                    {user.listings}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-3 text-center">
                    {statusBadge(user.status)}
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-3">
                    <div className="flex items-center justify-center gap-4">

                      {/* VIEW */}
                      <button
                        onClick={() => setagent_details(true)}
                        className="hover:opacity-70 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M2.06251 12.3474C1.97916 12.1229 1.97916 11.8759 2.06251 11.6514C2.87421 9.68324 4.25202 8.00042 6.02128 6.81628C7.79053 5.63214 9.87155 5 12.0005 5C14.1295 5 16.2105 5.63214 17.9797 6.81628C19.749 8.00042 21.1268 9.68324 21.9385 11.6514C22.0218 11.8759 22.0218 12.1229 21.9385 12.3474C21.1268 14.3155 19.749 15.9983 17.9797 17.1825C16.2105 18.3666 14.1295 18.9988 12.0005 18.9988C9.87155 18.9988 7.79053 18.3666 6.02128 17.1825C4.25202 15.9983 2.87421 14.3155 2.06251 12.3474Z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      {/* DELETE */}
                      <button onClick={() => setdelete_agent(true)}
                      className="hover:opacity-70 transition hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M10 11V17" stroke="#181818" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M14 11V17" stroke="#181818" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6" stroke="#181818" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M3 6H21" stroke="#181818" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#181818" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
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

export default function Agentmanagement() {

  const [agent_details, setagent_details] = useState(false);
  const [delete_agent, setdelete_agent] = useState(false)

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const filtered = Agents.filter((u) => {
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
        <AgentTable users={filtered} setagent_details={setagent_details} setdelete_agent={setdelete_agent}/>

        {
          agent_details && (
            <ViewagentDetails onClose={() => setagent_details(false)} />
          )
        }


        {
          delete_agent && (
            <ConfirmDeleteAgent onCancel={() => setdelete_agent(false)} />
          )
        }

        {/* Footer count */}
        <div className="mt-3 px-1">
          <p className="text-sm text-[#717182] font-[Poppins]">
            Showing {filtered.length} of {Agents.length} users
          </p>
        </div>
      </div>
    </div>
  );
}
