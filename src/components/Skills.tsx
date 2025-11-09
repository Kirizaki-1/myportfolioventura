import { Card } from "@/components/ui/card";
import { Network, Shield, Server, Code, Cloud, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Network,
      title: "Network Protocols",
      skills: ["TCP/IP", "DNS", "DHCP", "VLANs", "Routing (RIP, OSPF, BGP)", "Switching"]
    },
    {
      icon: Shield,
      title: "Security",
      skills: ["Firewall Configuration", "VPN", "ACLs", "Network Security", "IDS/IPS", "Security Auditing"]
    },
    {
      icon: Server,
      title: "Infrastructure",
      skills: ["Cisco Routers & Switches", "Windows Server", "Linux Administration", "Active Directory", "Network Topology Design"]
    },
    {
      icon: Cloud,
      title: "Cloud & Virtualization",
      skills: ["Azure Fundamentals", "AWS Basics", "VMware", "Hyper-V", "Cloud Networking"]
    },
    {
      icon: Code,
      title: "Scripting & Tools",
      skills: ["Python", "PowerShell", "Bash", "Wireshark", "Packet Tracer", "GNS3"]
    },
    {
      icon: Settings,
      title: "IT Support",
      skills: ["Troubleshooting", "Help Desk", "Documentation", "System Monitoring", "Performance Tuning"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Technical <span className="gradient-text">Skills</span></h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive skill set in network engineering and IT infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card border-border card-glow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
