import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Search } from "lucide-react";
const OnPageAudit = () => {
  return <section id="onpage" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Badge className="mb-4 bg-info text-info-foreground">Section 2</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">On-Page SEO Audit</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Reviewing 990 live pages to ensure clear communication with both Google and readers through optimized titles, descriptions, headings, images, and internal linking.
          </p>
        </div>

        {/* Page Elements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-info/10 to-info/5 border-2 border-info/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-info/20 flex items-center justify-center">
                <Search className="w-5 h-5 text-info" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Page Titles</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Most titles clear, 45-50 characters</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Some lack emotional appeal</p>
              </div>
              <div className="mt-4 p-3 bg-background rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Example Improvement:</p>
                <p className="text-xs line-through text-muted-foreground mb-1">❌ "Top Austin Matchmakers For 2025"</p>
                <p className="text-xs text-success font-medium">✅ "Top Austin Matchmakers in 2025 - Find the Perfect Partner Faster"</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-info/10 to-info/5 border-2 border-info/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-info/20 flex items-center justify-center">
                <Search className="w-5 h-5 text-info" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Meta Descriptions</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">20% missing or too short</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Average 104 chars (ideal: 140-155)</p>
              </div>
              <div className="mt-4 p-3 bg-background rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Example Improvement:</p>
                <p className="text-xs line-through text-muted-foreground mb-1">❌ "Learn about matchmakers in Austin."</p>
                <p className="text-xs text-success font-medium">✅ "Compare Austin's best matchmakers and discover how VIDA Select helps professionals find real relationships."</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-info/10 to-info/5 border-2 border-info/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-info/20 flex items-center justify-center">
                <Search className="w-5 h-5 text-info" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Headings (H1s)</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">~180 pages missing proper H1</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Strong H2/H3 structure overall</p>
              </div>
              <div className="mt-4 p-3 bg-background rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Best Practice:</p>
                <p className="text-xs line-through text-muted-foreground mb-1">❌ "Matchmaking Services"</p>
                <p className="text-xs text-success font-medium">✅ "Professional Matchmaking Services for Busy Executives"</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Image Alt Text */}
        <Card className="p-8 mb-8 border-2 border-warning/30 bg-warning/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Image Alt Text</h3>
              <p className="text-sm text-muted-foreground">Critical for SEO and accessibility</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">Current Issue</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  <span>Many images lack alt text</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  <span>Generic descriptions like "image123"</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  <span>Missing opportunities for keyword inclusion</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">How to Improve</h4>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">❌ Bad:</p>
                  <code className="text-xs text-destructive">"photo1.jpg"</code>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">✅ Good:</p>
                  <code className="text-xs text-success">"VIDA Select matchmaker meeting client in New York office"</code>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-background rounded-lg">
            <p className="text-sm font-medium text-foreground mb-2">Why It Matters:</p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Google can't "see" images - it reads alt text</li>
              <li>• Helps pages appear in Google Image search</li>
              <li>• Essential for screen readers (accessibility)</li>
              <li>• Natural opportunity to include relevant keywords</li>
            </ul>
          </div>
        </Card>

        {/* Content Quality */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Content Length and Quality</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-foreground mb-2">1,630</p>
              <p className="text-sm text-muted-foreground">Average word count</p>
              <Badge className="mt-2 bg-success text-success-foreground">Good Coverage</Badge>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-success mb-2">Most</p>
              <p className="text-sm text-muted-foreground">Have solid, detailed content</p>
              <Badge className="mt-2 bg-success text-success-foreground">Advantage</Badge>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-warning mb-2">Few</p>
              <p className="text-sm text-muted-foreground">Too short or need formatting</p>
              <Badge className="mt-2 bg-warning text-warning-foreground">To Fix</Badge>
            </div>
          </div>

          <div className="bg-gradient-to-br from-info/10 to-info/5 rounded-xl p-6 border border-info/20">
            <h4 className="font-semibold text-foreground mb-4">Ideal Content Structure</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Introduction (80-100 words)</p>
                  <p className="text-sm text-muted-foreground">Explain who the page helps and what they'll learn</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Main Content (800-1,200 words)</p>
                  <p className="text-sm text-muted-foreground">Break into clear sections with H2/H3 headings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Conclusion (50-100 words)</p>
                  <p className="text-sm text-muted-foreground">End with clear CTA like "Book a Consultation"</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Internal Linking */}
        <Card className="p-8 border-2 border-accent/30 bg-accent/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Internal Linking Strategy</h3>
              <p className="text-sm text-muted-foreground">Connect pages to improve discoverability</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">Current Situation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Many pages have few or no internal links pointing to them ("orphan pages"), making it harder for Google to find and value them.
              </p>
              <Badge variant="outline" className="border-warning text-warning">Needs Improvement</Badge>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">How to Improve</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Link related articles together</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Use meaningful anchor text</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Add "Related Articles" sections</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-background rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-4">Topic Cluster Examples</h4>
            <div className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="font-medium text-foreground mb-2">Elite Dating Cluster</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent text-accent">Elite Dating →</Badge>
                  <Badge variant="outline">Professional Matchmaking</Badge>
                  <Badge variant="outline">Luxury Dating</Badge>
                  <Badge variant="outline">Executive Dating</Badge>
                </div>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="font-medium text-foreground mb-2">City-Based Cluster</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent text-accent">NYC Matchmaker →</Badge>
                  <Badge variant="outline">LA Matchmaker</Badge>
                  <Badge variant="outline">Chicago Matchmaker</Badge>
                  <Badge variant="outline">Miami Matchmaker</Badge>
                </div>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="font-medium text-foreground mb-2">Educational Cluster</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-accent text-accent">Profile Tips →</Badge>
                  <Badge variant="outline">Photo Guide</Badge>
                  <Badge variant="outline">First Date Ideas</Badge>
                  <Badge variant="outline">Conversation Starters</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* SEO-Friendly Writing Framework */}
        <Card className="p-8 mt-8 bg-gradient-to-br from-muted/50 to-background">
          <h3 className="text-2xl font-bold text-foreground mb-6">SEO-Friendly Writing Framework</h3>
          <p className="text-muted-foreground mb-6">
            Writing for SEO means writing so people can find what they're looking for. Use this framework for all future pages:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold">Element</th>
                  <th className="text-left py-3 px-4 font-semibold">What to Include</th>
                  <th className="text-left py-3 px-4 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium">Title Tag</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Main topic + benefit hook</td>
                  <td className="py-4 px-4 text-sm">"Elite Matchmakers in LA – Meet Your Match Faster"</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium">Meta Description</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Summary + benefit + brand</td>
                  <td className="py-4 px-4 text-sm">"Compare LA's best matchmakers and see why professionals trust VIDA Select."</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium">H1</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Clear main heading</td>
                  <td className="py-4 px-4 text-sm">"Top Los Angeles Matchmakers for 2025"</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium">Alt Text</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Natural image description</td>
                  <td className="py-4 px-4 text-sm">"VIDA Select matchmaker helping client prepare for first date"</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium">Internal Link</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Guide to related content</td>
                  <td className="py-4 px-4 text-sm">"Explore our tips on writing a great dating profile."</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Summary */}
        <Card className="p-8 mt-8 bg-gradient-primary text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">In Simple Words</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            Think of VIDA Select's website like a beautifully written book where some pages don't have chapter titles, some pages aren't mentioned in the table of contents, and some pictures don't have captions. Our job now is to label everything properly, write short summaries for each page, and connect the chapters together so readers (and Google) can see the full story clearly and find what they need faster.
          </p>
          <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <p className="font-semibold mb-2">Expected Impact:</p>
            <ul className="space-y-1 opacity-90">
              <li>• Improve click-through rates</li>
              <li>• Boost time on site</li>
              <li>• Help Google prioritize pages that bring qualified leads</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>;
};
export default OnPageAudit;