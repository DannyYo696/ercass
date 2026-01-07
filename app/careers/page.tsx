import { ArrowRight, Briefcase, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Build scalable payment infrastructure using Node.js and Go.",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Lead product strategy for ErcasPay and SageCloud platforms.",
    },
    {
      id: 3,
      title: "Solutions Architect",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Work with enterprise clients to design custom Ercas solutions.",
    },
    {
      id: 4,
      title: "Frontend Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Build beautiful and responsive UIs for enterprise platforms.",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Manage and optimize SageHive cloud infrastructure at scale.",
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Operations",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Drive customer adoption and ensure success with Ercas products.",
    },
  ]

  const values = [
    {
      icon: Briefcase,
      title: "Build with Purpose",
      description: "We build infrastructure that powers financial inclusion across Africa.",
    },
    {
      icon: Users,
      title: "People First",
      description: "Our team is our greatest asset. We invest in growth and development.",
    },
    {
      icon: Globe,
      title: "Think Global",
      description: "Solve problems with a global perspective rooted in African solutions.",
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-balance">
              Build Digital Finance <span className="text-primary">Infrastructure</span> With Us
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              Join the team powering modern payments and financial services across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Our Culture & Values</h2>
              <p className="text-lg text-muted-foreground">What we stand for</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group hover:bg-white/50"
                >
                  <value.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Open Positions</h2>
              <p className="text-lg text-muted-foreground">Currently hiring talented individuals</p>
            </div>

            <div className="space-y-4">
              {openPositions.map((position) => (
                <Link key={position.id} href={`/careers/${position.id}`}>
                  <div className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:bg-white/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {position.department}
                          </span>
                          <span className="text-sm text-muted-foreground">{position.location}</span>
                          <span className="text-sm text-muted-foreground">{position.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Why Join Ercas</h2>
              <p className="text-lg text-muted-foreground">What we offer our team</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Competitive Compensation", desc: "Market-leading salaries and benefits." },
                { title: "Equity & Growth", desc: "Own part of the company and grow with us." },
                { title: "Flexible Work", desc: "Flexible hours and remote work options." },
                { title: "Professional Development", desc: "Learning budget and training opportunities." },
                { title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs." },
                { title: "Meaningful Impact", desc: "Build infrastructure that powers Africa's financial future." },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Can't Find Your Role?</h2>
              <p className="text-lg text-muted-foreground">
                Send us your resume and tell us about yourself. We're always looking for talented people.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 group mx-auto"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
