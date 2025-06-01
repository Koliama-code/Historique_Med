"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { User2, ChevronUp } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  sidebarItemsReception,
  sidebarItemsDoctor,
  sidebarItemsAdmin,
} from "@/app/Data/DataDashboard/DataDashboard";

import { usePathname } from "next/navigation";
import { Menu } from "@/app/Types/Menu";

export function AppSidebar() {
  const pathname = usePathname();

  // Détection du rôle à partir de l’URL
  let sidebarItems: Menu[];

  if (pathname.startsWith("/Dashboard_admin")) {
    sidebarItems = sidebarItemsAdmin;
  } else if (pathname.startsWith("/Dashboard_doctor")) {
    sidebarItems = sidebarItemsDoctor;
  } else if (pathname.startsWith("/Dashboard_reception")) {
    sidebarItems = sidebarItemsReception;
  } else {
    sidebarItems = []; // Par défaut, ou affiche un fallback
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="text-align:center">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-12 mt-4 text-bold text-3xl">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-[20px] mb-4 ">
                    <a href={item.url}>
                      <item.icon className="w-8 h-8" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
