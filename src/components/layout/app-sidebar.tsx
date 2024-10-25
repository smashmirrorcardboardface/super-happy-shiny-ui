import { Calendar, Home, Inbox, Search, Settings, TestTube, TestTube2, Building } from 'lucide-react';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Test Page',
    url: 'test',
    icon: TestTube2,
  },
  {
    title: 'Companies',
    url: '#',
    icon: Building,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
];

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '../ui/sidebar';
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="transition group-data-[collapsible=icon]:hidden"> This is a great UI </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge>24</SidebarMenuBadge>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="transition group-data-[collapsible=icon]:hidden">Nothing to see here</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
