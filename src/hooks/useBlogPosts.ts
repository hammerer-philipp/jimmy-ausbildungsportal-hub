
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://jimmy-marken.de/newwww/api.php');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        
        // Transform the data to match our interface and handle missing fields
        const transformedPosts = data.map((post: any) => ({
          id: post.id || Math.random(), // Fallback ID if missing
          ...(post.title && { title: post.title }),
          ...(post.excerpt && { excerpt: post.excerpt }),
          ...(post.author && { author: post.author }),
          ...(post.date && { date: post.date }),
          ...(post.image_url && { image: `https://jimmy-marken.de/blog/${post.image_url}` }),
          ...(post.read_time && { readTime: post.read_time }),
          ...(post.content && { content: post.content })
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

  return { blogPosts, loading, error };
};
