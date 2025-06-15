
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

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <ModernHeader />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <p className="text-red-500">{error}</p>
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
