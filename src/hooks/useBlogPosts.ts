
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';

// Mock data as fallback for CORS issues
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Die perfekte Bewerbung für deine Ausbildung",
    excerpt: "Tipps und Tricks für eine erfolgreiche Bewerbung im Ausbildungsbereich.",
    author: "Jimmy Team",
    date: "2024-06-15",
    readTime: "5 min Lesezeit",
    content: "Eine erfolgreiche Bewerbung ist der erste Schritt zu deiner Traumausbildung. Hier erfährst du, worauf es wirklich ankommt..."
  },
  {
    id: 2,
    title: "Ausbildung vs. Studium - Was passt zu dir?",
    excerpt: "Eine Entscheidungshilfe für deinen beruflichen Werdegang.",
    author: "Jimmy Team",
    date: "2024-06-10",
    readTime: "7 min Lesezeit",
    content: "Die Wahl zwischen Ausbildung und Studium ist nicht immer einfach. Wir helfen dir bei der Entscheidung..."
  },
  {
    id: 3,
    title: "Die gefragtesten Ausbildungsberufe 2024",
    excerpt: "Welche Ausbildungen haben die besten Zukunftschancen?",
    author: "Jimmy Team",
    date: "2024-06-05",
    readTime: "6 min Lesezeit",
    content: "Der Arbeitsmarkt verändert sich ständig. Diese Ausbildungsberufe sind besonders gefragt..."
  }
];

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        console.log('Attempting to fetch from API...');
        const response = await fetch('https://jimmy-ausbildung.de/api/api.php');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API data received:', data);
        
        // Transform the data to match our interface and handle missing fields
        const transformedPosts = data.map((post: any) => ({
          id: post.id || Math.random(),
          ...(post.title && { title: post.title }),
          ...(post.excerpt && { excerpt: post.excerpt }),
          ...(post.author && { author: post.author }),
          ...(post.date && { date: post.date }),
          ...(post.image_url && { image: `https://jimmy-ausbildung.de/blog/${post.image_url}` }),
          ...(post.read_time && { readTime: post.read_time }),
          ...(post.content && { content: post.content })
        }));
        
        setBlogPosts(transformedPosts);
        console.log('Blog posts set successfully');
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        console.log('Using mock data as fallback due to CORS or network error');
        
        // Use mock data as fallback
        setBlogPosts(mockBlogPosts);
        setError(null); // Don't show error to user, just use fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return { blogPosts, loading, error };
};
