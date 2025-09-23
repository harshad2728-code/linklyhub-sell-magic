import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light/20 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">🚀 No Technical Skills Needed</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Empower Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Micro-Business
              </span>{" "}
              with LinklyHub
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-dark font-medium mb-8">
              The Easiest Way to Sell Online Without Technical Skills
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Create your own online store in 5 minutes and start selling on Instagram, 
              WhatsApp, and Facebook today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                ✅ Free to start • ✅ No credit card required • ✅ Setup in 5 minutes
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-design-lg">
              <img
                src={heroImage}
                alt="Micro-business owners successfully selling through LinklyHub on mobile and social media"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center shadow-design-accent animate-bounce">
              <span className="text-white font-bold text-xl">$</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-design-glow">
              <span className="text-white font-bold">📱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;