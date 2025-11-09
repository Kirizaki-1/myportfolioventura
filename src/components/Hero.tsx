import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Alex Rivera</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Network Engineer & IT Professional
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh graduate specializing in network infrastructure, security protocols, and IT solutions. 
            Passionate about building robust and scalable network architectures.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-lg bg-secondary hover:bg-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
