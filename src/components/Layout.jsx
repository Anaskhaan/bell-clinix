import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mt-14 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
