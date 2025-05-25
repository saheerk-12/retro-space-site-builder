import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import EmailPopup from "./EmailPopup";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [emailPopupOpen, setEmailPopupOpen] = useState(false);

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
              <img src="/images/logo.jpg" alt="Retro Space Logo" className="h-12 w-auto mr-3" />
              <span className="text-4xl font-bold text-primary">Retro Space</span>
            </Link>
          </div>
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
                  <button onClick={() => setEmailPopupOpen(true)} className={cn(navigationMenuTriggerStyle())}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              <img src="/images/logo.jpg" alt="Retro Space Logo" className="h-20 w-auto mb-4" /> {/* Updated logo size */}
              <h3 className="text-lg font-semibold mb-4">Retro Space</h3>
              <p className="text-sm mb-1">Precision Engineering for Modern Spaces</p> {/* Removed opacity-90 */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/#who-we-are"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('who-we-are');
                    }}
                    className="text-sm hover:opacity-100" /* Removed opacity-90 */
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#our-services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('our-services');
                    }}
                    className="text-sm hover:opacity-100" /* Removed opacity-90 */
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setEmailPopupOpen(true)}
                    className="text-sm hover:opacity-100" /* Removed opacity-90 */
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <address className="not-italic">
                <p className="text-sm mb-1">Al Diyar Building, Sheikh Zayed Road</p> {/* Removed opacity-90 */}
                <p className="text-sm mb-1">Al Wasl, Dubai - UAE</p> {/* Removed opacity-90 */}
                <p className="text-sm mb-1">Emergency: +971 56 629 7487</p> {/* Removed opacity-90 */}
                <p className="text-sm mb-1">Email: info@retro-space.com</p> {/* Removed opacity-90 */}
              </address>
            </div>
          </div>
        </div>
      </footer>
      <EmailPopup open={emailPopupOpen} onOpenChange={setEmailPopupOpen} />
    </div>
  );
};

export default Layout;
