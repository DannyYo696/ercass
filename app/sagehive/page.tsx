import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SageHivePage() {
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
              <span className="text-sm font-medium text-primary">Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-balance">
              Cloud Infrastructure <span className="text-primary">Without Single Points of Failure</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              SageHive is a decentralized cloud hosting platform designed for institutions that require uptime,
              resilience, and infrastructure control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group">
                Talk to Infrastructure Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">What Makes It Different</h2>
              <p className="text-lg text-muted-foreground">
                Decentralized peer-to-peer infrastructure built for resilience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Decentralized Architecture",
                  desc: "No single points of failure. Peer-to-peer infrastructure for true resilience.",
                },
                {
                  icon: Shield,
                  title: "Enhanced Fault Tolerance",
                  desc: "If one node fails, your systems continue operating seamlessly.",
                },
                {
                  icon: Zap,
                  title: "Data Sovereignty",
                  desc: "Keep your data where it needs to be with regional deployment options.",
                },
                {
                  icon: CheckCircle,
                  title: "Predictable Pricing",
                  desc: "No surprise costs. Clear, transparent pricing model.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Reliability */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Enterprise-Grade Reliability</h2>
              <p className="text-lg text-muted-foreground">Built for mission-critical workloads</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Redundant Systems",
                    desc: "Multiple layers of redundancy across all components.",
                  },
                  {
                    icon: Zap,
                    title: "Multi-Provider Resilience",
                    desc: "Avoid vendor lock-in with multi-cloud support.",
                  },
                  {
                    icon: Globe,
                    title: "Global Distribution",
                    desc: "Deploy across multiple regions for latency optimization.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Automated Failover",
                    desc: "Instant failover without manual intervention.",
                  },
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
                <h3 className="font-semibold mb-6">SLA Commitments</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Infrastructure Uptime</span>
                      <span className="text-primary font-semibold">99.99%</span>
                    </div>
                    <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div className="h-full w-[99.99%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Mean Time to Recovery</span>
                      <span className="text-primary font-semibold">&lt; 60s</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Disaster Recovery</span>
                      <span className="text-primary font-semibold">RTO &lt; 5m</span>
                    </div>
                  </div>
                </div>
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
              <p className="text-lg text-muted-foreground">
                Built for institutions with strict infrastructure requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Banks & Regulated Institutions",
                  desc: "Deploy with full infrastructure control and compliance.",
                },
                { title: "Fintechs & High-Traffic Platforms", desc: "Ensure 99.99% uptime for your users." },
                {
                  title: "Enterprises with Sensitive Data",
                  desc: "Keep control of your infrastructure and data residency.",
                },
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

      {/* Technical Specifications */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Technical Specifications</h2>
              <p className="text-lg text-muted-foreground">Enterprise infrastructure for modern applications</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Container Orchestration", desc: "Kubernetes-based orchestration for seamless scaling." },
                { title: "Load Balancing", desc: "Intelligent load distribution across nodes." },
                { title: "Storage Solutions", desc: "Block, object, and distributed storage options." },
                { title: "Network Isolation", desc: "VPC and network segmentation for security." },
                { title: "Monitoring & Logging", desc: "Real-time monitoring with historical log retention." },
                { title: "API-First Management", desc: "Manage infrastructure via REST APIs." },
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
              <h2 className="text-4xl font-bold">Ready to Deploy with Confidence?</h2>
              <p className="text-lg text-muted-foreground">
                Talk to our infrastructure team about your specific requirements and get a custom deployment plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2">
                Talk to Infrastructure Team
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
