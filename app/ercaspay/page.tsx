import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ErcasPayPage() {
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
              <span className="text-sm font-medium text-primary">Payment Gateway</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-balance">
              Accept Payments <span className="text-primary">Everywhere</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              ErcasPay is a fully customizable, enterprise-grade payment gateway that enables organizations to accept
              and manage payments across online and offline channels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group">
                Start Accepting Payments
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Payment Methods</h2>
              <p className="text-lg text-muted-foreground">
                Accept payments in 9 currencies through multiple flexible options
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Card Payments", desc: "Local and international card payments with PCI-DSS compliance." },
                { title: "Bank Transfers", desc: "Direct bank transfers with automatic reconciliation." },
                { title: "QR Code Payments", desc: "Contactless payments via QR codes for retail and online." },
                { title: "USSD", desc: "Reach customers without smartphones or internet." },
                { title: "Virtual Accounts", desc: "NGN and multi-currency virtual accounts for collections." },
                { title: "Wallets", desc: "NGN wallet support for seamless local transactions." },
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

            <div className="p-8 rounded-xl border border-primary/20 bg-primary/5">
              <h3 className="font-semibold mb-4">Supported Currencies</h3>
              <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
                {["NGN", "USD", "CAD", "GBP", "GHS", "GMD", "KES", "EUR", "ZAR"].map((curr) => (
                  <div key={curr} className="text-center font-medium text-primary">
                    {curr}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-In Tools */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Built-In Tools</h2>
              <p className="text-lg text-muted-foreground">Everything you need to manage payments at scale</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Invoicing", desc: "Create and send professional invoices with payment links." },
                { icon: Zap, title: "Payment Links", desc: "Generate shareable payment links in seconds." },
                { icon: Globe, title: "E-commerce Checkout", desc: "Fully customizable checkout experience." },
                { icon: CheckCircle, title: "Bulk Payments", desc: "Send and manage bulk payments efficiently." },
                {
                  icon: Shield,
                  title: "Coupons & Promotions",
                  desc: "Create promotional campaigns and discount codes.",
                },
                { icon: Zap, title: "Real-time Reporting", desc: "Comprehensive dashboards and transaction reports." },
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

      {/* Who It's For */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Who It's For</h2>
              <p className="text-lg text-muted-foreground">Built for organizations of every size and industry</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "SMEs & Enterprises", desc: "Scale your payment operations without complex integrations." },
                {
                  title: "Banks & Financial Institutions",
                  desc: "Complement your core systems with modern payment rails.",
                },
                { title: "Fintechs & Platforms", desc: "Speed to market with white-label payment solutions." },
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

      {/* Integration & Onboarding */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Fast Onboarding & Integration</h2>
              <p className="text-lg text-muted-foreground">
                Get up and running quickly with our enterprise-grade platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">5-Minute Onboarding</h3>
                    <p className="text-muted-foreground">
                      Get your account set up and ready to accept payments in minutes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Easy Integration</h3>
                    <p className="text-muted-foreground">Simple REST APIs and pre-built SDKs for quick integration.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">Local customer support available around the clock.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl p-8 border border-primary/20">
                <h3 className="font-semibold mb-6">Key Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transaction Success Rate</span>
                    <span className="font-semibold text-primary">99%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Transactions</span>
                    <span className="font-semibold text-primary">1M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Customers</span>
                    <span className="font-semibold text-primary">200K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Uptime</span>
                    <span className="font-semibold text-primary">99%+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Ready to Accept Payments at Scale?</h2>
              <p className="text-lg text-muted-foreground">
                Start your free trial or talk to our team about your specific needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2">
                Start Accepting Payments
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
