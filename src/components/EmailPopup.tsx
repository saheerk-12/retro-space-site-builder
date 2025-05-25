import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  message: z.string()
    .min(1, "Message is required")
    .max(200, "Message must not exceed 200 characters")
});

type EmailFormData = z.infer<typeof formSchema>;

interface EmailPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmailPopup = ({ open, onOpenChange }: EmailPopupProps) => {
  const { toast } = useToast();
  const form = useForm<EmailFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: ""
    }
  });

  const onSubmit = (data: EmailFormData) => {
    const { name, email, message } = data;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:info@retro-space.com?subject=Contact Form Submission from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Message Sent",
      description: "Your email client should now be open to send the message to info@retro-space.com.",
    });
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Send us a message at <strong>info@retro-space.com</strong> and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message* (max 200 characters)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="How can we help you?" 
                      {...field} 
                      maxLength={200}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Mail className="mr-2" />
              Send Message
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPopup;
