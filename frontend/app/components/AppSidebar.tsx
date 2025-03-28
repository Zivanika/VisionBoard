"use client";

import * as React from "react";
import { LayoutDashboard, Table } from "lucide-react";

import { NavMain } from "@/app/components/NavBar";
import { NavUser } from "@/app/components/User";
import { TeamSwitcher } from "@/app/components/ThemeSwtich";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuth } from "@/app/context/authContext";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Tables",
      url: "/tables",
      icon: Table,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
