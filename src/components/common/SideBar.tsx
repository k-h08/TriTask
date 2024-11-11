import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface SideBarProps {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerToggle: () => void,
}

interface menuItem {
    text: string,
    path: string,
    icon: React.ComponentType,    
}

const SideBar = ({drawerWidth,mobileOpen,handleDrawerToggle}:SideBarProps) => {
    
    const MenuItems:menuItem[] = [
        {text: "Tasks", path: "/", icon: CheckBoxIcon},
        {text: "Calendar", path: "/calendar", icon: CalendarMonthIcon},
        {text: "Report", path: "/report", icon: EqualizerIcon},
    ]
    
    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            {MenuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      ); 
  return (
          <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* モバイル用 */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
  
          {/* PC用 */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
  )
}

export default SideBar