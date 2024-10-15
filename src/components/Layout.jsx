import React from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header />
      <Navbar /> */}
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
