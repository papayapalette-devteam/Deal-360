import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Deal 360",
  description: "Real Estate Platform",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className="font-sans">
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} light`}>
      <body className="font-sans bg-theme text-theme transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}