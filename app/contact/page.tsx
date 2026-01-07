import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
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
              Let's Talk <span className="text-primary">About Your Needs</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              Get in touch with our team to discuss how Ercas can power your institution's digital finance operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 animate-fade-in-up">
            {/* Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg gap-2 group">
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@ercas.ng</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+234 (0) XXX XXX XXXX</p>
                    <p className="text-sm text-muted-foreground mt-1">Monday - Friday, 9am - 6pm WAT</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                    <p className="text-sm text-muted-foreground mt-1">Suite XXX, XXX Street</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Schedule a Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-primary hover:underline">
                      View Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-primary hover:underline">
                      See Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Request a Proposal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
