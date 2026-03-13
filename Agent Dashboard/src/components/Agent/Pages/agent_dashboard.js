import { Link, useNavigate } from "react-router-dom";
import { Home, TrendingUp, RefreshCcw, Search } from "lucide-react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

 const stats = [
        {
            title: "Active Listings",
            value: "24",
            subtitle: "+3 from last month",
            icon: Home,
            color: "text-emerald-400",
        },
        {
            title: "Leads Received",
            value: "128",
            subtitle: "+12% this week",
            icon: TrendingUp,
            color: "text-emerald-400",
        },
        {
            title: "Buyer Requirements",
            value: "43",
            subtitle: "43 used this month",
            icon: RefreshCcw,
            color: "text-red-400",
        },
        {
            title: "Listing Intent",
            value: "15",
            subtitle: "56 this week",
            icon: Search,
            color: "text-emerald-400",
        },
    ];

       const listingData = [
        { month: "Jan", listings: 240, leads: 40 },
        { month: "Feb", listings: 380, leads: 55 },
        { month: "Mar", listings: 450, leads: 70 },
        { month: "Apr", listings: 520, leads: 78 },
        { month: "May", listings: 610, leads: 92 },
        { month: "Jun", listings: 730, leads: 110 },
    ];

    const leadActivity = [
        { day: "Mon", leads: 12 },
        { day: "Tue", leads: 18 },
        { day: "Wed", leads: 15 },
        { day: "Thu", leads: 22 },
        { day: "Fri", leads: 28 },
        { day: "Sat", leads: 20 },
        { day: "Sun", leads: 14 },
    ];






