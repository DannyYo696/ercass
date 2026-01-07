import { ArrowRight, CheckCircle, Shield, Zap, Globe, Code, Lock, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-foreground/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Enterprise-Grade Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance">
              Digital Finance Infrastructure <span className="text-primary">Built for Scale</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Ercas powers the payment, collections, value-added services, and cloud infrastructure that banks,
              enterprises, and governments rely on to operate securely at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group hover:shadow-lg transition-all duration-300"
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/20 hover:border-primary hover:bg-primary/5 bg-transparent"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">What We Do</h2>
              <p className="text-lg text-muted-foreground">
                Ercas is a licensed digital finance infrastructure provider.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group hover:bg-white/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Accept & Manage Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Across multiple channels with unified reconciliation and enterprise controls.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group hover:bg-white/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Launch Value-Added Services</h3>
                <p className="text-sm text-muted-foreground">
                  Without complex builds. APIs or white-label deployments.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group hover:bg-white/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Run Mission-Critical Systems</h3>
                <p className="text-sm text-muted-foreground">
                  On resilient, decentralized infrastructure built for uptime.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group hover:bg-white/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Modular Ecosystem</h3>
                <p className="text-sm text-muted-foreground">
                  Each product works independently or as part of full-stack infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Product Ecosystem</h2>
              <p className="text-lg text-muted-foreground">Everything you need to power digital finance at scale.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/ercaspay" className="group">
                <div className="h-full p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">ErcasPay</h3>
                  <p className="text-muted-foreground mb-6">Accept payments everywhere. Scale without limits.</p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/sagecloud" className="group">
                <div className="h-full p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">SageCloud</h3>
                  <p className="text-muted-foreground mb-6">Embed value-added services into your product.</p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/sagecloud-business" className="group">
                <div className="h-full p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">SageCloud Business</h3>
                  <p className="text-muted-foreground mb-6">Enterprise VAS built for operations teams.</p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/sagehive" className="group">
                <div className="h-full p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">SageHive</h3>
                  <p className="text-muted-foreground mb-6">Cloud infrastructure without single points of failure.</p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gradient-to-br from-background to-foreground/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Built on Modern Infrastructure</h2>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade technology powering digital finance at scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">E-Wallet Solutions</h3>
                <p className="text-muted-foreground">
                  Complete digital wallet infrastructure for secure payment management and fund transfers across
                  networks.
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Payment Processing</h3>
                <p className="text-muted-foreground">
                  Real-time payment processing with multi-channel support (cards, transfers, QR codes, USSD).
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Prepaid Card Management</h3>
                <p className="text-muted-foreground">
                  Full lifecycle management of prepaid cards including issuance, activation, and transaction tracking.
                </p>
              </div>

              <div className="group p-8 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Banking Platform</h3>
                <p className="text-muted-foreground">
                  Comprehensive banking infrastructure including accounts, deposits, and multi-currency support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Grade Features */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Enterprise-Grade Security & Compliance</h2>
              <p className="text-lg text-muted-foreground">
                Built with institutional security and regulatory compliance at the core.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "PCIDSS Certified",
                  desc: "Fully certified for payment card industry security standards with continuous compliance audits.",
                },
                {
                  icon: Lock,
                  title: "PSSP Licensed",
                  desc: "Licensed Payment Service Provider by the Central Bank of Nigeria with regulatory oversight.",
                },
                {
                  icon: CheckCircle,
                  title: "NDPA Compliant",
                  desc: "Complete compliance with Nigeria Data Protection Regulation and international data standards.",
                },
                {
                  icon: Zap,
                  title: "99% Uptime SLA",
                  desc: "Mission-critical infrastructure with guaranteed uptime for your business operations.",
                },
                {
                  icon: Globe,
                  title: "Decentralized Infrastructure",
                  desc: "Peer-to-peer infrastructure design eliminates single points of failure for maximum resilience.",
                },
                {
                  icon: TrendingUp,
                  title: "Real-Time Monitoring",
                  desc: "24/7 monitoring, alerting, and 99.9% transaction success rate with instant reporting.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-foreground/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">What People Have to Say</h2>
              <p className="text-lg text-muted-foreground">
                Trusted by institutions across Africa for digital finance operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Ercas transformed how we handle collections. We process 10x more transactions with zero downtime.",
                  author: "Chioma Okafor",
                  role: "Head of Finance, Education Tech Startup",
                  sector: "Education",
                },
                {
                  quote:
                    "The API integration was seamless. We had our VAS platform live in less than a week with full support.",
                  author: "Tunde Adeleke",
                  role: "CTO, Fintech Company",
                  sector: "Financial Services",
                },
                {
                  quote:
                    "We trust Ercas with mission-critical payment infrastructure for our 2M+ users across West Africa.",
                  author: "Amara Okonkwo",
                  role: "CEO, Pan-African Platform",
                  sector: "Enterprise",
                },
                {
                  quote: "The compliance and security features gave us instant confidence in their infrastructure.",
                  author: "David Eze",
                  role: "Compliance Officer, Government Agency",
                  sector: "Public Sector",
                },
                {
                  quote: "Support team is phenomenal. Available 24/7 and deeply knowledgeable about our use cases.",
                  author: "Grace Mensah",
                  role: "Operations Lead, Religious Organization",
                  sector: "Non-Profit",
                },
                {
                  quote:
                    "Ercas enabled us to scale globally. Multi-currency support and local market expertise is unmatched.",
                  author: "Kofi Mensah",
                  role: "Business Director, E-Commerce",
                  sector: "Retail",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-xl border border-border/50 hover:border-primary/50 bg-card hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="w-4 h-4 bg-primary rounded-full group-hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.sector}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Ercas */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Why Ercas</h2>
              <p className="text-lg text-muted-foreground">
                Built for institutions that treat payments as strategic assets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Licensed & Compliant",
                  desc: "PSSP licensed by CBN, PCI-DSS certified, NDPA compliant.",
                },
                {
                  icon: Zap,
                  title: "Mission-Critical Scale",
                  desc: "Built for high-volume, mission-critical use cases with 99% uptime.",
                },
                {
                  icon: Globe,
                  title: "Enterprise-Ready",
                  desc: "White-label deployments and fully customizable solutions.",
                },
                {
                  icon: Users,
                  title: "African Markets",
                  desc: "Designed for African markets with global capability.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Build on Infrastructure You Can Trust</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how Ercas can power your institution's digital finance operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group hover:shadow-lg transition-all duration-300"
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/20 hover:border-primary bg-transparent"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
