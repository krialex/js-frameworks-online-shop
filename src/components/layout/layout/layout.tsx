import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  }