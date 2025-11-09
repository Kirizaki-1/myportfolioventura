import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Network Design",
      description: "Designed and simulated a complete enterprise network infrastructure with VLANs, inter-VLAN routing, and redundancy using Cisco Packet Tracer. Implemented security policies and QoS configurations.",
      technologies: ["Cisco IOS", "VLAN", "OSPF", "ACLs", "NAT"],
      github: "#",
      live: "#"
    },
    {
      title: "Network Monitoring System",
      description: "Developed a Python-based network monitoring solution that tracks device status, bandwidth utilization, and generates alerts for network anomalies. Integrated with Grafana for visualization.",
      technologies: ["Python", "SNMP", "Grafana", "InfluxDB"],
      github: "#",
      live: "#"
    },
    {
      title: "VPN Implementation Lab",
      description: "Configured site-to-site and remote access VPN solutions using IPsec and SSL protocols. Documented security best practices and troubleshooting procedures.",
      technologies: ["IPsec", "OpenVPN", "Cisco ASA", "PKI"],
      github: "#",
      live: "#"
    },
    {
      title: "Network Security Audit Tool",
      description: "Created an automated security scanning tool to identify vulnerabilities in network configurations, open ports, and security policy compliance. Generated comprehensive reports.",
      technologies: ["Python", "Nmap", "Security Frameworks"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-lg text-muted-foreground">
              Academic and personal projects showcasing networking expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-card border-border card-glow flex flex-col">
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="secondary" size="sm" className="gap-2 flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
