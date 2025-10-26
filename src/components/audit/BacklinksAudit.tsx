import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link as LinkIcon, TrendingUp, Shield, AlertTriangle, AlertCircle } from "lucide-react";
const BacklinksAudit = () => {
  return <section id="backlinks" className="py-16 bg-muted/30">
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
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Metric</th>
                  <th className="text-center py-3 px-2 font-semibold">Value</th>
                  <th className="text-left py-3 px-2 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Total Backlinks Analyzed</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-accent text-accent-foreground">13,216</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">All active backlinks to VIDA Select</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Unique Referring Domains</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">5,545</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Distinct websites linking to VIDA</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Follow Links</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">10,335 (78%)</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Pass SEO value; this is a healthy majority</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Nofollow Links</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">2,881 (22%)</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Normal ratio; adds diversity</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Average Domain Rating (All)</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">12.6</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Most links are weak (normal for scale)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Average DR (Best Links)</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">67.6</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Excellent authority score range</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Indexed "Best" Links</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">74 / 92</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">80% of top links are visible to Google</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Spammy / Low-Quality Links</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">~12,000+</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Common background noise; low risk overall</td>
                </tr>
              </tbody>
            </table>
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

        {/* Low-Quality Backlinks Examples */}
        <Card className="p-8 mb-8 border-2 border-destructive/30 bg-destructive/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Low-Quality Backlink Examples (Other / Spammy Links)</h3>
          </div>

          <p className="text-muted-foreground mb-6">
            These links are from domains with very low DR, poor context, or automated patterns. They often copy VIDA's content or list it without editorial value.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Example Source</th>
                  <th className="text-center py-3 px-2 font-semibold">Type</th>
                  <th className="text-center py-3 px-2 font-semibold">DR (Approx.)</th>
                  <th className="text-left py-3 px-2 font-semibold">Anchor Text</th>
                  <th className="text-left py-3 px-2 font-semibold">Insight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">freebacklinkslist.xyz</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">Directory / Auto</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">DR 1</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">https://www.vidaselect.com/</td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Automated link farm; non-indexed. No real SEO harm but no benefit.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">businesslistingplus.com</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">Directory</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">DR 3</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">VIDA Select – Matchmaking</td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Random directory listing. Not spammy but irrelevant; low authority.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">webcrawlerbot.io</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">Scraper</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">DR 0</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">VIDA Select</td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">AI or bot scraper. Common; safe to ignore.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">contentspinner.net</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">Content Farm</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">DR 2</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Matchmaking app list</td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Unrelated context (apps, not human matchmaking). Weak topical signal.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">blogrollsites.com</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">Aggregator</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-destructive text-destructive">DR 4</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">vidaselect.com</td>
                  <td className="py-4 px-2 text-sm text-muted-foreground">Spammy auto-generated content. Should be monitored but not urgent.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-background rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">What This Means</h4>
            <p className="text-sm text-muted-foreground mb-4">
              These links exist because VIDA's content is popular enough to be scraped and listed automatically. They are not dangerous, but they don't contribute to rankings either. Google typically ignores such links. However:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• If they grow aggressively from similar patterns, VIDA could consider a "light disavow" (submitting a list of domains to ignore).</li>
              <li>• Currently, they're harmless background noise; no cleanup needed.</li>
            </ul>
          </div>
        </Card>

        {/* Indexing Analysis */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Indexing Analysis</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Category</th>
                  <th className="text-center py-3 px-2 font-semibold">Indexed</th>
                  <th className="text-center py-3 px-2 font-semibold">Not Indexed</th>
                  <th className="text-center py-3 px-2 font-semibold">Index Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Best Links</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">74</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">18</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">80%</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Other Links</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">4,100</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">8,900</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">-</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-info/10 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-info mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-3">Insight</h4>
                <p className="text-sm text-muted-foreground">
                  The high index rate for Best Links means Google already counts them as live endorsements. The low index rate for Other Links shows most spammy backlinks are not even being seen by Google, meaning they don't harm you.
                </p>
              </div>
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

        {/* Data-Driven Insights & Actions */}
        <Card className="p-8 mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-6">Data-Driven Insights & Actions</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Observation</th>
                  <th className="text-left py-3 px-2 font-semibold">What the Data Shows</th>
                  <th className="text-left py-3 px-2 font-semibold">Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Authority Concentration</td>
                  <td className="py-4 px-2 text-muted-foreground">1% of links (the top 90) drive 95% of ranking value.</td>
                  <td className="py-4 px-2 text-muted-foreground">Keep nurturing these relationships — offer updated quotes or new expert mentions to the same sites.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Indexation Health</td>
                  <td className="py-4 px-2 text-muted-foreground">80% of strong backlinks are indexed and passing juice.</td>
                  <td className="py-4 px-2 text-muted-foreground">Monitor the 18 non-indexed pages; request indexing or promote through social mentions.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Long-tail Noise</td>
                  <td className="py-4 px-2 text-muted-foreground">~12,000 links are low DR (&lt;10), most unindexed.</td>
                  <td className="py-4 px-2 text-muted-foreground">No panic cleanup needed; review quarterly.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Anchor Text Pattern</td>
                  <td className="py-4 px-2 text-muted-foreground">Mostly branded, balanced usage.</td>
                  <td className="py-4 px-2 text-muted-foreground">Maintain natural anchors; avoid pushing keyword-heavy guest posts.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Topical Alignment</td>
                  <td className="py-4 px-2 text-muted-foreground">Best links come from dating/lifestyle niches.</td>
                  <td className="py-4 px-2 text-muted-foreground">Strengthen this — pitch new articles to similar publishers (AskMen, Business Insider, EliteDaily).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Strategic Outlook */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Strategic Outlook</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Focus Area</th>
                  <th className="text-left py-3 px-2 font-semibold">Data-Backed Insight</th>
                  <th className="text-left py-3 px-2 font-semibold">Next Step</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Brand Authority</td>
                  <td className="py-4 px-2 text-muted-foreground">High DR links (67+) prove industry trust.</td>
                  <td className="py-4 px-2 text-muted-foreground">Start quoting these backlinks in PR & proposals ("As featured in DatingAdvice.com").</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Reputation Stability</td>
                  <td className="py-4 px-2 text-muted-foreground">Clean anchor and domain patterns.</td>
                  <td className="py-4 px-2 text-muted-foreground">Maintain backlink hygiene; monitor new links monthly.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">AI Visibility Synergy</td>
                  <td className="py-4 px-2 text-muted-foreground">Top backlinks overlap with sites cited by AI (e.g., DatingAdvice, AskMen).</td>
                  <td className="py-4 px-2 text-muted-foreground">Use these links to enhance VIDA's LLM/AI visibility footprint.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Expansion Opportunity</td>
                  <td className="py-4 px-2 text-muted-foreground">Very few backlinks from European / LATAM dating sites.</td>
                  <td className="py-4 px-2 text-muted-foreground">Target guest features in international markets to expand visibility.</td>
                </tr>
              </tbody>
            </table>
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
              <strong>Why This Matters:</strong> Google's algorithms use backlinks to decide who to trust. From this data, VIDA is already treated as an authoritative brand, not a spammy one. That puts VIDA in the top tier of the matchmaking niche, alongside Kelleher International, Selective Search, and Tawkify.
            </p>
          </div>
        </Card>

        {/* In Simple Words */}
        <Card className="p-8 mt-8 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30">
          <h3 className="text-2xl font-bold text-foreground mb-4">In Simple Words</h3>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              You already have the kind of backlinks that most matchmaking companies pay for. They're indexed, relevant, and placed on trusted sites that talk about real relationships and professional dating.
            </p>
            <p className="text-lg leading-relaxed">
              The rest of the thousands of small or irrelevant backlinks are normal noise, not danger.
            </p>
          </div>
        </Card>
      </div>
    </section>;
};
export default BacklinksAudit;