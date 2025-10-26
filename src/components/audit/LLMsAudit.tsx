import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertCircle, Target } from "lucide-react";

const LLMsAudit = () => {
  return (
    <section id="llms" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Badge className="mb-4 bg-warning text-warning-foreground">Section 4</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">LLMs & AI Visibility Audit</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Measuring how VIDA Select is recognized and represented in AI-generated answers across ChatGPT, Google AI Overviews, and other AI platforms.
          </p>
        </div>

        {/* What This Audit Measures */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-warning/5 to-warning/10 border-2 border-warning/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">What This Audit Measures</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">AI Reputation & Discovery</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• How often AI models mention VIDA Select</li>
                <li>• Whether mentions are positive or negative</li>
                <li>• Which competitors appear more frequently</li>
                <li>• What improvements boost recommendations</li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">Why It Matters</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Traditional SEO measures Google rankings. AI visibility measures whether ChatGPT, Gemini, and AI Overviews recommend your brand when users ask about matchmaking services.
              </p>
              <Badge variant="outline" className="border-warning text-warning">Future of Search</Badge>
            </div>
          </div>
        </Card>

        {/* Key Metrics */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Metrics Explained</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Visibility</h4>
                <Badge className="bg-warning text-warning-foreground">8.1%</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                VIDA appears in 8 out of 100 AI responses about matchmaking
              </p>
              <p className="text-xs text-muted-foreground">Shows how much AI systems recognize the brand</p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Top 3 Visibility</h4>
                <Badge variant="outline" className="border-warning text-warning">3%</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Percentage of times among top 3 recommendations
              </p>
              <p className="text-xs text-muted-foreground">Higher = AI prefers recommending VIDA</p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Average Position</h4>
                <Badge variant="outline">5.8</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Typical ranking spot when VIDA appears
              </p>
              <p className="text-xs text-muted-foreground">Lower number = stronger visibility</p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Detection Rate</h4>
                <Badge className="bg-success text-success-foreground">100%</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                AI systems correctly identify VIDA's brand
              </p>
              <p className="text-xs text-muted-foreground">Every mention accurately detected</p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Citations</h4>
                <Badge variant="outline" className="border-warning text-warning">48</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Times AI includes VIDA as a source or reference
              </p>
              <p className="text-xs text-muted-foreground">Like "backlinks" for AI systems</p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Sentiment Score</h4>
                <Badge className="bg-info text-info-foreground">66.6%</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                How positive AI-generated mentions are
              </p>
              <p className="text-xs text-muted-foreground">0-100 scale, higher = more trustworthy</p>
            </div>
          </div>
        </Card>

        {/* Competitor Comparison */}
        <Card className="p-8 mb-8 border-2 border-warning/30 bg-warning/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Competitive Positioning</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Brand</th>
                  <th className="text-center py-3 px-2 font-semibold">Visibility</th>
                  <th className="text-center py-3 px-2 font-semibold">Top 3%</th>
                  <th className="text-center py-3 px-2 font-semibold">Avg Position</th>
                  <th className="text-center py-3 px-2 font-semibold">Citations</th>
                  <th className="text-center py-3 px-2 font-semibold">Sentiment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-warning/10">
                  <td className="py-4 px-2 font-medium">VIDA Select</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">8.1%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">3%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">5.8</td>
                  <td className="text-center py-4 px-2">48</td>
                  <td className="text-center py-4 px-2">66.6</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Tawkify</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">12.2%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">9%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">3.8</td>
                  <td className="text-center py-4 px-2">87</td>
                  <td className="text-center py-4 px-2">72.1</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Kelleher</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">14.7%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">22%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">2.1</td>
                  <td className="text-center py-4 px-2">156</td>
                  <td className="text-center py-4 px-2">78.2</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Selective Search</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">9.3%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">8%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">4.7</td>
                  <td className="text-center py-4 px-2">94</td>
                  <td className="text-center py-4 px-2">69.5</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Three Day Rule</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">5.9%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">3%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">14.9</td>
                  <td className="text-center py-4 px-2">52</td>
                  <td className="text-center py-4 px-2">46</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-background rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Interpretation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Top competitors appear more often and rank higher in AI responses</li>
              <li>• VIDA's 5.8 position means it's recognized but not often in top recommendations</li>
              <li>• Competitors with higher citations dominate the "trusted source" layer</li>
              <li>• Kelleher and Tawkify have 2-3x more AI visibility than VIDA</li>
            </ul>
          </div>
        </Card>

        {/* Sentiment Analysis */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Sentiment Analysis</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-foreground mb-2">68.7%</p>
              <p className="text-sm text-muted-foreground">Industry Average</p>
              <Badge className="mt-2 bg-info text-info-foreground">Positive Tone</Badge>
            </div>
            
            <div className="bg-gradient-to-br from-warning/20 to-warning/10 rounded-xl p-6 text-center border-2 border-warning/30">
              <p className="text-3xl font-bold text-foreground mb-2">66.6%</p>
              <p className="text-sm text-muted-foreground">VIDA Select Score</p>
              <Badge className="mt-2 bg-warning text-warning-foreground">Slightly Below Avg</Badge>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-foreground mb-2">Neutral</p>
              <p className="text-sm text-muted-foreground">Tone Type</p>
              <Badge className="mt-2" variant="outline">Professional</Badge>
            </div>
          </div>

          <div className="bg-gradient-to-br from-info/10 to-info/5 rounded-xl p-6 border border-info/20">
            <h4 className="font-semibold text-foreground mb-4">How to Improve Sentiment</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">1</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Success Stories</p>
                  <p className="text-xs text-muted-foreground">Publish client testimonials in trusted sources</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">2</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Expert Opinions</p>
                  <p className="text-xs text-muted-foreground">Feature brand storytelling in high-authority publications</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">3</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Positive Context</p>
                  <p className="text-xs text-muted-foreground">Ensure AI sees consistent positive mentions</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Search Term Visibility */}
        <Card className="p-8 mb-8 border-2 border-info/30">
          <h3 className="text-2xl font-bold text-foreground mb-6">Search Term Performance</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Search Term</th>
                  <th className="text-center py-3 px-2 font-semibold">Visibility</th>
                  <th className="text-center py-3 px-2 font-semibold">Position</th>
                  <th className="text-center py-3 px-2 font-semibold">Sentiment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">what is vida select</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">100%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">1.0</Badge>
                  </td>
                  <td className="text-center py-4 px-2">63%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">matchmaking service costs near me</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">67%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">1.0</Badge>
                  </td>
                  <td className="text-center py-4 px-2">55%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">best luxury matchmaking services</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">67%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">10.8</Badge>
                  </td>
                  <td className="text-center py-4 px-2">63%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">premium matchmaking for professionals</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">67%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">10.1</Badge>
                  </td>
                  <td className="text-center py-4 px-2">64%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">affordable high-end matchmaking</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">67%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">4.9</Badge>
                  </td>
                  <td className="text-center py-4 px-2">66%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-background rounded-lg">
            <p className="text-sm font-medium text-foreground mb-2">Key Insight:</p>
            <p className="text-sm text-muted-foreground">
              VIDA performs best for branded and cost-related searches but needs stronger presence in non-brand, service-intent searches to capture more new prospects.
            </p>
          </div>
        </Card>

        {/* Areas to Improve */}
        <Card className="p-8 mb-8 border-2 border-warning/30 bg-warning/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Areas to Improve</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 border-l-4 border-warning">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg text-foreground">Top 3 Visibility: 3%</h4>
                <Badge variant="outline" className="border-warning text-warning">Low</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                VIDA appears in AI answers but not as one of the "top recommended" brands
              </p>
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="text-xs font-medium text-foreground mb-2">→ Solution:</p>
                <p className="text-xs text-muted-foreground">
                  Add more structured data (schema, FAQs) and publish expert mentions to boost trust signals
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-warning">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg text-foreground">Limited Citations: 48</h4>
                <Badge variant="outline" className="border-warning text-warning">4-5x Less</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Competitors get 4-5× more citations from AI systems
              </p>
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="text-xs font-medium text-foreground mb-2">→ Solution:</p>
                <p className="text-xs text-muted-foreground">
                  Secure mentions in major articles, interviews, and knowledge panels that AI systems scrape
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 border-l-4 border-warning">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg text-foreground">Moderate Sentiment: 66.6%</h4>
                <Badge variant="outline" className="border-warning text-warning">Below Average</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Tone is positive but not emotionally strong enough
              </p>
              <div className="bg-warning/10 rounded-lg p-4">
                <p className="text-xs font-medium text-foreground mb-2">→ Solution:</p>
                <p className="text-xs text-muted-foreground">
                  Build "success story" and "client transformation" narratives to elevate positivity
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Strategy Roadmap */}
        <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-6">AI Visibility Strategy Roadmap</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">AI Visibility</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Make VIDA appear more often in AI responses
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Add structured data and FAQs</p>
                <p>• Optimize for conversational intent</p>
                <p>• Create AI-friendly content</p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Citation Building</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Become a trusted source AI systems quote
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Publish factual data and comparisons</p>
                <p>• Appear in major media outlets</p>
                <p>• Create industry reports</p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Sentiment Boosting</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Shape how AI "talks" about VIDA
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Feature client success stories</p>
                <p>• Highlight professional recognitions</p>
                <p>• Create emotional narratives</p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Topic Expansion</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Increase variety of relevant contexts
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>• Executive dating articles</p>
                <p>• Luxury lifestyle content</p>
                <p>• Professional matchmaking guides</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <Card className="p-8 mt-8 bg-gradient-primary text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">In Simple Words</h3>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            AI systems already know VIDA Select—they identify you as a trusted matchmaking company. However, when users ask "Who are the best matchmakers?", AI often recommends others first.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="font-semibold mb-3">To Change That, VIDA Must:</p>
              <ul className="space-y-2 opacity-90">
                <li>• <strong>Appear more often</strong> (visibility)</li>
                <li>• <strong>Be cited more</strong> as a trusted source</li>
                <li>• <strong>Sound more inspiring</strong> (sentiment)</li>
                <li>• <strong>Connect to more topics</strong> (coverage)</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="font-semibold mb-3">The Shift:</p>
              <p className="text-lg opacity-90">
                Move VIDA from being <span className="font-bold">"recognized"</span> to being <span className="font-bold">"recommended"</span> by AI systems.
              </p>
              <Badge className="mt-4 bg-white text-primary">Future of Discovery</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LLMsAudit;
