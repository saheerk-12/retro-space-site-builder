import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  <Link to="/#who-we-are" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('who-we-are');
                  }} className={cn(navigationMenuTriggerStyle())}>
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/#our-services" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('our-services');
                  }} className={cn(navigationMenuTriggerStyle())}>
                    Services
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/#testimonials" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('testimonials');
                  }} className={cn(navigationMenuTriggerStyle())}>
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
