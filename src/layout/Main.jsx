import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="bg-body">
        <div className="flex flex-col max-w-7xl min-h-screen mx-4 md:mx-auto">
            <Header/>
            <section className="flex-1">
                <Outlet/>
            </section>
            <Footer/>
        </div>
    </div>
  )
}

export default MainLayout;