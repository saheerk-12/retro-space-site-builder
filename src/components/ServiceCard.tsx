
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
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
