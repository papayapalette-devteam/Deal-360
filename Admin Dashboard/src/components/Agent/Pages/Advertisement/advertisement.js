import { useState } from "react";
import AddModal from "./add_modal";
import ConfirmDeleteAdvertisement from "./confirm_delete_advertisement";
import ViewAdvertisement from "./view_advertisement";
import EditModal from "./edit_advertisemt";

const advertisement = [
    {
        title: "Homepage Hero Section",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1",
        section: "Landing Page",
        post_date: "20-01-2026",
        view: "12,543",
        status: "active",
    },
    {
        title: "Homepage Hero Section",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1",
        section: "Landing Page",
        post_date: "20-01-2026",
        view: "12,543",
        status: "active",
    },
    {
        title: "Homepage Hero Section",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1",
        section: "Landing Page",
        post_date: "20-01-2026",
        view: "12,543",
        status: "Draft",
    },
    {
        title: "Homepage Hero Section",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1",
        section: "Landing Page",
        post_date: "20-01-2026",
        view: "12,543",
        status: "Cancel",
    },
    {
        title: "Homepage Hero Section",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1",
        section: "Landing Page",
        post_date: "20-01-2026",
        view: "12,543",
        status: "active",
    },
    {
        title: "Homepage Hero Section",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1",
        section: "Landing Page",
        post_date: "20-01-2026",
        view: "12,543",
        status: "active",
    },
    {
        title: "Homepage Hero Section",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1",
        section: "Landing Page",
        post_date: "20-01-2026",
        view: "12,543",
        status: "Posted",
    },
];



