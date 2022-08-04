import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Header, Navbar, Footer, Sidebar, ThemeSettings } from "./components";
//PAGES IMPORT
import { Ecommerce, Orders, Editor } from "./pages";
import { Stacked, Area, Bar, Pie, Financial, Pyramid, Line } from "./pages";
import { Calender, Employees, Customers, ColorPicker, Kanban } from "./pages";
import { useStateContext } from "./context/ContextProvider";
import "./app.css";

function App() {
  const { isActiveMenu, setisActiveMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <article className="fixed right-4 bottom-4 z-[1000]">
            <TooltipComponent content={"Settings"} position="Top">
              <button
                type="button"
                className="p-3 text-3xl hover:drop-shadow-xl hover:bg-light-gray rounded-[50%] text-white"
                style={{ backgroundColor: "blue" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </article>

          {isActiveMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
          )}

          <article
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              isActiveMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </article>

          <Routes>
            {/* Dashboard */}
            <Route path="/" element={"<Home>"} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            {/* Pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
            {/* Apps */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            {/* Charts */}
            <Route path="/chart-line" element={"line"} />
            <Route path="/chart-area" element={"area"} />
            <Route path="/chart-bar" element={"bar"} />
            <Route path="/chart-pie" element={"pie"} />
            <Route path="/chart-financial" element={"financial"} />
            <Route path="/color-maping" element={"maping"} />
            <Route path="/chart-pyramid" element={"pyramid"} />
            <Route path="/chart-stacked" element={"color-stacked"} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
