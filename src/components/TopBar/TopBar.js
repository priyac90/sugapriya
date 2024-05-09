import React from 'react'
import { useState, useContext } from "react";
import {Box, IconButton, AppBar, Toolbar, Typography, useTheme } from "@mui/material"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InputBase from "@mui/material/InputBase";
import "./TopBar.css";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from '../SideBar/SideBar';

const TopBar = () => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  
  return (

    <Box sx={{ flexGrow: 1,}}>
    <AppBar position="static" >
      <Toolbar sx={{backgroundColor:'#39befc !important'}}>
        <IconButton onClick={handleMenuClick}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuOutlinedIcon >
         
          </MenuOutlinedIcon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Products
        </Typography>
       {/*ICONS*/ }
<Box display = "flex">
<IconButton>
  <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
</IconButton>
<IconButton>
  <SettingsOutlinedIcon></SettingsOutlinedIcon>
</IconButton>
<IconButton>
  <PersonOutlinedIcon></PersonOutlinedIcon>
</IconButton>
</Box>
      </Toolbar>
    </AppBar>
    {/* second row with search, filter and new product button*/ }
   
   {isSidebarOpen && <Sidebar />} {/* Render sidebar conditionally */}
   </Box>
  )
}

export default TopBar