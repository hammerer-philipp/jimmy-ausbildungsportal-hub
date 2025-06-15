
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
  onPostClick: (post: BlogPost) => void;
}

export const BlogPostCard = ({ post, index, onPostClick }: BlogPostCardProps) => {
  return (
    <motion.div
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
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-jimmy-gold hover:text-jimmy-gold/80 group self-start" 
            onClick={() => onPostClick(post)}
          >
            Artikel lesen
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
