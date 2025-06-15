
import { useState } from 'react';
import { ModernHeader } from '@/components/modern/ModernHeader';
import Footer from '@/components/Footer';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BlogPostDialog } from '@/components/blog/BlogPostDialog';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { BlogPost } from '@/types/blog';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { blogPosts, loading, error } = useBlogPosts();

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
        <BlogHero />

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  index={index}
                  onPostClick={setSelectedPost}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <BlogPostDialog
        selectedPost={selectedPost}
        onClose={() => setSelectedPost(null)}
      />

      <Footer />
    </div>
  );
};

export default Blog;
