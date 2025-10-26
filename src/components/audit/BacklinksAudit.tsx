import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link as LinkIcon, TrendingUp, Shield, AlertTriangle } from "lucide-react";

const BacklinksAudit = () => {
  return (
    <section id="backlinks" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">Section 3</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Backlinks Audit</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Analyzing 13,216 backlinks from 5,545 unique domains to understand VIDA's online reputation, authority, and link quality.
          </p>
        </div>

        {/* Summary Statistics */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">Summary Statistics</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Total Backlinks</p>
              <p className="text-3xl font-bold text-foreground">13,216</p>
              <p className="text-xs text-muted-foreground mt-1">All active links</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Referring Domains</p>
              <p className="text-3xl font-bold text-foreground">5,545</p>
              <p className="text-xs text-muted-foreground mt-1">Unique websites</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Follow Links</p>
              <p className="text-3xl font-bold text-success">78%</p>
              <p className="text-xs text-muted-foreground mt-1">Pass SEO value</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Best Links DR</p>
              <p className="text-3xl font-bold text-accent">67.6</p>
              <p className="text-xs text-muted-foreground mt-1">Excellent authority</p>
            </div>
          </div>
        </Card>

        {/* Key Insights */}
        <Card className="p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Key Insights</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-success/10 rounded-lg">
                <Shield className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Strong Authority Links</p>
                  <p className="text-sm text-muted-foreground">VIDA has backlinks from trusted websites that Google values highly</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-success/10 rounded-lg">
                <Shield className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">80% Indexation Rate</p>
                  <p className="text-sm text-muted-foreground">Google recognizes and counts top-tier link mentions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-success/10 rounded-lg">
                <Shield className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Natural Anchors</p>
                  <p className="text-sm text-muted-foreground">Brand anchors are consistent with no spam or over-optimization</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-info/10 rounded-lg">
                <LinkIcon className="w-5 h-5 text-info mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Background Noise</p>
                  <p className="text-sm text-muted-foreground">~12K low-quality links are normal for brands at this visibility level</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-info/10 rounded-lg">
                <LinkIcon className="w-5 h-5 text-info mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">No Toxic Spam</p>
                  <p className="text-sm text-muted-foreground">No signs of toxic link spam that could cause penalties</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-info/10 rounded-lg">
                <LinkIcon className="w-5 h-5 text-info mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Healthy Profile</p>
                  <p className="text-sm text-muted-foreground">Authoritative link profile with strong marketing potential</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* High-Quality Backlinks */}
        <Card className="p-8 mb-8 border-2 border-success/30 bg-success/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">High-Quality Backlink Examples</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Source</th>
                  <th className="text-center py-3 px-2 font-semibold">DR</th>
                  <th className="text-left py-3 px-2 font-semibold">Anchor Text</th>
                  <th className="text-center py-3 px-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">DatingAdvice.com</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">DR 85</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">VIDA Select</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-success text-success">Indexed</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">BusinessNewsDaily.com</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">DR 88</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Professional matchmaking service</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-success text-success">Indexed</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">AskMen.com</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">DR 84</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">VIDA Select</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-success text-success">Indexed</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">AuthorityHacker.com</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">DR 80</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Elite matchmaker VIDA Select</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-success text-success">Indexed</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Medium.com</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">DR 94</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">VIDA Select profile writing experts</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">Pending</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-background rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">What This Means</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Google Trust</p>
                <p className="text-sm text-muted-foreground">DR 70+ means "trusted source" - passes strong authority</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Topical Relevance</p>
                <p className="text-sm text-muted-foreground">All links about dating, matchmaking, or relationships</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Brand Perception</p>
                <p className="text-sm text-muted-foreground">VIDA appears with luxury matchmaking brands</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-accent/10 rounded-lg">
              <p className="text-sm font-medium text-accent">
                Data-backed insight: Out of ~13K backlinks, only ~1% (around 100) are responsible for almost all the authority VIDA gets. These 100 are your real ranking assets.
              </p>
            </div>
          </div>
        </Card>

        {/* Anchor Text Distribution */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Anchor Text Distribution</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Branded Anchors</h4>
                  <Badge className="bg-success text-success-foreground">~60%</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Example: "VIDA Select"</p>
                <p className="text-xs text-muted-foreground">✅ Healthy - builds brand authority safely</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Naked URLs</h4>
                  <Badge className="bg-info text-info-foreground">~25%</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Example: "https://www.vidaselect.com/"</p>
                <p className="text-xs text-muted-foreground">✅ Normal for organic mentions</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Generic Phrases</h4>
                  <Badge variant="outline">~10%</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Example: "this website", "click here"</p>
                <p className="text-xs text-muted-foreground">⚪ Irrelevant but harmless</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Keyword-Based</h4>
                  <Badge className="bg-accent text-accent-foreground">~5%</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Example: "matchmaking services"</p>
                <p className="text-xs text-muted-foreground">✅ Good diversity without risk</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-success/10 rounded-xl">
            <p className="font-semibold text-foreground mb-2">Clean Signal</p>
            <p className="text-sm text-muted-foreground">
              Anchor text is one of the cleanest signals in VIDA's entire link profile. No keyword stuffing or manipulative behavior. Google will interpret this pattern as natural, trusted, and brand-driven.
            </p>
          </div>
        </Card>

        {/* Strategy Recommendations */}
        <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-6">Data-Driven Action Plan</h3>
          
          <div className="space-y-4">
            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Authority Concentration</h4>
                  <p className="text-sm text-muted-foreground mb-3">1% of links (top 90) drive 95% of ranking value</p>
                  <Badge variant="outline" className="border-primary text-primary">Keep nurturing these relationships</Badge>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Indexation Health</h4>
                  <p className="text-sm text-muted-foreground mb-3">80% of strong backlinks are indexed and passing authority</p>
                  <Badge variant="outline" className="border-success text-success">Monitor 18 non-indexed pages</Badge>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Topical Alignment</h4>
                  <p className="text-sm text-muted-foreground mb-3">Best links from dating/lifestyle niches</p>
                  <Badge variant="outline" className="border-accent text-accent">Pitch similar publishers</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Overall Interpretation */}
        <Card className="p-8 mt-8 bg-gradient-primary text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Overall Interpretation</h3>
          
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm mb-6">
            <p className="text-lg font-medium mb-3">Google's View of VIDA Select:</p>
            <p className="text-lg italic opacity-90">
              "A credible matchmaking brand for professionals that earns mentions from trusted media outlets, with a clean and natural link pattern."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">✅ What's Strong</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Exceptional high-quality backlinks (DR 67+)</li>
                <li>• Majority are indexed and trusted by Google</li>
                <li>• Natural anchor pattern</li>
                <li>• No manipulative linking behavior</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">⚠️ What to Focus On</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Leverage mentions in PR and outreach</li>
                <li>• Build more contextual, editorial links</li>
                <li>• Request indexing for unindexed links</li>
                <li>• Monitor quarterly for spam surges</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-xl">
            <p className="text-sm opacity-90">
              <strong>In Simple Words:</strong> You already have the kind of backlinks that most matchmaking companies pay for. They're indexed, relevant, and placed on trusted sites that talk about real relationships and professional dating. The thousands of small or irrelevant backlinks are normal noise, not danger.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BacklinksAudit;
