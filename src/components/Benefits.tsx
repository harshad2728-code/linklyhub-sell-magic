import { Card } from "@/components/ui/card";
import { 
  Zap, 
  DollarSign, 
  Heart, 
  Shield,
  Clock,
  Rocket
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "No Tech Experience Needed",
      description: "Built for everyday people, not developers. If you can use WhatsApp, you can use LinklyHub.",
      stat: "Zero coding required",
      color: "bg-gradient-to-br from-primary to-primary-dark"
    },
    {
      icon: DollarSign,
      title: "Affordable Plans for Small Sellers",
      description: "Start free, scale affordably. Our pricing grows with your business, not ahead of it.",
      stat: "Free to start",
      color: "bg-gradient-to-br from-accent to-accent-dark"
    },
    {
      icon: Heart,
      title: "Keep Direct Customer Relationships",
      description: "Your customers are yours. No middleman fees or platform restrictions on customer data.",
      stat: "100% your customers",
      color: "bg-gradient-to-br from-success to-success/80"
    },
    {
      icon: Clock,
      title: "Save Hours Every Week",
      description: "Automate order processing, inventory management, and customer communications.",
      stat: "10+ hours saved weekly",
      color: "bg-gradient-to-br from-primary to-primary-light"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security for payments, automatic backups, and 99.9% uptime guarantee.",
      stat: "99.9% uptime",
      color: "bg-gradient-to-br from-accent to-primary"
    },
    {
      icon: Rocket,
      title: "Scale at Your Pace",
      description: "From side hustle to full business. Our tools grow with you, supporting your journey.",
      stat: "Unlimited growth",
      color: "bg-gradient-to-br from-success to-primary"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              LinklyHub?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're built specifically for micro-businesses and solo entrepreneurs who want to succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-border hover:shadow-design-lg transition-all duration-500 hover:scale-105 group"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90"></div>
              
              <div className="relative p-8">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-6 shadow-design-md group-hover:shadow-design-lg transition-shadow duration-300`}>
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {benefit.description}
                </p>
                
                {/* Stat highlight */}
                <div className="inline-flex items-center px-4 py-2 bg-primary-light/10 border border-primary/20 rounded-full">
                  <span className="text-sm font-semibold text-primary">
                    {benefit.stat}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-surface rounded-2xl p-8 shadow-design-lg border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who've already made the switch to smarter, simpler online selling.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Sellers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">$2M+</div>
                <div className="text-sm text-muted-foreground">Sales Generated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;