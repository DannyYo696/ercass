import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-foreground/5 animate-fade-in">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/image.png" alt="Ercas" className="h-8 w-auto" />
              <span className="font-bold text-lg">ERCAS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Digital finance infrastructure built for institutions that require reliability, compliance, and scale.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ercaspay"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ErcasPay
                </Link>
              </li>
              <li>
                <Link
                  href="/sagecloud"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  SageCloud
                </Link>
              </li>
              <li>
                <Link
                  href="/sagecloud-business"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  SageCloud Business
                </Link>
              </li>
              <li>
                <Link
                  href="/sagehive"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  SageHive
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@ercas.ng" className="hover:text-foreground transition-colors">
                  hello@ercas.ng
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+234" className="hover:text-foreground transition-colors">
                  +234 (0) XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ercas Integrated Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
