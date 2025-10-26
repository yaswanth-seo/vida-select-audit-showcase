import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from "lucide-react";

const ContentAudit = () => {
  return (
    <section id="content" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">Section 1</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Content Audit</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Analyzing 12 months of performance data across 2,006 pages and 93,739 search queries to identify what's driving results and what needs improvement.
          </p>
        </div>

        {/* Overall Performance */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">Overall Performance at a Glance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Total Pages</p>
              <p className="text-3xl font-bold text-foreground">2,006</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Search Queries</p>
              <p className="text-3xl font-bold text-foreground">93,739</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Average CTR</p>
              <p className="text-3xl font-bold text-warning">0.34%</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <p className="text-sm text-muted-foreground mb-1">Avg Position</p>
              <p className="text-3xl font-bold text-foreground">18.9</p>
              <p className="text-xs text-muted-foreground mt-1">Mostly page 2</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-background rounded-lg">
            <p className="text-sm text-foreground">
              <strong>Key Insight:</strong> VIDA Select shows up over 3 million times annually on Google, but only receives ~10,000 clicks. This indicates strong visibility but a mismatch between page content and user search intent.
            </p>
          </div>
        </Card>

        {/* Brand vs Non-Brand */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 border-2 border-success/20 bg-success/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Brand Searches</h4>
                <Badge variant="outline" className="mt-1 border-success text-success">5.3% CTR</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Users searching for "vida select" or "vida matchmaking" already know and trust the brand.
            </p>
            <ul className="text-sm space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>High trust and click intent</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span>Strong conversion potential</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-warning/20 bg-warning/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-warning" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Non-Brand Searches</h4>
                <Badge variant="outline" className="mt-1 border-warning text-warning">0.3% CTR</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Generic searches like "elite matchmaking services" or "dating apps for professionals".
            </p>
            <ul className="text-sm space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                <span>Low brand awareness</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                <span>Need stronger value proposition</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* What's Working Well */}
        <Card className="p-8 mb-8 border-2 border-success/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">What's Working Well</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg text-foreground">1. Elite & Luxury Dating Content</h4>
                <Badge className="bg-success text-success-foreground">3x Better</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pages focused on high-end dating, exclusivity, and premium matchmaking perform 3x better than site average.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Why It Works</p>
                  <ul className="text-sm space-y-1">
                    <li>• Message matches audience intent</li>
                    <li>• Personalized expert content</li>
                    <li>• Lower niche competition</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Example Keywords</p>
                  <ul className="text-sm space-y-1">
                    <li>• "Elite matchmaking"</li>
                    <li>• "Millionaire dating sites"</li>
                    <li>• "Luxury dating services"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg text-foreground">2. Profile Creation Guides</h4>
                <Badge className="bg-success text-success-foreground">High Engagement</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Practical "how-to" guides for improving dating profiles attract users serious about their dating life.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">/short-dating-profile-examples/</span>
                  <span className="text-sm font-bold text-success">59,225 clicks</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">/dating-profile-examples-for-men/</span>
                  <span className="text-sm font-bold text-success">23,293 clicks</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg text-foreground">3. Comparison & Premium Features</h4>
                <Badge className="bg-info text-info-foreground">Decision Stage</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pages comparing paid dating app versions attract users in the research and decision phase.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">/tinder-plus-vs-tinder-gold/</span>
                  <span className="text-sm font-bold text-info">16,000 clicks</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">/hinge-plus-vs-hingex/</span>
                  <span className="text-sm font-bold text-info">14,000 clicks</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* What's Not Working */}
        <Card className="p-8 mb-8 border-2 border-destructive/30 bg-destructive/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">What's Not Working</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 border-l-4 border-destructive">
              <h4 className="font-semibold text-lg text-foreground mb-3">A. Login Pages from Other Brands</h4>
              <Badge variant="destructive" className="mb-4">Critical Issue</Badge>
              
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Page</th>
                      <th className="text-right py-2 font-medium">Clicks</th>
                      <th className="text-right py-2 font-medium">Impressions</th>
                      <th className="text-right py-2 font-medium">CTR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">/pof-login-page/</td>
                      <td className="text-right py-2">62</td>
                      <td className="text-right py-2">189,806</td>
                      <td className="text-right py-2 text-destructive font-medium">0.03%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">/eharmony-login/</td>
                      <td className="text-right py-2">61</td>
                      <td className="text-right py-2">102,400</td>
                      <td className="text-right py-2 text-destructive font-medium">0.06%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">/match-com-login/</td>
                      <td className="text-right py-2">0</td>
                      <td className="text-right py-2">1,685</td>
                      <td className="text-right py-2 text-destructive font-medium">0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-destructive/10 rounded-lg p-4 space-y-2">
                <p className="font-medium text-sm text-foreground">Why This Hurts:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• High bounce rates lower Google's trust in the entire site</li>
                  <li>• No business value - wrong audience entirely</li>
                  <li>• Dilutes premium brand perception</li>
                  <li>• Can appear as attempt to copy other brands</li>
                </ul>
                <p className="text-sm font-medium text-destructive mt-3">
                  Recommendation: Remove or redirect to relevant content like "POF Review" or "Dating Apps for Professionals"
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-warning">
              <h4 className="font-semibold text-lg text-foreground mb-3">B. Generic "How-To" Articles</h4>
              <Badge variant="outline" className="mb-4 border-warning text-warning">Needs Improvement</Badge>
              
              <p className="text-sm text-muted-foreground mb-3">
                Some older guides are too general or lengthy for modern readers who expect quick, visual answers.
              </p>
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="text-sm font-medium text-foreground mb-2">Solution:</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Convert to list formats with clear examples</li>
                  <li>• Add more visuals and infographics</li>
                  <li>• Break long articles into digestible sections</li>
                  <li>• Include quick takeaway summaries</li>
                </ul>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-warning">
              <h4 className="font-semibold text-lg text-foreground mb-3">C. Sugar Dating Topics</h4>
              <Badge variant="outline" className="mb-4 border-warning text-warning">Low Priority</Badge>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Current Performance:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Average position: Page 4</li>
                    <li>• CTR: 0.16%</li>
                    <li>• Low engagement</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Why It Doesn't Fit:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Different audience intent</li>
                    <li>• Not aligned with premium positioning</li>
                    <li>• Dilutes brand focus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Missing Opportunities */}
        <Card className="p-8 border-2 border-info/30 bg-info/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-info" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Missing Opportunities</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">LGBTQ+ Dating Content</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Very few pages despite huge demand. Perfect match for VIDA's premium and safe dating approach.
              </p>
              <Badge variant="outline" className="border-info text-info">High Potential</Badge>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Professional & Executive Dating</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Ideal for VIDA's target customer (busy, successful professionals) but needs more focused content.
              </p>
              <Badge variant="outline" className="border-info text-info">Perfect Fit</Badge>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Location-Based Pages</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Local searches like "matchmaking in NYC" have low competition and strong purchase intent.
              </p>
              <Badge variant="outline" className="border-info text-info">Quick Wins</Badge>
            </div>
          </div>
        </Card>

        {/* Key Category Summary */}
        <Card className="p-8 mt-8 bg-gradient-to-br from-muted/50 to-background">
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Category Performance Summary</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Category</th>
                  <th className="text-center py-3 px-2 font-semibold">Avg CTR</th>
                  <th className="text-left py-3 px-2 font-semibold">Insight</th>
                  <th className="text-center py-3 px-2 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Elite / Luxury Dating</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">0.92%</Badge>
                  </td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Best fit for VIDA's services</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-success text-success">Continue Building</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Profile Optimization</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">0.72%</Badge>
                  </td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Great engagement</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-success text-success">Expand Variations</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Premium Features</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">0.50-0.70%</Badge>
                  </td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Strong conversion potential</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-info text-info">Keep Growing</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">How-To Guides</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">0.22%</Badge>
                  </td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Needs redesign or simplification</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">Redesign</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Login Pages</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="destructive">0.04%</Badge>
                  </td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">No value, hurts rankings</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="destructive">Remove</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Big Picture Takeaways */}
        <Card className="p-8 mt-8 bg-gradient-primary text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6">Big Picture Takeaways</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Strong Brand Recognition</p>
                  <p className="text-sm opacity-90">People who know VIDA trust it and click it.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Best Content Proves Success</p>
                  <p className="text-sm opacity-90">Premium, niche, expert-led articles already work well.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Discoverability Challenge</p>
                  <p className="text-sm opacity-90">New prospects who don't know VIDA aren't finding you enough.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Pages Holding You Back</p>
                  <p className="text-sm opacity-90">Login pages waste visibility and lower overall site score.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <p className="text-lg font-medium mb-2">The Path Forward</p>
            <p className="text-sm opacity-90">
              Remove problematic pages and focus on high-performing content types. This will grow organic reach without needing massive content expansion or increased advertising spend.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContentAudit;
