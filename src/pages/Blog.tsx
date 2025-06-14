import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  // Beispiel Blog-Posts (normalerweise aus Supabase)
  const blogPosts = [
    {
      id: 1,
      title: "Wie Jimmy den Bewerbungsprozess revolutioniert",
      excerpt: "Erfahren Sie, wie unser innovatives Portal Schülern und Unternehmen hilft, zueinander zu finden.",
      author: "Jimmy Team",
      date: "2024-01-15",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Tipps für ein erfolgreiches Schülerprofil",
      excerpt: "So erstellen Sie ein Profil, das Arbeitgeber überzeugt und Ihre Stärken hervorhebt.",
      author: "Sarah Miller",
      date: "2024-01-10",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Warum Unternehmen auf Jimmy setzen",
      excerpt: "Erfolgsgeschichten von Unternehmen, die bereits über Jimmy ihre Auszubildenden gefunden haben.",
      author: "Max Weber",
      date: "2024-01-05",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-jimmy-body text-jimmy-gold">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Jimmy Blog</h1>
          <p className="text-xl text-jimmy-gold/80 max-w-2xl mx-auto">
            Insights, Tipps und Neuigkeiten rund um das Thema Ausbildung und Karriere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-jimmy-header border-jimmy-gold/20 hover:border-jimmy-gold/40 transition-colors">
              <CardHeader>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardTitle className="text-jimmy-gold text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-jimmy-gold/80 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-sm text-jimmy-gold/60 mb-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                  </div>
                </div>
                
                <Button className="bg-jimmy-gold text-jimmy-header hover:bg-yellow-400">
                  Artikel lesen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-jimmy-gold text-jimmy-gold hover:bg-jimmy-gold hover:text-jimmy-header">
            Weitere Artikel laden
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;