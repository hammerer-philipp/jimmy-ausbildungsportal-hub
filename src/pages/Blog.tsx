import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Wie Jimmy den Bewerbungsprozess revolutioniert",
      excerpt: "Erfahren Sie, wie unser innovatives Portal Schülern und Unternehmen hilft, zueinander zu finden.",
      author: "Jimmy Team",
      date: "2024-01-15",
      image: "/placeholder.svg",
      readTime: "5 Min"
    },
    {
      id: 2,
      title: "Tipps für ein erfolgreiches Schülerprofil",
      excerpt: "So erstellen Sie ein Profil, das Arbeitgeber überzeugt und Ihre Stärken hervorhebt.",
      author: "Sarah Miller",
      date: "2024-01-10",
      image: "/placeholder.svg",
      readTime: "3 Min"
    },
    {
      id: 3,
      title: "Warum Unternehmen auf Jimmy setzen",
      excerpt: "Erfolgsgeschichten von Unternehmen, die bereits über Jimmy ihre Auszubildenden gefunden haben.",
      author: "Max Weber",
      date: "2024-01-05",
      image: "/placeholder.svg",
      readTime: "7 Min"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Jimmy <span className="text-jimmy-gold">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Insights, Tipps und Neuigkeiten rund um das Thema Ausbildung und Karriere
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full">
                    <div className="aspect-video bg-gradient-to-br from-jimmy-gold/10 to-yellow-400/10 rounded-t-lg"></div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-jimmy-gold transition-colors">
                        {post.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <Button variant="ghost" className="p-0 h-auto text-jimmy-gold hover:text-jimmy-gold/80 group">
                        Artikel lesen
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-jimmy-gold/30 hover:bg-jimmy-gold/10">
                Weitere Artikel laden
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;