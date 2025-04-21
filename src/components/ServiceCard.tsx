
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  image: string;
}

const ServiceCard = ({ title, description, icon: Icon, link, image }: ServiceCardProps) => {
  return (
    <Card className="relative overflow-hidden transition-all duration-500 hover:shadow-2xl bg-white dark:bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            console.error(`Failed to load image: ${image}`);
            e.currentTarget.src = "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=800";
          }}
        />
      </div>
      <CardHeader className="relative space-y-4">
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link 
          to={link}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
        >
          Learn more →
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
