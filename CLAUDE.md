# Portfolio — Claude Context

## Stack
- **React 18 + TypeScript** via Vite (`npm run dev` / `npm run build`)
- **Tailwind CSS v4** for styling
- **motion/react** (Framer Motion v12) for all animations — import as `import { motion, AnimatePresence } from 'motion/react'`
- **Lucide React** for icons
- **Radix UI** primitives wrapped in shadcn-style components (see Shared Components below)
- **pnpm** is the package manager

## Page Structure

`src/app/App.tsx` composes the full page in scroll order:

```
Navigation       — fixed top bar, desktop only (md+)
BottomNav        — fixed bottom bar, mobile only (hidden md+)
LandingSection      — fixed behind scroll (z-0), acts as background
  [h-screen spacer]
main (z-10, scrolls over hero):
  AboutSection
  SkillsSection
  ProjectsSection
  ContactSection
```

## Pages → Data files

Every page pulls all copy and config from a paired data file. Pages contain no hardcoded strings.

| Page | File | Data export |
|------|------|-------------|
| `pages/LandingSection.tsx` | `data/LandingData.tsx` | `landingData` |
| `pages/AboutSection.tsx` | `data/AboutData.tsx` | `aboutData` |
| `pages/SkillsSection.tsx` | `data/SkillsData.tsx` | `skillsData` |
| `pages/ProjectsSection.tsx` | `data/ProjectsData.tsx` | `projectsData` |
| `pages/ContactSection.tsx` | `data/ContactData.tsx` | `contactData` |
| _(global)_ | `data/GlobalData.tsx` | `globalData` (footer text) |

To change any text, image, or list content — edit the data file, not the page.

## Data shapes (quick reference)

**AboutData:** `{ sectionTitle, subheading, bioParagraphs[], traits[], features[] }`
- `features[]` → `{ icon: LucideIcon, title, description }` — powers the About carousel

**SkillsData:** `{ sectionTitle, sectionSubtitle, categories[] }`
- `categories[]` → `{ title, skills[] }` where `skills[]` → `{ name, featured: boolean }`
- `featured: true` highlights a skill badge

**ProjectsData:** two lists — `featuredProjects[]` and `otherProjects[]`
- `FeaturedProject` has `highlights[]` (shown on card); both types share `modalBody1/2`, `modalHighlights[]`, `modalSkills[]` for the detail modal
- `AnyProject = FeaturedProject | OtherProject`; distinguish with `'highlights' in project`

**ContactData:** `{ sectionTitle, formHeading, introText, form{}, contactInfo[] }`
- `contactInfo[]` → `{ icon, label, value, href, actionIcon, copyable? }`

## Carousel animation pattern

Both the About and Projects carousels use the same setup:

```tsx
const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

// Container needs overflow-hidden + relative + fixed min-height
<div className="overflow-hidden flex-1 relative min-h-[Xpx]">
  <AnimatePresence custom={direction}>
    <motion.div
      key={page}
      custom={direction}
      variants={slideVariants}
      initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.85, ease: 'easeInOut' }}
      className="absolute inset-0 ..."   // absolute so enter/exit overlap
    />
  </AnimatePresence>
</div>
```

Current durations: About = `0.65s`, Projects (both carousels) = `0.85s`.

## Shared Components

`src/app/shared/components/` — shadcn-style Radix UI wrappers. All were scaffolded from the Figma export; only a subset is actively used in pages (marked **in use**).

### Currently used in pages
| File | Exports | Notes |
|------|---------|-------|
| `card.tsx` | `Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter` | **in use** — primary content block everywhere |
| `button.tsx` | `Button, buttonVariants` | **in use** — ContactSection |
| `input.tsx` | `Input` | **in use** — ContactSection form |
| `textarea.tsx` | `Textarea` | **in use** — ContactSection form |
| `label.tsx` | `Label` | **in use** — ContactSection form |

### Available but not yet used
| File | Exports |
|------|---------|
| `accordion.tsx` | `Accordion, AccordionItem, AccordionTrigger, AccordionContent` |
| `alert.tsx` | `Alert, AlertTitle, AlertDescription` |
| `alert-dialog.tsx` | `AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, AlertDialogPortal, AlertDialogOverlay` |
| `aspect-ratio.tsx` | `AspectRatio` |
| `avatar.tsx` | `Avatar, AvatarImage, AvatarFallback` |
| `badge.tsx` | `Badge, badgeVariants` |
| `breadcrumb.tsx` | `Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis` |
| `calendar.tsx` | `Calendar` |
| `carousel.tsx` | `Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi` — Embla-based; not the same as the custom motion carousels in pages |
| `chart.tsx` | `ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle, ChartConfig` — Recharts wrapper |
| `checkbox.tsx` | `Checkbox` |
| `collapsible.tsx` | `Collapsible, CollapsibleTrigger, CollapsibleContent` |
| `command.tsx` | `Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator` |
| `context-menu.tsx` | `ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup` |
| `dialog.tsx` | `Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose, DialogPortal, DialogOverlay` |
| `drawer.tsx` | `Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerClose, DrawerPortal, DrawerOverlay` — Vaul-based |
| `dropdown-menu.tsx` | `DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup, DropdownMenuPortal` |
| `form.tsx` | `Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField` — react-hook-form integration |
| `hover-card.tsx` | `HoverCard, HoverCardTrigger, HoverCardContent` |
| `input-otp.tsx` | `InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator` |
| `menubar.tsx` | `Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarGroup, MenubarPortal` |
| `navigation-menu.tsx` | `NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport, navigationMenuTriggerStyle` |
| `pagination.tsx` | `Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis` |
| `popover.tsx` | `Popover, PopoverTrigger, PopoverContent, PopoverAnchor` |
| `progress.tsx` | `Progress` |
| `radio-group.tsx` | `RadioGroup, RadioGroupItem` |
| `resizable.tsx` | `ResizablePanelGroup, ResizablePanel, ResizableHandle` — react-resizable-panels |
| `scroll-area.tsx` | `ScrollArea, ScrollBar` |
| `select.tsx` | `Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton` |
| `separator.tsx` | `Separator` |
| `sheet.tsx` | `Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetClose, SheetPortal, SheetOverlay` — slide-in panel |
| `sidebar.tsx` | `Sidebar, SidebarProvider, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarGroupAction, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuAction, SidebarMenuBadge, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarInput, SidebarInset, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar` |
| `skeleton.tsx` | `Skeleton` — loading placeholder |
| `slider.tsx` | `Slider` |
| `sonner.tsx` | `Toaster` — toast notifications via Sonner |
| `switch.tsx` | `Switch` |
| `table.tsx` | `Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption` |
| `tabs.tsx` | `Tabs, TabsList, TabsTrigger, TabsContent` |
| `toggle.tsx` | `Toggle, toggleVariants` |
| `toggle-group.tsx` | `ToggleGroup, ToggleGroupItem` |
| `tooltip.tsx` | `TooltipProvider, Tooltip, TooltipTrigger, TooltipContent` |

## Conventions
- Dark theme only — root has `className="dark bg-black text-white"`
- Section entry animations use `motion.div` with `whileInView`, `viewport={{ once: true }}`, `transition={{ duration: 0.8 }}`
- Emerald (`emerald-400/500`) is the primary accent color; blue is secondary
- Mobile breakpoint for carousels: `max-width: 639px` (sm) for About, `max-width: 1023px` (lg) for Projects
- Touch swipe threshold is 40px across all carousels
