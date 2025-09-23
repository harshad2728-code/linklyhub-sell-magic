import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Share2, 
  CreditCard, 
  TrendingUp, 
  Store, 
  Users 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Instant Storefront",
      description: "Upload product photos from your phone, no website needed. Get your store online in minutes.",
      color: "text-primary"
    },
    {
      icon: Share2,
      title: "Social Media Integration",
      description: "Sell directly via Instagram, WhatsApp, and Facebook Shops. Reach customers where they are.",
      color: "text-accent"
    },
    {
      icon: CreditCard,
      title: "Secure Payments & Logistics",
      description: "Trusted payment gateways and delivery partners included. Focus on selling, we handle the rest.",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "Growth Tools",
      description: "One-click ads, referral programs, and sales tracking made simple. Grow your business easily.",
      color: "text-primary"
    },
    {
      icon: Store,
      title: "Marketplace Exposure",
      description: "Optional listing on the LinklyHub marketplace for more customers. Expand your reach instantly.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Keep direct relationships with your customers. Build loyalty and repeat business effortlessly.",
      color: "text-success"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Succeed Online
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed specifically for micro-businesses and solo entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover:shadow-design-md transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-surface flex items-center justify-center mb-6 shadow-design-sm`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Join thousands of successful micro-entrepreneurs
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              10,000+ Active Stores
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              $2M+ Sales Generated
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              50+ Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;