const statusBadge = (status) => {
    const styles = {
        Posted: "bg-[#DCFCE7] text-[#016630]",
        Cancel: "bg-[#FCE7DC] text-[#D02F2D]",
        Draft: "bg-[#FEF9C2] text-[#894B00]",
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

function AdvertisementTable({ users,  setdelete_modal,setview_modal,setedit_modal}) {
    return (
        <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">

                    {/* HEADER */}
                    <thead>
                        <tr className="bg-[rgba(248,131,121,0.10)] whitespace-nowrap">
                            <th className="px-6 py-3 text-left text-base font-medium font-[Poppins] text-[var(--form-text-black)]">
                                Image & Title
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-[var(--form-text-black)]">
                                Section
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-[var(--form-text-black)]">
                                Post Date
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-[var(--form-text-black)]">
                                View
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-[var(--form-text-black)]">
                                Status
                            </th>

                            <th className="px-6 py-3 text-center text-base font-medium font-[Poppins] text-[var(--form-text-black)]">
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
                                    {/* image + title */}
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3 min-w-[200px] text-center">

                                            {/* IMAGE */}
                                            <img
                                                src={user.image || "/placeholder.png"}
                                                alt={user.title}
                                                className="h-12 w-12 rounded-md object-cover shrink-0"
                                            />

                                            {/* TITLE */}
                                            <p className="text-base  text-[var(--gray-text)] truncate pt-3">
                                                {user.title}
                                            </p>
                                        </div>
                                    </td>

                                    {/* section */}
                                    <td className="px-4 py-3 text-center text-base text-[var(--gray-text)] whitespace-nowrap">
                                        {user.section}
                                    </td>

                                    {/* post_date */}
                                    <td className="px-4 py-3 text-center text-base text-[var(--gray-text)] whitespace-nowrap">
                                        {user.post_date}
                                    </td>

                                    {/* view */}
                                    <td className="px-4 py-3 text-center text-base text-[var(--gray-text)] whitespace-nowrap">
                                        {user.view}
                                    </td>

                                    {/* STATUS */}
                                    <td className="px-4 py-3 text-center whitespace-nowrap">
                                        {statusBadge(user.status)}
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center justify-center gap-3">

                                            <button
                                                onClick={() => setedit_modal(true)}
                                                className="hover:opacity-70 transition"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                                    <path d="M10 3.12132H5.8C4.11984 3.12132 3.27976 3.12132 2.63803 3.4483C2.07354 3.73592 1.6146 4.19486 1.32698 4.75935C1 5.40109 1 6.24116 1 7.92132V16.3213C1 18.0015 1 18.8416 1.32698 19.4833C1.6146 20.0478 2.07354 20.5067 2.63803 20.7943C3.27976 21.1213 4.11984 21.1213 5.8 21.1213H14.2C15.8802 21.1213 16.7202 21.1213 17.362 20.7943C17.9265 20.5067 18.3854 20.0478 18.673 19.4833C19 18.8416 19 18.0015 19 16.3213V12.1213M6.99997 15.1213H8.67452C9.1637 15.1213 9.40829 15.1213 9.63846 15.0661C9.84254 15.0171 10.0376 14.9363 10.2166 14.8266C10.4184 14.7029 10.5914 14.53 10.9373 14.1841L20.5 4.62132C21.3284 3.79289 21.3284 2.44975 20.5 1.62132C19.6716 0.792894 18.3284 0.792893 17.5 1.62132L7.93723 11.1841C7.59133 11.53 7.41838 11.7029 7.29469 11.9048C7.18504 12.0837 7.10423 12.2788 7.05523 12.4829C6.99997 12.713 6.99997 12.9576 6.99997 13.4468V15.1213Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>

                                            <button
                                                onClick={() => setview_modal(true)}
                                                className="hover:opacity-70 transition"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M2.06251 12.3474C1.97916 12.1229 1.97916 11.8759 2.06251 11.6514C2.87421 9.68324 4.25202 8.00042 6.02128 6.81628C7.79053 5.63214 9.87155 5 12.0005 5C14.1295 5 16.2105 5.63214 17.9797 6.81628C19.749 8.00042 21.1268 9.68324 21.9385 11.6514C22.0218 11.8759 22.0218 12.1229 21.9385 12.3474C21.1268 14.3155 19.749 15.9983 17.9797 17.1825C16.2105 18.3666 14.1295 18.9988 12.0005 18.9988C9.87155 18.9988 7.79053 18.3666 6.02128 17.1825C4.25202 15.9983 2.87421 14.3155 2.06251 12.3474Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>

                                            <button
                                                onClick={() => setdelete_modal(true)}
                                                className="hover:opacity-70 transition hover:text-red-500"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                            {/* Footer count */}
                <div className="mt-3 px-1">
                    <p className="text-sm text-[#717182] font-[Poppins]">
                        Showing {advertisement.length} of {advertisement.length} users
                    </p>
                </div>
        </div>
    );
}

export default function Advertisement() {

    const [add_modal, setadd_modal] = useState(false);
    const [delete_modal, setdelete_modal] = useState(false)
    const [view_modal, setview_modal] = useState(false)
    const [edit_modal, setedit_modal] = useState(false)


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

<div className="flex items-center justify-end mb-4">
  <button onClick={()=>setadd_modal(true)} className="flex items-center gap-2 px-4 py-3 rounded-lg 
    bg-[var(--form-secondary)] 
    text-[var(--form-text-black)] text-base font-medium 
    leading-[120%] 
    shadow-[inset_0_0_10px_rgba(255,255,255,0.25)]
    hover:opacity-80 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.9974 4.16406V15.8307M4.16406 9.9974H15.8307"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    Add New
  </button>
</div>

                {/* Users Table */}
                               {
                    !add_modal && (
                         <AdvertisementTable users={advertisement}  setdelete_modal={setdelete_modal} 
                         setview_modal={setview_modal} setedit_modal={setedit_modal}
                         />
                    )
                }
               

                {
                    add_modal && (
                        <AddModal onClose={() => setadd_modal(false)} />
                    )
                }

                  {
                    edit_modal && (
                        <EditModal onClose={() => setedit_modal(false)} />
                    )
                }

                {
                    view_modal && (
                        <ViewAdvertisement onClose={() => setview_modal(false)} />
                    )
                }

                {
                    delete_modal && (
                        <ConfirmDeleteAdvertisement onCancel={() => setdelete_modal(false)} />
                    )
                }


            </div>
        </div>
    );
}
