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

        {/* Key Terminology */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-info/5 to-info/10 border-2 border-info/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Terminology (Plain Definitions)</h3>
          <p className="text-muted-foreground mb-6">
            Before reading the analysis, here's what each main term means:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Term</th>
                  <th className="text-left py-3 px-2 font-semibold">Meaning</th>
                  <th className="text-left py-3 px-2 font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Visibility</td>
                  <td className="py-4 px-2 text-muted-foreground">How often VIDA appears in AI-generated responses. If 8%, it means VIDA appears in 8 out of every 100 AI answers about matchmaking.</td>
                  <td className="py-4 px-2 text-muted-foreground">Shows how much AI systems recognize the brand.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Top 3 Visibility</td>
                  <td className="py-4 px-2 text-muted-foreground">The percentage of times VIDA appears among the top three results or recommendations inside AI responses.</td>
                  <td className="py-4 px-2 text-muted-foreground">Higher top-3 visibility means AI prefers recommending VIDA over others.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Average Position</td>
                  <td className="py-4 px-2 text-muted-foreground">The typical ranking spot where VIDA appears when mentioned (e.g., position 5 means middle of the list).</td>
                  <td className="py-4 px-2 text-muted-foreground">Lower number = stronger visibility.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Detection Rate</td>
                  <td className="py-4 px-2 text-muted-foreground">How consistently AI systems identify VIDA's brand when it appears.</td>
                  <td className="py-4 px-2 text-muted-foreground">Shows how accurately AI recognizes VIDA as a brand. 100% means every mention was correctly detected.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Citations</td>
                  <td className="py-4 px-2 text-muted-foreground">Instances where an AI system includes VIDA Select as a source or reference in its response.</td>
                  <td className="py-4 px-2 text-muted-foreground">Citations act like "backlinks" for AI — the more citations, the higher the trust.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Sentiment</td>
                  <td className="py-4 px-2 text-muted-foreground">How positive, neutral, or negative the AI-generated mentions are about VIDA (scored from 0–100).</td>
                  <td className="py-4 px-2 text-muted-foreground">Reflects AI's tone toward the brand — high sentiment = more trustworthy reputation.</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="py-4 px-2 font-medium">Coverage</td>
                  <td className="py-4 px-2 text-muted-foreground">The variety of relevant topics and search terms where VIDA appears.</td>
                  <td className="py-4 px-2 text-muted-foreground">Broader coverage means AI associates VIDA with more matchmaking-related topics.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

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
                  <th className="text-center py-3 px-2 font-semibold">Mentions</th>
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
                  <td className="text-center py-4 px-2">114</td>
                  <td className="text-center py-4 px-2">87</td>
                  <td className="text-center py-4 px-2">72.1</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Kelleher International</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">14.7%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">22%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">2.1</td>
                  <td className="text-center py-4 px-2">135</td>
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
                  <td className="text-center py-4 px-2">119</td>
                  <td className="text-center py-4 px-2">94</td>
                  <td className="text-center py-4 px-2">69.5</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">LUMA Matchmaking</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">10.5%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">7%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">3.6</td>
                  <td className="text-center py-4 px-2">90</td>
                  <td className="text-center py-4 px-2">153</td>
                  <td className="text-center py-4 px-2">74.6</td>
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

        {/* Citation Analysis */}
        <Card className="p-8 mb-8 border-2 border-warning/30 bg-warning/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Citation Analysis</h3>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Source</th>
                  <th className="text-center py-3 px-2 font-semibold">Citations Count</th>
                  <th className="text-center py-3 px-2 font-semibold">Share</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Google AI Mode</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">1,056</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">57%</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Google AIO</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">668</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">36%</Badge>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">ChatGPT</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">115</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline" className="border-warning text-warning">6%</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-xl p-6 border border-warning/20">
            <h4 className="font-semibold text-foreground mb-4">Meaning</h4>
            <p className="text-sm text-muted-foreground mb-4">
              VIDA has been directly cited 48 times across these AI systems. Kelleher International has 219 citations (4-5× more than VIDA). Citations are like "backlinks" for AI. Higher citation count = AI trusts the source more.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Citations function like backlinks in traditional SEO, they signal authority to AI models</li>
              <li>• Competitors with higher citation counts dominate the "trusted source" layer of AI systems</li>
              <li>• To increase citations, VIDA needs to appear in major articles, interviews, and knowledge panels that AI systems scrape</li>
              <li>• Publishing factual data, industry comparisons, and securing media mentions will boost citation count</li>
            </ul>
          </div>
        </Card>

        {/* Sentiment Analysis */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Sentiment Analysis</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-2 font-semibold">Indicator</th>
                  <th className="text-center py-3 px-2 font-semibold">Score</th>
                  <th className="text-left py-3 px-2 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Average Sentiment Across Brands</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">68.7%</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Overall positive tone in matchmaking industry mentions</td>
                </tr>
                <tr className="border-b border-border bg-warning/10">
                  <td className="py-4 px-2 font-medium">VIDA's Sentiment Score</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-warning text-warning-foreground">66.6%</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Slightly below industry average</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2 font-medium">Tone Type</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">Neutral to Positive</Badge>
                  </td>
                  <td className="py-4 px-2 text-muted-foreground">Most mentions are descriptive, not emotional or promotional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6 p-6 bg-background rounded-xl">
            <h4 className="font-semibold text-foreground mb-4">Interpretation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• AI-generated descriptions about VIDA are balanced, professional, slightly reserved, and fact-focused</li>
              <li>• Top competitors have warmer, story-like mentions tied to success outcomes</li>
              <li>• VIDA's sentiment is positive but not emotionally strong compared to competitors</li>
              <li>• Tone is descriptive rather than promotional, which is good for trust but could be more inspiring</li>
            </ul>
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
                  <p className="text-xs text-muted-foreground">Publish client testimonials and success stories in trusted sources that AI can access</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">2</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Expert Opinions</p>
                  <p className="text-xs text-muted-foreground">Feature brand storytelling and expert opinions in high-authority publications</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-info/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-info">3</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Positive Context</p>
                  <p className="text-xs text-muted-foreground">Ensure AI sees consistent positive mentions and context across platforms</p>
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
                <tr className="border-b border-border">
                  <td className="py-4 px-2">professional matchmaker near me</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">33%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">9.5</Badge>
                  </td>
                  <td className="text-center py-4 px-2">62%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">elite dating services for executives</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">33%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">11.2</Badge>
                  </td>
                  <td className="text-center py-4 px-2">67%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">hire a matchmaker with proven success rate</td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="outline">33%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-info text-info-foreground">8.0</Badge>
                  </td>
                  <td className="text-center py-4 px-2">71%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-2">vida select reviews</td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">100%</Badge>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className="bg-success text-success-foreground">1.0</Badge>
                  </td>
                  <td className="text-center py-4 px-2">64%</td>
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
        <Card className="p-8 mb-8 bg-gradient-to-br from-warning/5 to-warning/10 border-2 border-warning/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Areas to Improve</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Top 3 Visibility (3%)</h4>
                <Badge className="bg-warning text-warning-foreground">Priority</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                VIDA appears in AI answers but not as one of the "top recommended" brands. When AI lists matchmakers, VIDA typically ranks 5-6th, not in the crucial top 3 positions.
              </p>
              <div className="p-4 bg-info/10 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">How to Improve:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Add structured data (schema markup, FAQs) to help AI understand content better</li>
                  <li>• Publish expert mentions and thought leadership content</li>
                  <li>• Build more high-authority citations to boost trust signals</li>
                  <li>• Ensure consistent brand positioning across all online mentions</li>
                </ul>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Limited Citations (48)</h4>
                <Badge variant="outline" className="border-warning text-warning">Gap</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Competitors get 4-5× more citations. Kelleher has 219 citations vs VIDA's 48. Citations are critical. They tell AI which sources to trust and recommend.
              </p>
              <div className="p-4 bg-info/10 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">How to Improve:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Secure mentions in major articles, interviews, and media outlets AI scrapes</li>
                  <li>• Publish original research, data, and industry reports</li>
                  <li>• Create comprehensive comparison guides and educational content</li>
                  <li>• Build relationships with journalists and industry publications</li>
                  <li>• Develop knowledge panel presence on major platforms</li>
                </ul>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Moderate Sentiment (66.6%)</h4>
                <Badge variant="outline" className="border-warning text-warning">Below Average</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Tone is positive but not emotionally strong. Industry average is 68.7%, and top competitors reach 74-78%. VIDA's mentions are professional but lack the warmth and success stories that resonate with AI models.
              </p>
              <div className="p-4 bg-info/10 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">How to Improve:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Build "success story" and "client transformation" narratives</li>
                  <li>• Feature real testimonials and case studies in trusted publications</li>
                  <li>• Highlight positive outcomes and emotional benefits of service</li>
                  <li>• Create content that emphasizes results, not just process</li>
                  <li>• Encourage satisfied clients to share experiences publicly</li>
                </ul>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Niche Awareness Gaps</h4>
                <Badge variant="outline">Coverage</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                AI models don't yet associate VIDA with all relevant topics like "executive matchmaking," "elite professional dating," or "luxury relationship services." Topic coverage is narrower than competitors.
              </p>
              <div className="p-4 bg-info/10 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">How to Improve:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Expand content vocabulary around executive, luxury, and lifestyle dating</li>
                  <li>• Create topic-specific landing pages for different client segments</li>
                  <li>• Build consistent topical mentions across multiple platforms</li>
                  <li>• Develop content around adjacent topics AI associates with premium matchmaking</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Strengths */}
        <Card className="p-8 mb-8 border-2 border-success/30 bg-success/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Strengths</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-success">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">AI Models Recognize VIDA</h4>
                  <p className="text-sm text-muted-foreground">
                    100% detection means the brand is correctly identified everywhere. AI systems know who VIDA Select is and consistently recognize the brand across all platforms and queries.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-success">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Positive Reputation</h4>
                  <p className="text-sm text-muted-foreground">
                    Sentiment above 65% shows AI sees VIDA as a trusted professional service. The tone is consistently professional and favorable, with no negative patterns detected.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-success">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Multi-Engine Presence</h4>
                  <p className="text-sm text-muted-foreground">
                    VIDA appears across Google AI and ChatGPT, meaning it's included in modern AI ecosystems. This foundational presence is critical for future AI visibility growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-success">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Brand Authority</h4>
                  <p className="text-sm text-muted-foreground">
                    Ranks #1 for "what is VIDA select," showing strong brand identity. When people search directly for VIDA, AI systems provide accurate, authoritative information.
                  </p>
                </div>
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
            AI systems already know VIDA Select. They identify you as a trusted matchmaking company. However, when users ask "Who are the best matchmakers?", AI often recommends others first.
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
