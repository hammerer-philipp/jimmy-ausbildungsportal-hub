
import { useState, useEffect } from 'react';
import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  content: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://jimmy-marken.de/api.php');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        
        // Transform the data to match our interface and add correct image paths
        const transformedPosts = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          date: post.date,
          image: `https://jimmy-marken.de/blog/${post.image_url}`,
          readTime: post.read_time,
          content: post.content
        }));
        
        setBlogPosts(transformedPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Fehler beim Laden der Blog-Beiträge');
        
        // Fallback to static data if API fails
        setBlogPosts([
          {
            id: 1,
            title: "Wie Jimmy den Bewerbungsprozess revolutioniert",
            excerpt: "Erfahren Sie, wie unser innovatives Portal Schülern und Unternehmen hilft, zueinander zu finden.",
            author: "Jimmy Team",
            date: "2024-01-15",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
            readTime: "5 Min",
            content: "In der heutigen schnelllebigen Welt ist es für Schüler oft eine Herausforderung, den richtigen Ausbildungsplatz zu finden, und für Unternehmen ebenso schwierig, passende Kandidaten zu entdecken. Jimmy Ausbildung wurde ins Leben gerufen, um genau diese Lücke zu schließen. Unsere Plattform nutzt intelligente Algorithmen, um Profile von Schülern mit den Anforderungen von Unternehmen abzugleichen. Das Ergebnis? Ein effizienterer, transparenter und erfolgreicherer Bewerbungsprozess für beide Seiten. Schüler können ihre Stärken und Interessen präsentieren, während Unternehmen gezielt nach den Talenten suchen können, die sie für ihre Zukunft benötigen. So wird aus der oft mühsamen Suche eine spannende Entdeckungsreise."
          },
          {
            id: 2,
            title: "Tipps für ein erfolgreiches Schülerprofil",
            excerpt: "So erstellen Sie ein Profil, das Arbeitgeber überzeugt und Ihre Stärken hervorhebt.",
            author: "Sarah Miller",
            date: "2024-01-10",
            image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop",
            readTime: "3 Min",
            content: "Ein aussagekräftiges Profil ist Ihre digitale Visitenkarte auf Jimmy. Hier sind einige Tipps, um es zum Glänzen zu bringen: 1. Seien Sie authentisch: Zeigen Sie, wer Sie sind und was Sie begeistert. 2. Heben Sie Ihre Fähigkeiten hervor: Egal ob schulische Leistungen, Praktika oder Hobbys – jede Erfahrung zählt. 3. Ein professionelles Foto: Ein freundliches und professionelles Bild macht einen guten ersten Eindruck. 4. Seien Sie präzise: Beschreiben Sie klar und deutlich, was Sie suchen und was Sie anbieten. Ein gut gepflegtes Profil erhöht Ihre Chancen, von Top-Unternehmen entdeckt zu werden, erheblich."
          },
          {
            id: 3,
            title: "Warum Unternehmen auf Jimmy setzen",
            excerpt: "Erfolgsgeschichten von Unternehmen, die bereits über Jimmy ihre Auszubildenden gefunden haben.",
            author: "Max Weber",
            date: "2024-01-05",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
            readTime: "7 Min",
            content: "Immer mehr Unternehmen erkennen das Potenzial von Jimmy Ausbildung, um ihre zukünftigen Fachkräfte zu finden. Die Mustermann GmbH, ein mittelständisches Technologieunternehmen, berichtet: 'Dank Jimmy haben wir innerhalb von Wochen zwei hochmotivierte Auszubildende für unser IT-Team gefunden. Der Prozess war unkompliziert und die Qualität der Bewerber hervorragend.' Auch die Kreativagentur Visionär & Co. teilt ihre positive Erfahrung: 'Wir konnten gezielt nach kreativen Köpfen suchen und haben Talente entdeckt, die wir über traditionelle Wege nie erreicht hätten.' Diese Geschichten zeigen, dass Jimmy nicht nur ein Portal ist, sondern ein echter Partner für den Unternehmenserfolg."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <ModernHeader />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <p>Lade Blog-Beiträge...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              {error && (
                <p className="text-sm text-yellow-600 mt-4">
                  {error} - Zeige Beispiel-Beiträge
                </p>
              )}
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
                  <Card className="border-border/40 hover:border-jimmy-gold/40 transition-all duration-300 hover:shadow-lg group h-full flex flex-col">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="aspect-video object-cover rounded-t-lg"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop";
                      }}
                    />
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
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                      <Button variant="ghost" className="p-0 h-auto text-jimmy-gold hover:text-jimmy-gold/80 group self-start" onClick={() => setSelectedPost(post)}>
                        Artikel lesen
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Dialog open={!!selectedPost} onOpenChange={(isOpen) => !isOpen && setSelectedPost(null)}>
        <DialogContent className="sm:max-w-[625px]">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl mb-2">{selectedPost.title}</DialogTitle>
                <DialogDescription asChild>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(selectedPost.date).toLocaleDateString('de-DE')}</span>
                    </div>
                    <span>{selectedPost.readTime}</span>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 text-muted-foreground max-h-[60vh] overflow-y-auto">
                <p className="whitespace-pre-line">{selectedPost.content}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;
