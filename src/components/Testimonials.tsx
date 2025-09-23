import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      business: "Handmade Jewelry",
      location: "São Paulo, Brazil",
      avatar: "MS",
      rating: 5,
      quote: "I went from struggling to sell my jewelry locally to making $2,000/month online in just 3 months. LinklyHub made it so simple!",
      highlight: "$2,000/month in 3 months"
    },
    {
      name: "Ahmed Hassan",
      business: "Spice Trading",
      location: "Cairo, Egypt", 
      avatar: "AH",
      rating: 5,
      quote: "The WhatsApp integration is a game-changer. My customers love ordering directly through chat, and I've tripled my sales.",
      highlight: "Tripled sales with WhatsApp"
    },
    {
      name: "Priya Sharma",
      business: "Homemade Sweets",
      location: "Mumbai, India",
      avatar: "PS",
      rating: 5,
      quote: "No technical skills needed was true! I had my store running in minutes and got my first order the same day. Amazing!",
      highlight: "First order same day"
    },
    {
      name: "Carlos Rodriguez",
      business: "Artisan Coffee",
      location: "Mexico City, Mexico",
      avatar: "CR",
      rating: 5,
      quote: "The Instagram integration helped me reach so many new customers. From 50 to 500 followers in just 2 months!",
      highlight: "10x follower growth"
    },
    {
      name: "Fatima Al-Zahra",
      business: "Traditional Crafts",
      location: "Marrakech, Morocco",
      avatar: "FZ",
      rating: 5,
      quote: "LinklyHub helped me take my family business online during difficult times. Now we're selling internationally!",
      highlight: "Now selling internationally"
    },
    {
      name: "David Kim",
      business: "Tech Accessories",
      location: "Seoul, South Korea",
      avatar: "DK",
      rating: 5,
      quote: "The payment processing and delivery tracking features saved me countless hours. I can focus on what I love - creating products.",
      highlight: "Saved countless hours"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories from{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Real Entrepreneurs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how micro-business owners around the world are transforming their lives with LinklyHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 border-border hover:shadow-design-lg transition-all duration-300 hover:scale-105 bg-card relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              
              {/* Rating stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Highlight stat */}
              <div className="inline-flex items-center px-3 py-1 bg-gradient-accent rounded-full mb-4">
                <span className="text-xs font-semibold text-white">
                  {testimonial.highlight}
                </span>
              </div>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.business} • {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 shadow-design-md border border-border max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Trusted by Entrepreneurs Worldwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;