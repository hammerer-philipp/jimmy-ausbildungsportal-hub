
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
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title || 'Blog post'} 
            className="aspect-video object-cover rounded-t-lg"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-jimmy-gold transition-colors">
            {post.title || 'Untitled'}
          </CardTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            {post.author && (
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            )}
            {post.date && (
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
              </div>
            )}
            {post.readTime && <span>{post.readTime}</span>}
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          {post.excerpt && (
            <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
          )}
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
