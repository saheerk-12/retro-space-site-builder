
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
    <Card className="group bg-gradient-to-br from-gray-800 to-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          onError={(e) => {
            console.error(`Failed to load image: ${image}`);
            e.currentTarget.src = "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=800";
          }}
        />
      </div>
      <CardHeader className="relative z-20 -mt-16">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
