import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Retro Space</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mb-4 md:mb-0 md:hidden">Precision Engineering for Modern Spaces</p>
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(navigationMenuTriggerStyle())}>
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={cn(navigationMenuTriggerStyle())}>
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/hvac" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">HVAC Systems</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Installation, maintenance, and repair</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/electromechanical" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Electromechanical Works</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Equipment installation and maintenance</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/plumbing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Plumbing & Electrical</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Sanitary works and electrical contracting</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/building" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Building Finishing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Tiling, carpentry, and more</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/testimonials" className={cn(navigationMenuTriggerStyle())}>
                    Testimonials
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={cn(navigationMenuTriggerStyle())}>
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="hidden md:block text-sm text-muted-foreground">Precision Engineering for Modern Spaces</div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Retro Space</h3>
              <p className="text-sm opacity-90">Precision Engineering for Modern Spaces</p>
              <p className="mt-4 text-sm opacity-80">© {new Date().getFullYear()} Retro Space</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100">About Us</Link></li>
                <li><Link to="/services" className="text-sm opacity-90 hover:opacity-100">Our Services</Link></li>
                <li><Link to="/contact" className="text-sm opacity-90 hover:opacity-100">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <address className="not-italic">
                <p className="text-sm opacity-90 mb-1">Al Diyar Building, Sheikh Zayed Road</p>
                <p className="text-sm opacity-90 mb-1">Al Wasl, Dubai - UAE</p>
                <p className="text-sm opacity-90 mb-1">Mobile: +971 56 629 7487</p>
                <p className="mt-2 text-sm font-semibold">Emergency: +971 56 629 7487</p>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
