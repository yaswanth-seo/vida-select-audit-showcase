import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, AlertCircle } from "lucide-react";

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

        {/* Introduction */}
        <Card className="p-8 mb-8 border-l-4 border-primary">
          <h3 className="text-2xl font-bold text-foreground mb-4">Focus: High-Intent / Revenue-Driving Search Queries</h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">Sources:</strong> VIDA Select, Tawkify, Selective Search, Kelleher International, Elite Connections, LUMA</p>
            <p><strong className="text-foreground">Scope:</strong> Commercial, Transactional, Navigational keywords (not general blog traffic)</p>
          </div>

          <div className="mt-6 p-6 bg-muted rounded-lg">
            <h4 className="font-bold text-foreground mb-4">Definitions (for clarity)</h4>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Keyword Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Definition</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Commercial / Transactional</td>
                  <td className="py-3 px-4 text-sm">Queries where the user is comparing services, evaluating cost, intending to sign up, or looking for help to solve a problem with money.</td>
                  <td className="py-3 px-4 text-sm">tawkify cost, matchmaker chicago, eharmony cost, cancel bumble subscription</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Navigational</td>
                  <td className="py-3 px-4 text-sm">Brand + action queries, where the user is looking for a specific brand's service, login, pricing, reviews, etc.</td>
                  <td className="py-3 px-4 text-sm">tawkify pricing, kelleher international cost, selective search reviews</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-sm text-muted-foreground italic">
              These keyword types drive consultation requests, sales calls, or paid sign-ups. They are not just "traffic," they are "pipeline."
            </p>
          </div>
        </Card>

        {/* Tawkify Analysis */}
        <Card className="p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">Competitor</Badge>
            <h3 className="text-2xl font-bold text-foreground">Tawkify</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Core Topic Clusters They Target</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">1. Brand evaluation</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>tawkify pricing</strong> (Vol ~1,500/mo, Position ~1)</li>
                    <li>• <strong>tawkify cost</strong> (Vol ~1,300/mo, Position ~8)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Purpose:</strong> control their own pricing/reputation narrative.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">2. Matchmaking service discovery</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>matchmaking services</strong> (Vol ~1,700/mo, Position ~4)</li>
                    <li>• <strong>match making service</strong> (Vol ~700/mo, Position ~4)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Purpose:</strong> capture users searching for a generic professional matchmaking solution.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">3. Dating app frustration / comparison</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>hinge vs bumble</strong> (Vol ~16,000+/mo range, they get traffic)</li>
                    <li>• <strong>hinge boost</strong> (Vol ~700/mo, flagged Commercial)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Purpose:</strong> attract people who are tired of using apps and considering alternatives.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">4. Dating/relationship pain points</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• signs you're in the friend zone</li>
                    <li>• female led relationship</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Purpose:</strong> pull in emotionally stressed users, build trust, funnel them to matchmaking.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded">
                <p className="font-semibold text-foreground">Summary:</p>
                <p className="text-muted-foreground mt-2">Tawkify operates in "dating is hard right now" territory. They capture high-volume frustration traffic and convert it into "book a matchmaker call."</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Strengths</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>✅ Strong brand defense on pricing/legitimacy terms (tawkify pricing, tawkify cost).</li>
                <li>✅ Strong capture of "I'm struggling with apps" traffic (hinge vs bumble, hinge boost).</li>
                <li>✅ Strong coverage of mass-market relationship stress topics ("friend zone," modern dating dynamics).</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground italic">This gives them very high top-of-funnel volume.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Weaknesses / Gaps</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>⚠️ Positioning is more mass-market than executive. Their data shows focus on mainstream emotional pain, not explicitly "executive matchmaking," "high-end matchmaker," or "professional matchmaking for successful people."</li>
                <li>⚠️ We do not see dominance in local-intent keywords like matchmaker chicago, miami matchmaker, etc. Those are high-ticket local buyer terms.</li>
                <li>⚠️ We do not see them owning "elite / high-end / luxury matchmaking" phrasing. That language is owned by premium competitors.</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Opportunity vs Tawkify</h4>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Strategy 1: Build comparison/alternative assets</p>
                  <p className="text-sm mt-1">Target their commercial terms: tawkify pricing, tawkify cost, tawkify reviews. These queries are bottom-of-funnel. The user is already ready to spend; we can present VIDA Select as a higher-quality alternative for serious professionals.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Strategy 2: Position VIDA differently</p>
                  <p className="text-sm mt-1">Not "dating is hard," but "your time is valuable, stop wasting it." This speaks to buyers with budget, which Tawkify content does not fully isolate.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Selective Search Analysis */}
        <Card className="p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">Competitor</Badge>
            <h3 className="text-2xl font-bold text-foreground">Selective Search</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Core Topic Clusters They Target</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">1. Cost and credibility</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>selective search cost</strong> (Vol ~100/mo, Position ~1)</li>
                    <li>• <strong>selective search reviews</strong> (Vol ~300/mo, Position ~4)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> preempt objections around "are you legit and worth the money?"</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">2. Local/Intake Intent</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>matchmaker chicago</strong> (~300/mo, Position ~4)</li>
                    <li>• <strong>matchmakers in houston</strong> (~200/mo, Position ~4)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Purpose:</strong> generate leads for specific service territories. These are consultation-ready leads.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">3. Lifestyle-Specific Matchmaking</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>christian matchmaking</strong> (~200/mo, often Position ~1 on their side)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> segment by values/background and claim authority in that sub-market.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded">
                <p className="font-semibold text-foreground">Summary:</p>
                <p className="text-muted-foreground mt-2">Selective Search is positioned as a premium, trusted, location-based, values-aligned service.</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Strengths</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>✅ Very strong on geographic "matchmaker + city" terms that imply local concierge-style service. This is high-ticket lead generation.</li>
                <li>✅ Strong control over "Selective Search cost / reviews." They control their buying funnel without letting third-party review sites dominate the narrative.</li>
                <li>✅ They lean into identity/value-based angles like "Christian matchmaking," which increases perceived compatibility/trust.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Weaknesses / Gaps</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>⚠️ They lean heavily on "we're in [city]." That creates a claim of physical/local presence. If not actually present, that is vulnerable to being challenged.</li>
                <li>⚠️ Their language is traditional high-end matchmaking, but less focused on modern dating problems (dating apps, swipe fatigue, paid app upgrades).</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Opportunity vs Selective Search</h4>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>✦ We can build location-based / executive-framed landing pages (e.g. "Executive Matchmaking in Chicago for High-Standard Professionals") and directly compete in matchmaker chicago, matchmakers in houston, etc.</p>
                <p>✦ We can differentiate by adding modern pain ("we reduce app burnout and screening fatigue") instead of just classic luxury language. That's a positioning edge.</p>
                <p>✦ We can produce "Selective Search vs VIDA Select" pages to intercept searches like selective search cost and present VIDA as a more modern / efficient engagement model.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Kelleher International Analysis */}
        <Card className="p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">Competitor</Badge>
            <h3 className="text-2xl font-bold text-foreground">Kelleher International</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Core Topic Clusters They Target</h4>
              <p className="text-muted-foreground mb-4">Kelleher aggressively targets "luxury + global + status" intent:</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">1. High-Net-Worth Positioning</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>high end matchmaker</strong> (Vol ~150/mo, Position ~1)</li>
                    <li>• <strong>high end matchmaking services</strong> (~100/mo, Position ~1)</li>
                    <li>• <strong>elite matchmaker</strong> (~300/mo, Position ~5)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> claim status. They want to be the answer when someone searches for premium, not budget.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">2. Global Reach / Exclusivity</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>international matchmaker</strong> (~200/mo, Position ~1)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> own the "I travel / I'm global / I need elite reach" story.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">3. Service Validation</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>kelleher international cost</strong> (~100/mo, Position ~1)</li>
                    <li>• <strong>professional matchmaking service</strong> (~400/mo, Position ~4)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> control narrative around cost for affluent prospects.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded">
                <p className="font-semibold text-foreground">Summary:</p>
                <p className="text-muted-foreground mt-2">Kelleher sells exclusivity, privacy, and executive-level filtering.</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Strengths</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>✅ Extremely strong on "elite / high end / international / professional matchmaker" phrasing. They are clearly optimized for wealthy and status-aware buyers.</li>
                <li>✅ Strong on their own cost keyword (kelleher international cost), which blocks negative coverage and keeps the conversation on their terms.</li>
                <li>✅ Strong on global language ("international matchmaker"), which appeals to clients who think locally is too small for them.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Weaknesses / Gaps</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>⚠️ Less visible in modern dating/app context. They don't appear to be winning queries around dating app upgrades, frustration with apps, or "is [paid dating feature] worth it?"</li>
                <li>⚠️ Vulnerable to being framed as "traditional / old-model luxury." If VIDA positions as "elite but modern and data-driven," Kelleher can look outdated.</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Opportunity vs Kelleher</h4>
              <p className="text-muted-foreground text-sm">
                Create positioning content around "elite matchmaking for high-performing professionals who are done wasting time on apps," and explicitly compare process efficiency and screening model.
              </p>
            </div>
          </div>
        </Card>

        {/* Elite Connections Analysis */}
        <Card className="p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2">Competitor</Badge>
            <h3 className="text-2xl font-bold text-foreground">Elite Connections</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Core Topic Clusters They Target</h4>
              <p className="text-muted-foreground mb-4">Elite Connections is heavily concentrated in "elite + location" intent:</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">1. City-specific high-end matchmaking</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>elite matchmaking nyc</strong> (~100/mo, Position ~1)</li>
                    <li>• <strong>palm beach matchmaker</strong> (~150/mo, Position ~3)</li>
                    <li>• <strong>miami matchmaker</strong> (~150/mo, Position ~5)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> convince affluent singles in wealthy metros that "we have presence in your area."</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">2. Generic elite branding</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>elite matchmaking</strong> (~250/mo, Position ~3)</li>
                    <li>• <strong>elite matchmaking services</strong> (~150/mo, Position ~2)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> attach themselves to the word "elite" so they appear higher-tier than average "dating service."</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">3. Near-me intent</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>matchmaker near me</strong> (~1,200/mo, Position ~11)</li>
                  </ul>
                  <p className="text-sm mt-2 text-muted-foreground"><strong>Goal:</strong> capture direct consult leads from users literally looking to hire someone.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded">
                <p className="font-semibold text-foreground">Summary:</p>
                <p className="text-muted-foreground mt-2">Elite Connections is location-led. They're saying: "We operate in rich cities. We serve high-value people like you, where you live."</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Strengths</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>✅ Strong in high-income geographies (Palm Beach, Miami, NYC).</li>
                <li>✅ Strong in elite branding language.</li>
                <li>✅ Strong on "near me," which is direct hire intent.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Weaknesses / Gaps</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>⚠️ Less visible in "how much does X cost?" and "is this service worth the money?" discussions.</li>
                <li>⚠️ Less present in app-frustration queries.</li>
                <li>⚠️ Value proposition is mainly physical presence and exclusivity. Less discussion around efficiency, screening automation, or helping people escape app overwhelm.</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-3">Opportunity vs Elite Connections</h4>
              <p className="text-muted-foreground text-sm mb-3">
                VIDA can compete directly in the same metros with updated positioning:
              </p>
              <p className="text-foreground font-medium text-sm italic">
                "Executive Matchmaking in Miami for Busy Professionals"
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Instead of "we're in Miami," we say "we solve Miami dating for high-standard professionals who don't have time to swipe." That framing merges "status" + "time protection." Elite Connections is currently only selling "status."
              </p>
            </div>
          </div>
        </Card>

        {/* VIDA Select Analysis */}
        <Card className="p-8 mb-8 border-2 border-primary bg-primary/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">VIDA Select</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Core High-Intent Keywords VIDA Already Ranks For</h4>
              <p className="text-sm text-muted-foreground mb-4 italic">(Commercial / Transactional / Navigational = TRUE in your export)</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground mb-3">1. Cost / value evaluation (people deciding whether to pay for dating)</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>eharmony cost</strong> (~8,400/mo) → VIDA ranks</li>
                    <li>• <strong>is hinge x worth it</strong> (~2,000/mo) → VIDA ranks</li>
                    <li>• <strong>is tinder gold worth it</strong> (~1,400/mo) → VIDA ranks</li>
                    <li>• <strong>bumble premium cost</strong> (~600/mo) → VIDA ranks (~Pos 6)</li>
                    <li>• <strong>how much is raya</strong> (~700/mo) → VIDA ranks (~Pos 6)</li>
                    <li>• <strong>coffee meets bagel cost</strong> (~200/mo) → VIDA ~Pos 2</li>
                  </ul>
                </div>

                <div className="p-4 bg-background rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground mb-3">2. High-net-worth / exclusivity language</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>millionaire dating sites</strong> (~700/mo) → VIDA ~Pos 5</li>
                    <li>• <strong>matchmakers near me</strong> (~800/mo) → VIDA ~Pos 7</li>
                  </ul>
                </div>

                <div className="p-4 bg-background rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground mb-3">3. Breakpoint / exit searches (user is done with an app)</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>cancel bumble subscription</strong> (~800/mo) → VIDA ~Pos 11</li>
                    <li>• <strong>pof.com delete account</strong></li>
                    <li>• <strong>match com free trial</strong> (~200/mo) → VIDA ~Pos 5</li>
                    <li>• <strong>match free trial promo code</strong> (~60/mo) → VIDA ~Pos 3</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border-l-4 border-primary rounded">
                <p className="text-sm text-foreground">
                  These are extremely high-quality entry points because users are already showing buying behavior:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• They are either actively spending real money on dating products, OR</li>
                  <li>• They are actively quitting those products in frustration, OR</li>
                  <li>• They are searching for a curated / high-status experience.</li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground italic">
                  This is not casual traffic like "what's a cute first date outfit." This is "I am already paying or about to pay. I am ready to solve this."
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Strengths</h4>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg">
                  <p className="font-medium text-foreground mb-2">✅ VIDA is visible at "app monetization decision points."</p>
                  <p className="text-sm text-muted-foreground mb-2">Examples: eharmony cost, is tinder gold worth it, how much is raya</p>
                  <p className="text-sm text-muted-foreground">
                    These are moments where the user is deciding "Do I keep paying apps?" No other competitor in your data clearly specializes in intercepting that decision.
                  </p>
                </div>

                <div className="p-4 bg-background rounded-lg">
                  <p className="font-medium text-foreground mb-2">✅ VIDA is visible at "I'm done, shut it down" moments.</p>
                  <p className="text-sm text-muted-foreground mb-2">Example: cancel bumble subscription, pof.com delete account</p>
                  <p className="text-sm text-muted-foreground">
                    These are emotionally decisive searches. The user is already leaving DIY dating.
                  </p>
                </div>

                <div className="p-4 bg-background rounded-lg">
                  <p className="font-medium text-foreground mb-2">✅ VIDA is already touching status and selectivity</p>
                  <p className="text-sm text-muted-foreground">
                    millionaire dating sites, matchmakers near me
                  </p>
                </div>
              </div>

              <p className="mt-4 text-foreground font-semibold">
                In short: VIDA is already discovered at the exact points where users are most open to switching to a serious, paid matchmaking service.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Weaknesses / Gaps</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>⚠️ Local intent coverage is still light compared to Selective Search / Elite Connections. We're ranking for "matchmakers near me" but we aren't (yet) deploying focused "Matchmaker in Chicago / Miami / Houston / NYC for high-standard professionals" style pages.</li>
                <li>⚠️ We are not yet using competitor intercept pages (e.g. "Tawkify vs VIDA Select," "Selective Search vs VIDA Select," "Kelleher International cost vs VIDA Select model") to capture prospects who are actively checking competitor pricing.</li>
                <li>⚠️ Our high-intent pages (cost reviews, cancel app, etc.) are mostly written as information only. They don't always include a clear "Here's why a professional matchmaking service is the next logical step." That means we're getting the traffic but not always converting it efficiently.</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg border-2 border-primary">
              <h4 className="text-lg font-semibold text-foreground mb-4">Opportunities for VIDA (Directly Supported by the Data)</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground mb-2">1. Competitor comparison / cost pages</p>
                  <p className="text-sm text-muted-foreground">
                    Target tawkify cost, kelleher international cost, selective search cost, and build structured "VIDA Select vs [Competitor]" content.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    <strong>Objective:</strong> intercept prospects who are literally 1–2 clicks away from booking with another firm.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground mb-2">2. Executive/local landing pages</p>
                  <p className="text-sm text-muted-foreground">
                    Build "Executive Matchmaking in [City] for High-Standard Professionals."
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Target competitor-owned keywords like matchmaker chicago, miami matchmaker, matchmakers in houston.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    <strong>Positioning:</strong> "We protect your time by screening for quality. We are not swipe culture."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Competitive Position Overview Table */}
        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Competitive Position Overview</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Competitor</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Focus</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Strength</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Weakness</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Tawkify</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">High-volume frustration with modern dating apps, plus brand protection on their pricing.</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Captures users early, when they're upset.</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Less focus on high-net-worth / executive framing.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Selective Search</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Location ("matchmaker + city"), cost, trust, values (Christian matchmaking).</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Turns "I want local help now" into consultation leads.</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Less modern framing (they don't address app burnout).</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Kelleher International</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Elite, global, high-end, "international matchmaker," "high-end matchmaker," "professional matchmaking service."</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Directly attracts wealthy, status-driven buyers.</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Does not appear to handle "I'm paying apps and it's not working" messaging.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 font-medium text-foreground">Elite Connections</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">"Elite matchmaker" + wealthy metro areas (Miami, Palm Beach, NYC).</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">"We're here in your city, we serve high-value clients like you."</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">Less proof of modern efficiency/process; mostly status messaging.</td>
                </tr>
                <tr className="border-b-2 border-primary bg-primary/5">
                  <td className="py-3 px-4 font-medium text-foreground">VIDA Select</td>
                  <td className="py-3 px-4 text-sm text-foreground">Cost/value of dating solutions, breaking point behavior, early local / status terms.</td>
                  <td className="py-3 px-4 text-sm text-foreground">VIDA is visible exactly when users are deciding to stop wasting time and money on DIY dating.</td>
                  <td className="py-3 px-4 text-sm text-foreground">Have not fully built local executive matchmaking landing pages or competitor intercept pages.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Final Summary */}
        <Card className="p-8 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Final Summary</h3>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-2">1. The market is splitting into two acquisition styles:</p>
                <ul className="space-y-1 text-sm opacity-90 ml-6">
                  <li>• "Dating apps are failing me, I need help" (Tawkify).</li>
                  <li>• "I am a successful professional and I expect quality, locally and privately" (Selective Search, Kelleher, Elite Connections).</li>
                </ul>
              </div>

              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-2">2. VIDA Select ranks at the pivot point between those two states:</p>
                <p className="text-sm opacity-90">
                  We catch users when they're done paying for apps (eharmony cost, is tinder gold worth it, cancel bumble subscription).
                </p>
                <p className="text-sm opacity-90 mt-2">
                  We also touch status/wealth intent (millionaire dating sites, matchmakers near me).
                </p>
              </div>

              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-2">3. Strategic next steps for VIDA are clear and supported by data:</p>
                <ul className="space-y-1 text-sm opacity-90 ml-6">
                  <li>• Build geo/executive landing pages to compete with Selective Search / Elite Connections.</li>
                  <li>• Build competitor comparison and cost pages to intercept "Tawkify cost," "Kelleher cost," etc.</li>
                  <li>• Add direct matchmaking CTAs to existing high-intent pages so we convert instead of just inform.</li>
                </ul>
              </div>

              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-2">4. Net result:</p>
                <p className="text-sm opacity-90">
                  We are already attracting users at the moment they're most ready to switch to a real matchmaking service.
                </p>
                <p className="text-sm opacity-90 mt-2 font-semibold">
                  We now need to formalize that position and claim it as our category.
                </p>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
};

export default CompetitorsAudit;