
import { Menu } from '@/app/Types/Menu'
import { Calendar, Home, Inbox, Search, Settings, Stethoscope,
  ClipboardList,

  FileText,
  LogOut,
  Bell,
  History as LucideHistory,
  User,
  History, } from "lucide-react";

export const sidebarItemsReception: Menu[] =  [
  {
    title: "Home",
    url: "/Dashboard_reception/Accueil",
    icon: Home,
  },
  {
    title: "Diagnostic",
    url: "/Dashboard_reception/Formulaire",
    icon: ClipboardList,
  },
  {
    title: "Historique",
    url: "/Dashboard_reception/Historique",
    icon: History,
  },
  {
    title: "Prescription",
    url: "/Dashboard_reception/Prescription",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const sidebarItemsDoctor: Menu[] =  [
  {
    title: "Home",
    url: "/Dashboard_doctor/Accueil",
    icon: Home,
  },

  {
    title: "Mes Rendez-vous",
    url: "/Dashboard_doctor/Rdv",
    icon: Calendar,
  },
  {
    title: "Historique",
    url: "/Dashboard_doctor/Historique",
    icon: History,
  },
  {
    title: "Prescription",
    url: "/Dashboard_doctor/Prescription",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const sidebarItemsAdmin: Menu[] =  [
  {
    title: "Home",
    url: "/Dashboard_admin",
    icon: Home,
  },
  {
    title: "Gestion Docteur",
    url: "/Dashboard_admin/Gestion_doctor",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/Dashboard_reception/Formulaire",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];