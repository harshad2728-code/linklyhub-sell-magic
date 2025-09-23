import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  UserPlus, 
  Upload, 
  Link, 
  Package,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign up in seconds",
      description: "Create your free account with just your email. No complex setup or technical knowledge required.",
      time: "30 seconds"
    },
    {
      step: "02", 
      icon: Upload,
      title: "Upload photos and product details",
      description: "Add your products directly from your phone. Take photos, add descriptions, and set prices easily.",
      time: "2 minutes"
    },
    {
      step: "03",
      icon: Link,
      title: "Link your social media and start selling",
      description: "Connect Instagram, WhatsApp, and Facebook. Share your store link and start receiving orders immediately.",
      time: "1 minute"
    },
    {
      step: "04",
      icon: Package,
      title: "Manage orders and deliveries effortlessly",
      description: "Track orders, communicate with customers, and manage deliveries all from one simple dashboard.",
      time: "Ongoing"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your online business up and running in less than 5 minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center border-border hover:shadow-design-md transition-all duration-300 bg-card">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-design-md">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-design-sm">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-primary-light/20 rounded-full">
                  <span className="text-xs font-medium text-primary">{step.time}</span>
                </div>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 z-10">
                  <ArrowRight className="h-8 w-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-card rounded-2xl p-8 shadow-design-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Average Time to First Sale
            </h3>
            <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              24 Hours
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-success mr-2" />
                <span className="font-semibold text-foreground">Setup Complete</span>
              </div>
              <p className="text-sm text-muted-foreground">In under 5 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-success mr-2" />
                <span className="font-semibold text-foreground">First Order</span>
              </div>
              <p className="text-sm text-muted-foreground">Within 24 hours average</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6 text-success mr-2" />
                <span className="font-semibold text-foreground">Growing Business</span>
              </div>
              <p className="text-sm text-muted-foreground">Scale at your own pace</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="xl">
            Start Your Free Store Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;