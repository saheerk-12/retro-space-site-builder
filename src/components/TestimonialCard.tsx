
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
}

const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-4">
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.96.41-3.016.341-1.167.809-2.15 1.404-2.95.554-.73 1.2-1.272 1.937-1.618.738-.344 1.409-.52 2.01-.52.478 0 .833.114 1.058.343.224.228.339.526.339.895 0 .342-.044.633-.128.875-.336 1.09-.962 2.103-1.877 3.05-.914.943-1.857 1.696-2.833 2.258h-.021c.574.21 1.025.56 1.357 1.075.332.514.495 1.066.495 1.664z" />
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium mb-6 text-white italic">{quote}</p>
        <CardDescription>
          <p className="text-blue-400 font-semibold">{author}</p>
          {company && <p className="text-gray-400">{company}</p>}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
