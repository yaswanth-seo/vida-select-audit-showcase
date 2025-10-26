import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp } from "lucide-react";

const CompetitorsAudit = () => {
  return (
    <section id="competitors" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Badge className="mb-4 bg-destructive text-destructive-foreground">Section 5</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Competitor Analysis</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Analyzing high-intent, revenue-driving search queries across 5 major competitors to identify VIDA's unique positioning and growth opportunities.
          </p>
        </div>

        {/* Competitors Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { name: "Tawkify", focus: "App frustration + brand protection", strength: "High-volume emotional traffic", position: "Mass market" },
            { name: "Selective Search", focus: "Location + cost + trust", strength: "Local consultation leads", position: "Traditional luxury" },
            { name: "Kelleher International", focus: "Elite + global + status", strength: "Wealthy, status-driven buyers", position: "Premium global" },
            { name: "Elite Connections", focus: "Elite + wealthy metros", strength: "Affluent geographic presence", position: "Location-led luxury" },
            { name: "VIDA Select", focus: "Cost decisions + breakpoint behavior", strength: "DIY dating exit points", position: "Modern premium" },
          ].map((comp) => (
            <Card key={comp.name} className={`p-6 ${comp.name === "VIDA Select" ? "border-2 border-primary bg-primary/5" : ""}`}>
              <h3 className="font-bold text-lg text-foreground mb-3">{comp.name}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Focus Areas:</p>
                  <p className="text-foreground">{comp.focus}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Core Strength:</p>
                  <p className="text-foreground">{comp.strength}</p>
                </div>
                <Badge variant="outline">{comp.position}</Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* VIDA's Opportunity */}
        <Card className="p-8 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">VIDA's Strategic Advantage</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-3">Current Strengths</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✅ Visible at app monetization decision points (eharmony cost, is tinder gold worth it)</li>
                <li>✅ Captures "I'm done" moments (cancel bumble subscription)</li>
                <li>✅ Touches status/selectivity (millionaire dating sites)</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-3">Key Opportunities</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>🎯 Build competitor comparison pages (Tawkify vs VIDA, Kelleher cost)</li>
                <li>🎯 Create executive/local landing pages by city</li>
                <li>🎯 Add direct matchmaking CTAs to high-intent pages</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-lg font-medium mb-3">The Bottom Line:</p>
            <p className="opacity-90">
              VIDA already attracts users at the exact moment they're most ready to switch to a real matchmaking service. Now we need to formalize that position and claim it as our category: <strong>"Modern, high-standard, screened matchmaking for professionals who are done wasting time on apps."</strong>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CompetitorsAudit;
