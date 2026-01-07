import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SageCloudBusinessPage() {
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
              <span className="text-sm font-medium text-primary">Enterprise Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-balance">
              Enterprise VAS <span className="text-primary">Built for Operations</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              A web-based enterprise platform that allows organizations to manage bulk airtime, data, bills, and SMS
              without relying on retail banking tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group">
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Core Capabilities</h2>
              <p className="text-lg text-muted-foreground">Everything your operations team needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Bulk Airtime & Data", desc: "Distribute to customers and employees at scale." },
                { icon: Globe, title: "Bills Payment", desc: "Pay utility bills for your organization." },
                { icon: CheckCircle, title: "Bulk SMS", desc: "Send campaigns with delivery tracking." },
                {
                  icon: Shield,
                  title: "Wallet-Backed Funding",
                  desc: "Centralized wallet controls and approval workflows.",
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

      {/* Enterprise Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Enterprise-Grade Features</h2>
              <p className="text-lg text-muted-foreground">Built for institutional operations teams</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Role-Based Access",
                    desc: "Granular permissions for different team members.",
                  },
                  { icon: Zap, title: "Transaction Visibility", desc: "Real-time and historical transaction reports." },
                  { icon: Globe, title: "Institution Branding", desc: "White-label platform with your branding." },
                  { icon: CheckCircle, title: "Approval Workflows", desc: "Multi-level approval for transactions." },
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
                <h3 className="font-semibold mb-6">Compliance & Security</h3>
                <ul className="space-y-3">
                  {[
                    "PCI-DSS certified",
                    "End-to-end encryption",
                    "Audit logs & trails",
                    "Data residency options",
                    "Incident response SLA",
                    "Regular penetration testing",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
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
              <p className="text-lg text-muted-foreground">Designed for large organizations</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Corporates & FMCGs", desc: "Manage employee benefits and customer loyalty programs." },
                { title: "Banks & OFIs", desc: "Offer bulk services to your corporate clients." },
                { title: "Distributor Networks", desc: "Manage payments across your entire network." },
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

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Common Use Cases</h2>
              <p className="text-lg text-muted-foreground">How organizations use SageCloud Business</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Employee Engagement", desc: "Provide airtime and data to employees as benefits." },
                { title: "Customer Loyalty", desc: "Reward customers with airtime or data bundles." },
                { title: "Bulk Bill Payments", desc: "Manage utility payments across multiple locations." },
                { title: "Distribution Networks", desc: "Manage payments and recharges for distributors." },
                { title: "Campaign Marketing", desc: "Send bulk SMS campaigns with targeting." },
                { title: "Expense Management", desc: "Track and approve telecommunications expenses." },
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

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Ready to Transform Your Operations?</h2>
              <p className="text-lg text-muted-foreground">
                Request a demo and see how SageCloud Business can streamline your operations team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
