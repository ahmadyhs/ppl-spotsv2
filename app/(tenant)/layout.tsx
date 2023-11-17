import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import TopLoadingBar from "../components/TopLoadingBar";

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Toaster />
      {/* <TopLoadingBar /> */}

      <section className="bg-darkblue h-[73px]">
        <Navbar />
      </section>

      {/* <div className="h-24" /> */}
      {children}
    </main>
  );
}
