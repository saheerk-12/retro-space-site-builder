
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company?: string;
}

const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <CardHeader>
        <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
          <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{quote}</p>
        <CardDescription className="space-y-1">
          <p className="font-semibold text-primary">{author}</p>
          {company && <p className="text-muted-foreground text-sm">{company}</p>}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
