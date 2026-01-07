import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Future of Payment Infrastructure in Africa",
      excerpt: "How decentralized infrastructure is reshaping financial services across the continent.",
      category: "Infrastructure",
      author: "Sarah Johnson",
      date: "Jan 15, 2025",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Scaling Payment Systems for Enterprise Customers",
      excerpt: "Best practices for building robust payment systems that handle millions of transactions.",
      category: "Payments",
      author: "Michael Chen",
      date: "Jan 12, 2025",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "API Security: Protecting Your Financial Data",
      excerpt: "Essential security practices for APIs handling sensitive financial information.",
      category: "Security",
      author: "Emma Davis",
      date: "Jan 10, 2025",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Building Value-Added Services: Case Studies",
      excerpt: "How leading fintechs are building revenue through VAS integration.",
      category: "Product",
      author: "James Wilson",
      date: "Jan 8, 2025",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Compliance in Digital Finance: A Regulatory Guide",
      excerpt: "Navigating the complex regulatory landscape for payment service providers.",
      category: "Compliance",
      author: "Lisa Anderson",
      date: "Jan 5, 2025",
      readTime: "12 min read",
    },
    {
      id: 6,
      title: "Cloud Infrastructure Resilience in Financial Services",
      excerpt: "Why decentralized hosting matters for mission-critical financial systems.",
      category: "Infrastructure",
      author: "David Roberts",
      date: "Dec 28, 2024",
      readTime: "9 min read",
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
              Insights on Digital Finance <span className="text-primary">& Infrastructure</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              Latest articles, best practices, and industry insights from the Ercas team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg"
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>

                    <div className="flex flex-col gap-4 pt-6 border-t">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/5 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Stay Updated</h2>
              <p className="text-lg text-muted-foreground">
                Get the latest insights on digital finance and infrastructure delivered to your inbox.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 transition-all">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
