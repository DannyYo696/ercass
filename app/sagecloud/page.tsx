import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SageCloudPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-background via-background to-foreground/5 overflow-hidden py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">API Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-balance">
              Embed Value-Added Services <span className="text-primary">Into Your Product</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              SageCloud is an API-first platform that allows businesses, banks, and fintechs to embed value-added
              financial services directly into their applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group">
                Explore APIs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Available Services</h2>
              <p className="text-lg text-muted-foreground">Launch new revenue streams through our API ecosystem</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Airtime & Data", desc: "Offer mobile airtime and data bundles across major networks." },
                { title: "Utility Payments", desc: "Enable bill payments for electricity, water, internet, and more." },
                { title: "Bulk SMS", desc: "Send campaigns to customers with delivery tracking and analytics." },
                { title: "KYC Services", desc: "BVN and NIN verification for compliance and user onboarding." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <CheckCircle className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Why It Matters</h2>
              <p className="text-lg text-muted-foreground">Launch new revenue lines without complex backend systems</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Zero Backend Complexity",
                    desc: "We manage all the infrastructure and complexity.",
                  },
                  {
                    icon: Globe,
                    title: "Instant Integration",
                    desc: "REST APIs with SDKs in your preferred language.",
                  },
                  { icon: Shield, title: "Fully Compliant", desc: "All services licensed and regulatory compliant." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl p-8 border border-primary/20">
                <h3 className="font-semibold mb-6">API Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Real-time transaction status",
                    "Webhook notifications",
                    "Detailed analytics & reporting",
                    "Sandbox environment",
                    "Rate limiting per tier",
                    "99.9% uptime SLA",
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Who It's For</h2>
              <p className="text-lg text-muted-foreground">Built for developers and product teams</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Fintechs & SaaS",
                  desc: "Add financial services to your product without managing infrastructure.",
                },
                { title: "Banks & OFIs", desc: "Modernize your offering with a flexible, scalable API platform." },
                { title: "Enterprises", desc: "Integrate into your custom applications for your specific needs." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group hover:bg-white/50"
                >
                  <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation & Support */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Developer Resources</h2>
              <p className="text-lg text-muted-foreground">Everything you need to integrate SageCloud</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "API Documentation",
                  desc: "Complete endpoint reference with code examples and best practices.",
                },
                { title: "SDKs & Libraries", desc: "Official libraries for Node.js, Python, PHP, and more." },
                { title: "Sandbox Environment", desc: "Test integrations without affecting production data." },
                { title: "Webhook Support", desc: "Real-time event notifications for your application." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <Zap className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Ready to Embed Financial Services?</h2>
              <p className="text-lg text-muted-foreground">
                Start exploring our APIs or talk to our team about your integration needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2">
                Explore APIs
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
