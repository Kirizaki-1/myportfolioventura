import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Raymond Ryan Ventura Jr. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:raymondventura22@gmail.com"
               className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
