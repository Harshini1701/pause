
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  NotebookText,
  Smile,
  Gamepad2,
  Moon,
  Hand,
  Quote,
  Users2,
  Timer,
  ListTodo,
  LifeBuoy,
  Settings
} from "lucide-react"

const items = [
  {
    title: "Thought Journal",
    url: "/journal",
    icon: NotebookText,
  },
  {
    title: "Mood Tracker",
    url: "/mood-tracker",
    icon: Smile,
  },
  {
    title: "Distraction Hub",
    url: "/distraction",
    icon: Gamepad2,
  },
  {
    title: "Meditation & Sleep",
    url: "/meditation",
    icon: Moon,
  },
  {
    title: "Grounding Tool",
    url: "/grounding",
    icon: Hand,
  },
  {
    title: "Affirmations",
    url: "/affirmations",
    icon: Quote,
  },
  {
    title: "Community",
    url: "/community",
    icon: Users2,
  },
  {
    title: "Productivity Tools",
    url: "/productivity",
    icon: Timer,
  },
  {
    title: "Habit Tracker",
    url: "/habits",
    icon: ListTodo,
  },
  {
    title: "Emergency SOS",
    url: "/sos",
    icon: LifeBuoy,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}