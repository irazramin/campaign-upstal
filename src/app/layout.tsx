import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronRight, faTimes, faUserPen} from "@fortawesome/free-solid-svg-icons";

const poppins = Poppins({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
})
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

library.add(faChevronRight, faTimes, faUserPen)


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
      <div>{children}</div>
      <ToastContainer />
      </body>
    </html>
  )
}
