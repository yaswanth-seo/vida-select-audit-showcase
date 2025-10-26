import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Target, Users, Eye, MousePointer, BarChart3 } from "lucide-react";

const ContentAudit = () => {
  return (
    <section id="content-audit" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Content Audit</h2>
            <p className="text-xl text-muted-foreground">
              VIDA Select Content Audit - Data Source: Google Search Console (12-month average)
            </p>
          </div>

          {/* 1. Introduction */}
          <Card className="mb-8 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed">
                Over the past 12 months, VIDA Select's website has been getting good visibility on Google. People are seeing your pages in search results, which we call impressions. But the challenge is that most of those people are not clicking to visit the website. This report explains what's working well, what isn't, and why some pages, especially the login pages, are holding back performance. We'll go through the findings step by step, in simple words, so you can understand how the data connects to real business outcomes.
              </p>
            </CardContent>
          </Card>

          {/* 2. Overall Performance */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Overall Performance at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative overflow-hidden p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Total Pages Analyzed</div>
                    <div className="text-3xl font-bold text-foreground">2,006</div>
                  </div>
                </div>
                <div className="relative overflow-hidden p-6 bg-gradient-to-br from-info/10 via-info/5 to-transparent border-2 border-info/20 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-info/5 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Total Search Queries</div>
                    <div className="text-3xl font-bold text-foreground">93,739</div>
                  </div>
                </div>
                <div className="relative overflow-hidden p-6 bg-gradient-to-br from-warning/10 via-warning/5 to-transparent border-2 border-warning/20 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-warning/5 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Average CTR</div>
                    <div className="text-3xl font-bold text-foreground">0.34%</div>
                  </div>
                </div>
                <div className="relative overflow-hidden p-6 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-2 border-secondary/20 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Average Google Position</div>
                    <div className="text-3xl font-bold text-foreground">18.9</div>
                    <div className="text-xs text-muted-foreground mt-1">(mostly page 2)</div>
                  </div>
                </div>
                <div className="relative overflow-hidden p-6 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/20 rounded-xl hover:shadow-lg transition-shadow md:col-span-2">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Analysis Period</div>
                    <div className="text-2xl font-bold text-foreground">12-month average</div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden p-6 bg-gradient-to-br from-success/10 via-success/5 to-transparent border-2 border-success/20 rounded-xl space-y-3">
                <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-3xl"></div>
                <div className="relative">
                  <h4 className="font-semibold text-lg mb-3">In simple terms:</h4>
                  <div className="space-y-2">
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>VIDA Select shows up a lot on Google, over 3 million times in a year.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>But people only clicked around 10,000 times.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span>That's a sign that many pages are being seen but not chosen.</span>
                    </p>
                  </div>
                  <p className="mt-4 text-sm">
                    The main reason is <strong>search intent</strong>, meaning what users actually want when they search. Some of your pages match what people want, but some (especially the "login" ones) don't.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Brand vs Non-Brand */}
          <Card className="mb-8 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                How Brand vs Non-Brand Searches Behave
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base">There's a big difference between two kinds of searches:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-2 border-success/50 rounded-lg bg-success/5">
                  <h4 className="font-bold text-lg mb-2 text-success">Brand Searches</h4>
                  <p className="text-sm mb-3">People who already know VIDA Select and look for it by name ("vida select," "vida matchmaking"). These people trust you. They click often.</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-lg px-3 py-1">CTR: 5.3%</Badge>
                    <span className="text-success font-semibold">Great!</span>
                  </div>
                </div>

                <div className="p-4 border-2 border-warning/50 rounded-lg bg-warning/5">
                  <h4 className="font-bold text-lg mb-2 text-warning">Non-Brand Searches</h4>
                  <p className="text-sm mb-3">People searching for general topics like "elite matchmaking services" or "dating apps for professionals." These people don't know VIDA yet.</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-lg px-3 py-1">CTR: 0.3%</Badge>
                    <span className="text-warning font-semibold">Quite low</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">What this means:</h4>
                <p className="text-sm">
                  Right now, most of the website's traffic is coming from people who already know you. We're not capturing enough new people who are exploring dating options but haven't heard of VIDA yet.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. What's Working Well - COMPLETE with all details */}
          <Card className="mb-8 border-success/30 bg-success/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                What's Working Well
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Elite & Luxury Dating Content */}
              <div className="p-6 border border-success/30 rounded-lg bg-background">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">1.</span>
                  Elite & Luxury Dating Content
                </h3>
                <p className="text-base mb-4">
                  These pages are the heart of your brand. They talk about high-end dating, exclusivity, and premium matchmaking. They perform <strong>three times better</strong> than the site average because they attract the right audience: people who value quality, privacy, and expert help.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Example:</h4>
                  <p className="text-sm">"Elite matchmaking" and "millionaire dating sites" keywords bring in people who fit VIDA's services perfectly.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Why it works:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>The message matches the audience's intent.</li>
                    <li>The content feels personalized and expert.</li>
                    <li>You're in a smaller niche, so competition is lower and trust is higher.</li>
                  </ul>
                </div>
              </div>

              {/* Profile Creation Guides */}
              <div className="p-6 border border-success/30 rounded-lg bg-background">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">2.</span>
                  Profile Creation Guides
                </h3>
                <p className="text-base mb-4">
                  These are practical "how to make your dating profile better" articles.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <span className="font-medium">/short-dating-profile-examples/</span> → 59,225 clicks</li>
                    <li>• <span className="font-medium">/10-irresistible-dating-profile-examples-for-men/</span> → 23,293 clicks</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Why it works:</h4>
                  <p className="text-sm">
                    People searching for this type of content are already serious about improving their dating life. They are open to expert advice, which makes them potential VIDA clients. It's an easy entry point for future customers. They come for help and might stay for your service.
                  </p>
                </div>
              </div>

              {/* Comparison & Premium Feature Pages */}
              <div className="p-6 border border-success/30 rounded-lg bg-background">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">3.</span>
                  Comparison & Premium Feature Pages
                </h3>
                <p className="text-base mb-4">
                  These pages talk about paid versions of dating apps like Tinder Gold, Hinge+, or CMB Premium.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <span className="font-medium">/tinder-plus-vs-tinder-gold/</span> → 16K clicks</li>
                    <li>• <span className="font-medium">/hinge-plus-vs-hingex/</span> → 14K clicks</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Why it works:</h4>
                  <p className="text-sm">
                    These readers are in the "research and decision" stage. They're comparing platforms and ready to make choices. If we guide them well, we can position VIDA as the smarter, more effective alternative to these apps.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5. What's Not Working - COMPLETE with ALL login page data */}
          <Card className="mb-8 border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-destructive" />
                What's Not Working (and Why)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* A. Login Pages - COMPLETE TABLE */}
              <div className="p-6 border-2 border-destructive/50 rounded-lg bg-background">
                <h3 className="text-xl font-bold mb-4 text-destructive flex items-center gap-2">
                  <span className="text-2xl">A.</span>
                  Login Pages from Other Brands
                </h3>
                <p className="text-base mb-4 font-semibold">
                  These are the most problematic pages right now.
                </p>

                {/* Login Pages Table - COMPLETE */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border p-3 text-left">Page</th>
                        <th className="border border-border p-3 text-right">Clicks</th>
                        <th className="border border-border p-3 text-right">Impressions</th>
                        <th className="border border-border p-3 text-right">CTR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">/pof-login-page/</td>
                        <td className="border border-border p-3 text-right">62</td>
                        <td className="border border-border p-3 text-right">189,806</td>
                        <td className="border border-border p-3 text-right text-destructive font-bold">0.03%</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">/eharmony-login/</td>
                        <td className="border border-border p-3 text-right">61</td>
                        <td className="border border-border p-3 text-right">102,400</td>
                        <td className="border border-border p-3 text-right text-destructive font-bold">0.06%</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">/match-com-login/</td>
                        <td className="border border-border p-3 text-right">0</td>
                        <td className="border border-border p-3 text-right">1,685</td>
                        <td className="border border-border p-3 text-right text-destructive font-bold">0%</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">/seekingarrangement-login-page/</td>
                        <td className="border border-border p-3 text-right">3</td>
                        <td className="border border-border p-3 text-right">1,991</td>
                        <td className="border border-border p-3 text-right text-destructive font-bold">0.15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">What's happening:</h4>
                    <p className="text-sm">
                      When someone types "POF login" or "Match.com login," they just want to sign in to their account, not read an article. So even if your site shows up, nobody clicks, because the intent doesn't match. And when a few people do click, they leave immediately, which tells Google your page isn't helpful.
                    </p>
                  </div>

                  <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
                    <h4 className="font-semibold mb-2 text-destructive">Why it's harmful:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Google lowers trust in your website because of high bounce rates and poor CTR.</li>
                      <li>These pages create no business value; they're not your audience.</li>
                      <li>They dilute VIDA's premium brand and can even look like an attempt to copy other brands' visibility.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold mb-2">In short:</h4>
                    <p className="text-sm">
                      These pages bring traffic that doesn't convert and can harm your whole site's reputation. They should be removed or redirected to real, relevant content like "POF review" or "dating apps for professionals."
                    </p>
                  </div>
                </div>
              </div>

              {/* B. Generic "How-To" Articles */}
              <div className="p-6 border border-destructive/30 rounded-lg bg-background">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">B.</span>
                  Generic "How-To" Articles
                </h3>
                <p className="text-base mb-3">
                  Some older guides are too general or too long for the average reader. For example, "how to start a conversation online": people expect quick answers, not long articles.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg mb-3">
                  <h4 className="font-semibold text-sm mb-1">Problem:</h4>
                  <p className="text-sm">
                    Your content gives detailed advice, but today's readers want faster, simpler formats: lists, visuals, examples.
                  </p>
                </div>
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Result:</h4>
                  <p className="text-sm">
                    CTR below 0.3%. People scroll past because it doesn't look like the quick help they expected.
                  </p>
                </div>
              </div>

              {/* C. Sugar Dating Topics */}
              <div className="p-6 border border-destructive/30 rounded-lg bg-background">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">C.</span>
                  Sugar Dating Topics
                </h3>
                <p className="text-base mb-3">
                  These pages rank low (around page 4) and have very low engagement (0.16% CTR).
                </p>
                <div className="bg-muted/50 p-3 rounded-lg mb-3">
                  <h4 className="font-semibold text-sm mb-1">Reason:</h4>
                  <p className="text-sm">
                    They attract a completely different audience, not people looking for long-term relationships or professional matchmaking. Keeping focus on VIDA's premium niche (executives, professionals, elite singles) will attract better-quality leads.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue with remaining sections... */}
          {/* 6. Understanding Positions and Rankings */}
          <Card className="mb-8 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Understanding Positions and Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">On Google, your ranking (position) determines how visible you are:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Position Range</th>
                      <th className="border border-border p-3 text-left">Description</th>
                      <th className="border border-border p-3 text-left">What It Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-bold text-success">Position 1-3</td>
                      <td className="border border-border p-3 font-semibold">Prime Visibility</td>
                      <td className="border border-border p-3">You're at the top of search results. These positions get most of the clicks (up to 30% CTR for #1 position). This is where you want to be for your most important keywords.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-bold text-warning">Position 4-10</td>
                      <td className="border border-border p-3 font-semibold">Visible but competing</td>
                      <td className="border border-border p-3">You're on the first page, but below the fold. You'll get some clicks (2-10% CTR), but many users won't scroll down this far. There's strong competition for attention.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-bold text-destructive">Position 11-20+</td>
                      <td className="border border-border p-3 font-semibold">Page 2+ (buried)</td>
                      <td className="border border-border p-3">Most users never see page 2. CTR drops to under 1%. Even if you rank here for thousands of keywords, it generates minimal traffic. This is where most of your pages currently sit (average position 18.9).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Rest of sections following same pattern... */}
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Missing Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-1 gap-4">
                <div className="p-4 border border-primary/30 rounded-lg bg-primary/5">
                  <h4 className="font-bold mb-2">1. LGBTQ+ Dating Content:</h4>
                  <p className="text-sm">Very few pages, though there's huge demand. This audience matches VIDA's premium and safe dating approach.</p>
                </div>
                <div className="p-4 border border-primary/30 rounded-lg bg-primary/5">
                  <h4 className="font-bold mb-2">2. Professional & Executive Dating:</h4>
                  <p className="text-sm">Perfect match for VIDA's ideal customers (busy, successful people). Needs more focused content.</p>
                </div>
                <div className="p-4 border border-primary/30 rounded-lg bg-primary/5">
                  <h4 className="font-bold mb-2">3. Location-Based Pages:</h4>
                  <p className="text-sm">Local searches like "matchmaking in NYC" or "dating services in Los Angeles" have low competition and strong intent. Adding content for major cities can help reach high-value leads faster.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8. Key Category Summary Table */}
          <Card className="mb-8 border-accent">
            <CardHeader>
              <CardTitle>Key Category Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Category</th>
                      <th className="border border-border p-3 text-center">Avg CTR</th>
                      <th className="border border-border p-3 text-left">What It Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-success/10">
                      <td className="border border-border p-3 font-medium">Elite / Luxury Dating</td>
                      <td className="border border-border p-3 text-center font-bold text-success">0.92%</td>
                      <td className="border border-border p-3">Best fit for VIDA's services; continue building around this.</td>
                    </tr>
                    <tr className="bg-success/5">
                      <td className="border border-border p-3 font-medium">Profile Optimization</td>
                      <td className="border border-border p-3 text-center font-bold text-success">0.72%</td>
                      <td className="border border-border p-3">Great engagement; bring more variations (by gender, age, profession).</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Premium Features & Comparison</td>
                      <td className="border border-border p-3 text-center font-bold">0.50–0.70%</td>
                      <td className="border border-border p-3">Strong conversion potential; keep growing.</td>
                    </tr>
                    <tr className="bg-warning/10">
                      <td className="border border-border p-3 font-medium">How-To Guides</td>
                      <td className="border border-border p-3 text-center font-bold text-warning">0.22%</td>
                      <td className="border border-border p-3">Needs redesign or simplification.</td>
                    </tr>
                    <tr className="bg-destructive/10">
                      <td className="border border-border p-3 font-medium">Login Pages</td>
                      <td className="border border-border p-3 text-center font-bold text-destructive">0.04%</td>
                      <td className="border border-border p-3">Must be removed; no value and hurts rankings.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 9. Big Picture Takeaways */}
          <Card className="mb-8 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Big Picture Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-background rounded-lg border-l-4 border-success">
                  <p className="font-semibold mb-1">1. Your brand is strong.</p>
                  <p className="text-sm">People who know VIDA trust it and click it.</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border-l-4 border-warning">
                  <p className="font-semibold mb-1">2. Your challenge is discoverability.</p>
                  <p className="text-sm">People who don't know VIDA yet aren't finding you enough.</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border-l-4 border-primary">
                  <p className="font-semibold mb-1">3. Your best content already proves what works:</p>
                  <p className="text-sm">Premium, niche, expert-led articles.</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border-l-4 border-destructive">
                  <p className="font-semibold mb-1">4. Some old or irrelevant pages are holding you back.</p>
                  <p className="text-sm">The login pages are the biggest issue; they waste visibility and lower your overall site score.</p>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Bottom line:</strong> Once these are removed and focus shifts toward your high-performing content types, VIDA can grow its organic reach without needing new advertising or massive content expansion.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 10. In Simple Words */}
          <Card className="mb-8 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                In Simple Words
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed">
                Think of Google visibility like foot traffic outside your store: You have a million people walking by, but only a few are stepping inside. Some windows (pages) display what your store sells and those get attention. But other windows show products from completely different stores (login pages for Match.com, POF) and people walk past confused.
              </p>
              <p className="text-base leading-relaxed">
                Right now, VIDA Select has excellent "windows" for elite matchmaking and dating profile help. Those are attracting the right customers. The goal is to add more of those premium windows and remove the confusing ones that are just taking up space.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContentAudit;