export default function AdminDashboard() {

  
const navigate =useNavigate()

  return (
    <div className="space-y-6">

{/* verification */}
      <div className="w-full bg-[#fff7ed] border border-[#ffd6a7]  p-6  items-center justify-between rounded-sm">

        <div className="">
          <div className=" flex items-start gap-4 ">


            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-red-400 text-red-500">
              <span className="text-sm font-semibold">!</span>
            </div>


            <div>
              <h2  className="font-sans font-semibold text-2xl leading-[120%] tracking-normal">
                Account Verification Required
              </h2>
              <p className="font-poppins font-normal text-[16px] leading-[120%] tracking-normal text-[var(--text-grey,#6C757D)]">
                Complete verification to unlock full platform access and build trust with clients.
              </p>
            </div>
          </div>

        </div>
        <div className="pl-0 sm:pl-7 pt-4 sm:pt-0">
          <button
          onClick={(()=>navigate("verification"))}
            style={{ border: "2px solid #F88379" }}
            className="flex items-center gap-2 
               px-3 py-3 
               rounded-lg 
               bg-[#FFD1CD]
               hover:opacity-90 
               transition"
          >
            Complete Verification
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="#343A40" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>

      </div>

{/* states */}
<button onClick={(()=>navigate("add-new-listing"))}
  className="flex items-center justify-center 
             px-[15px] pr-[15.594px] py-[10px] 
             mt-4
             rounded-lg 
             bg-[#7FFFD4]"
>
  + Add New Listing
</button>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-3">
  {stats.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="
          flex flex-col items-start gap-6
          rounded-[14px]
          border border-black/10
          bg-white
          p-6
        "
      >
        {/* Title + Icon */}
        <div className="flex items-start justify-between w-full">
          <p className="text-[#717182] font-manrope text-base font-normal leading-[20px]">
            {item.title}
          </p>

          <Icon className={`w-5 h-5 shrink-0 ${item.color}`} />
        </div>

        {/* Value */}
        <h2 className="text-[#F88379] font-manrope text-[30px] font-bold leading-[36px]">
          {item.value}
        </h2>

        {/* Subtitle */}
        <p className="text-[#717182] font-arimo text-xs font-normal leading-[16px]">
          {item.subtitle}
        </p>
      </div>
    );
  })}
</div>

{/* chart */}

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full !pt-6">

            {/* Listing Performance */}
            <div className="bg-white rounded-[14px] border border-gray-200 !p-6 shadow-sm">
                <h2 className="text-lg text-[#0A0A0A] font-semibold text-gray-800 !mb-1 font-manrope">
                    Listing Performance
                </h2>

                <p className="text-sm text-[#717182] !mb-6 font-manrope">
                    Listings and leads over last 6 months
                </p>

                <div className="h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={listingData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" style={{color:"#9CA3AF"}} />
                            <YAxis style={{color:"#9CA3AF"}}/>
                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="listings"
                                stroke="#5EEAD4"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />

                            <Line
                                type="monotone"
                                dataKey="leads"
                                stroke="#F87171"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Lead Activity */}
            <div className="bg-white rounded-[14px] border border-gray-200 !p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 !mb-1">
                    Lead Activity
                </h2>

                <p className="text-sm text-gray-500 !mb-6">
                    Daily lead generation this week
                </p>

                <div className="h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={leadActivity}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" style={{color:"#9CA3AF"}}/>
                            <YAxis style={{color:"#9CA3AF"}}/>
                            <Tooltip />

                            <Bar
                                dataKey="leads"
                                fill="#F87171"
                                radius={[6, 6, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* performance summary */}

        <div className="w-full max-w-[522px] 
                flex flex-col 
                p-2 
                gap-2
                rounded-2xl 
                bg-white 
                shadow-[0_0_10px_rgba(0,0,0,0.15)] font-sans">

  <h2 className="text-xl font-semibold">
    Performance Summary
  </h2>

  {/* Row */}
  <div className="flex items-center justify-between">
    <div className="flex gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.9823 2.76278C12.631 2.48953 12.4553 2.3529 12.2613 2.30038C12.0902 2.25404 11.9098 2.25404 11.7387 2.30038C11.5447 2.3529 11.369 2.48953 11.0177 2.76278L4.23539 8.0379C3.78202 8.39052 3.55534 8.56683 3.39203 8.78764C3.24737 8.98322 3.1396 9.20356 3.07403 9.43783C3 9.7023 3 9.98948 3 10.5638V17.7988C3 18.9189 3 19.4789 3.21799 19.9067C3.40973 20.2831 3.71569 20.589 4.09202 20.7808C4.51984 20.9988 5.0799 20.9988 6.2 20.9988H8.2C8.48003 20.9988 8.62004 20.9988 8.727 20.9443C8.82108 20.8963 8.89757 20.8198 8.9455 20.7258C9 20.6188 9 20.4788 9 20.1988V13.5988C9 13.0387 9 12.7587 9.10899 12.5448C9.20487 12.3566 9.35785 12.2036 9.54601 12.1078C9.75992 11.9988 10.0399 11.9988 10.6 11.9988H13.4C13.9601 11.9988 14.2401 11.9988 14.454 12.1078C14.6422 12.2036 14.7951 12.3566 14.891 12.5448C15 12.7587 15 13.0387 15 13.5988V20.1988C15 20.4788 15 20.6188 15.0545 20.7258C15.1024 20.8198 15.1789 20.8963 15.273 20.9443C15.38 20.9988 15.52 20.9988 15.8 20.9988H17.8C18.9201 20.9988 19.4802 20.9988 19.908 20.7808C20.2843 20.589 20.5903 20.2831 20.782 19.9067C21 19.4789 21 18.9189 21 17.7988V10.5638C21 9.98948 21 9.7023 20.926 9.43783C20.8604 9.20356 20.7526 8.98322 20.608 8.78764C20.4447 8.56683 20.218 8.39052 19.7646 8.03791L12.9823 2.76278Z" fill="#7FFFD4"/>
</svg>
    <span className="text-md text-[#717182]">
      Listings
    </span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-[16px] font-medium text-[#4B4B4B]">
        6 / 10
      </span>

      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill="#F88379"
        />
      </svg>
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex items-center justify-between">
<div className="flex gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z" fill="#7FFFD4"/>
  <path d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z" fill="#292D32"/>
</svg>
    <span className="text-sm text-[#717182]">
      Viewings
    </span>
</div>
    <div className="flex items-center gap-2">
      <span className="text-[16px] font-medium text-[#4B4B4B]">
        14 / 20
      </span>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill="#F88379"
        />
      </svg>
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex items-center justify-between">
<div className="flex gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.5289 10.8728L20.0089 9.35281C19.7489 9.09281 19.5389 8.58281 19.5389 8.22281V6.06281C19.5389 5.18281 18.8189 4.46281 17.9389 4.46281H15.7889C15.4289 4.46281 14.9189 4.25281 14.6589 3.99281L13.1389 2.47281C12.5189 1.85281 11.4989 1.85281 10.8789 2.47281L9.33891 3.99281C9.08891 4.25281 8.57891 4.46281 8.20891 4.46281H6.05891C5.17891 4.46281 4.45891 5.18281 4.45891 6.06281V8.21281C4.45891 8.57281 4.24891 9.08281 3.98891 9.34281L2.46891 10.8628C1.84891 11.4828 1.84891 12.5028 2.46891 13.1228L3.98891 14.6428C4.24891 14.9028 4.45891 15.4128 4.45891 15.7728V17.9228C4.45891 18.8028 5.17891 19.5228 6.05891 19.5228H8.20891C8.56891 19.5228 9.07891 19.7328 9.33891 19.9928L10.8589 21.5128C11.4789 22.1328 12.4989 22.1328 13.1189 21.5128L14.6389 19.9928C14.8989 19.7328 15.4089 19.5228 15.7689 19.5228H17.9189C18.7989 19.5228 19.5189 18.8028 19.5189 17.9228V15.7728C19.5189 15.4128 19.7289 14.9028 19.9889 14.6428L21.5089 13.1228C22.1589 12.5128 22.1589 11.4928 21.5289 10.8728ZM7.99891 9.00281C7.99891 8.45281 8.44891 8.00281 8.99891 8.00281C9.54891 8.00281 9.99891 8.45281 9.99891 9.00281C9.99891 9.55281 9.55891 10.0028 8.99891 10.0028C8.44891 10.0028 7.99891 9.55281 7.99891 9.00281ZM9.52891 15.5328C9.37891 15.6828 9.18891 15.7528 8.99891 15.7528C8.80891 15.7528 8.61891 15.6828 8.46891 15.5328C8.17891 15.2428 8.17891 14.7628 8.46891 14.4728L14.4689 8.47281C14.7589 8.18281 15.2389 8.18281 15.5289 8.47281C15.8189 8.76281 15.8189 9.24281 15.5289 9.53281L9.52891 15.5328ZM14.9989 16.0028C14.4389 16.0028 13.9889 15.5528 13.9889 15.0028C13.9889 14.4528 14.4389 14.0028 14.9889 14.0028C15.5389 14.0028 15.9889 14.4528 15.9889 15.0028C15.9889 15.5528 15.5489 16.0028 14.9989 16.0028Z" fill="#7FFFD4"/>
</svg>
    <span className="text-sm text-[#717182]">
      Deals
    </span>
</div>
    <div className="flex items-center gap-2">
      <span className="text-[16px] font-medium text-[#4B4B4B]">
        1 / 2
      </span>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
          fill="#F88379"
        />
      </svg>
    </div>
  </div>

</div>

    </div>
  );
}
