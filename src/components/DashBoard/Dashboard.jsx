import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SideMenu from "../SideMenu/SideMenu";
import PageContent from "../PageContent/PageContent";
import AppFooter from "../Appfooter/AppFooter";



const Dashboard = () => {
  return (
    <>
      <div className="App">
        <AppHeader></AppHeader>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
        <AppFooter></AppFooter>
      </div>
    </>
  );
};

export default Dashboard;
