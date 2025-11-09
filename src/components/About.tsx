import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor's in Information Technology with focus on Network Engineering"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Internship experience in network administration and IT support"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "CCNA certified with focus on routing and switching"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">About <span className="gradient-text">Me</span></h2>
            <p className="text-lg text-muted-foreground">
              I'm a recent IT graduate with a strong foundation in network engineering and infrastructure management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 bg-card border-border card-glow">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              As a fresh graduate specializing in network engineering, I bring a combination of academic excellence 
              and hands-on experience with network protocols, security implementations, and infrastructure design. 
              My passion lies in designing efficient, secure, and scalable network solutions that drive business success.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              During my studies and internships, I've gained practical experience with Cisco routers and switches, 
              network security protocols, troubleshooting complex network issues, and implementing best practices 
              for network administration. I'm eager to apply my knowledge and continue learning in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
