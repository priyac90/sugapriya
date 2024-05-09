import { useState } from "react";
import { ProSidebar, Menu, MenuItem, useProSidebar,SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "../../assets/images/dashboard.png";
import SalesIcon from "../../assets/images/sales.png";
import PurchaseIcon from "../../assets/images/purchase.png";
import InventoryIcon from "../../assets/images/inventory.png";
import ReportIcon from "../../assets/images/report.png";
import "./SideBar.css";

const Item = ({ title, to, icon, selected, setSelected , subMenuItems }) => {
  const theme = useTheme();
 const colors = tokens(theme.palette.mode);
  const hasSubmenus = subMenuItems && subMenuItems.length > 0;
  return (
    <MenuItem
    active={selected === title}
    style={{
      color: colors.grey[100],
    }}
    onClick={() => setSelected(title)}
    icon={icon}
  >
    <Typography>{title}</Typography>
    <Link to={to} />
    {/* Render submenus if present */}
    { hasSubmenus &&  (
       <SubMenuComponent subMenuItems={subMenuItems} setSelected={setSelected} />
    )}
  </MenuItem>
);
}; 
const SubMenuComponent = ({ subMenuItems, setSelected }) => {
  return (
    <SubMenu title={title}>
      {subMenuItems.map((subMenuItem, index) => (
        <MenuItem key={index} onClick={() => setSelected(subMenuItem.title)}>
          {subMenuItem.title}
          <Link to={subMenuItem.to} />
        </MenuItem>
      ))}
    </SubMenu>
  );
};




const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
// Define submenu items for sales.
const salesSubMenuItems = [
  { title: "New sales quote", to: "/submenu1" },
  { title: "New sales order", to: "/submenu2" },
  { title: "Sales order list", to: "/submenu2" },
  { title: "New customer", to: "/submenu2" },
  { title: "Customer list", to: "/submenu2" }
];
// Define submenu items for Purchase.
const purchasingSubMenuItems = [
  { title: "New purchase quote", to: "/submenu1" },
  { title: "New purchase order", to: "/submenu2" },
  { title: "Purchase order list", to: "/submenu2" },
  { title: "New vendor", to: "/submenu2" },
  { title: "Vendor list", to: "/submenu2" }
];
// Define submenu items for Inventory.
const inventorySubMenuItems = [
  { title: "New product", to: "/submenu1" },
  { title: "Product list", to: "/ProductList" },
  { title: "Reorder stock", to: "/submenu2" },
  { title: "New stock transfer", to: "/submenu2" },
  { title: "Stock transfer list", to: "/submenu2" },
  { title: "New stock adjustment", to: "/submenu2" },
  { title: "Stock adjustment list", to: "/submenu2" },
  { title: "Stock count list", to: "/submenu2" },
  { title: "New manufacture order", to: "/submenu2" },
  { title: "Manufacture order list", to: "/submenu2" },
  { title: "Stock transfer list", to: "/submenu2" }
];
  return (
    <Box className = 'sidebar'
    sx={{
      "& .pro-sidebar-inner": {
        backgroundColor: '#36b8f5 !important',
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-inner-item": {
        color: "#f0f8ff !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}
  >
    <ProSidebar collapsed={isCollapsed} style={{ height: "100vh", display: "flex" , position:"absolute"}}>
    <Menu iconShape="square">
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  color="#f0f8ff"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                 Sugapriya
                </Typography>
                <Typography variant="h6" color="#f0f8ff">
                 Admin
                </Typography>
              </Box>
            </Box>
          <Box>
            <Item
              title="HomePage"
              to="/"
              icon={<img className="icons" src={HomeIcon} alt="Purchasing Icon" />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu title="Sales"  icon={<img className="icons" src={SalesIcon} alt="Purchasing Icon" />} >
            {salesSubMenuItems.map((subMenuItem, index) => (
              <MenuItem key={index} onClick={() => setSelected(subMenuItem.title)}>
                {subMenuItem.title}
                <Link to={subMenuItem.to} />
              </MenuItem>
            ))}
          </SubMenu>
          <SubMenu title="Purchasing"  icon={<img className="icons" src={PurchaseIcon} alt="Purchasing Icon" />} >
            {purchasingSubMenuItems.map((subMenuItem, index) => (
              <MenuItem key={index} onClick={() => setSelected(subMenuItem.title)}>
                {subMenuItem.title}
                <Link to={subMenuItem.to} />
              </MenuItem>
            ))}
          </SubMenu>
          <SubMenu title="Inventory"  icon={<img className="icons" src={InventoryIcon} alt="Purchasing Icon" />} >
            {inventorySubMenuItems.map((subMenuItem, index) => (
              <MenuItem key={index} onClick={() => setSelected(subMenuItem.title)}>
                {subMenuItem.title}
                <Link to={subMenuItem.to} />
              </MenuItem>
            ))}
          </SubMenu>
          <Item
              title="Reports"
              to="/"
              icon={<img className="icons" src={ReportIcon} alt="Purchasing Icon" />} 
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;