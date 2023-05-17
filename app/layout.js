import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Navbar",
  description: "This is a navbar component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
