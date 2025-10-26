import { FileText, Search, Link as LinkIcon, Brain, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const sections = [
  {
    id: "content",
    title: "Content Audit",
    icon: FileText,
    description: "2,006 pages • 93,739 queries analyzed",
    color: "text-primary"
  },
  {
    id: "onpage",
    title: "On-Page SEO",
    icon: Search,
    description: "990 pages • Title, meta & structure review",
    color: "text-info"
  },
  {
    id: "backlinks",
    title: "Backlinks Audit",
    icon: LinkIcon,
    description: "13,216 links • Authority & trust analysis",
    color: "text-accent"
  },
  {
    id: "llms",
    title: "LLMs & AI Visibility",
    icon: Brain,
    description: "AI presence • ChatGPT & Google AI",
    color: "text-warning"
  },
  {
    id: "competitors",
    title: "Competitor Analysis",
    icon: Users,
    description: "5 competitors • Market positioning",
    color: "text-destructive"
  },
];

const TableOfContents = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-3">Audit Overview</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A comprehensive analysis covering content performance, technical SEO, link authority, AI visibility, and competitive positioning
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Card
              key={section.id}
              className="p-6 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 bg-card border-2 border-border hover:border-primary"
              onClick={() => scrollToSection(section.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 ${section.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TableOfContents;
