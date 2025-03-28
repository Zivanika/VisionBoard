import type { Metadata } from "next";
import { Poppins, Merienda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/app/context/authContext";
import { StatsProvider } from "@/app/context/tableContext";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "400", "500", "600", "800"],
});

const meriendaFont = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "600", "800"],
});

export const metadata: Metadata = {
  title: "VisionBoard",
  description:
    "A real-time, collaborative dashboard that seamlessly integrates with Google Sheets",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppinsFont.variable} ${meriendaFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <StatsProvider>{children}</StatsProvider>
          </AuthProvider>
          <ToastContainer position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
