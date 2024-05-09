import React from "react";
import "./Dashboard.scss";
import Sidebar from "../../components/SideBar/SideBar";
import Widget from "../../components/widgets/Widgets";
import Featured from "../../components/Featured/featured";
import Charts from "../../components/Charts/charts";
import Table from "../../components/Table/Table";
import TopBar from "../../components/TopBar/TopBar";
const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <TopBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts title="Last 6 Months (Revenue)" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
        <div className="table">
          <div className="tableData">
            <Table/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
