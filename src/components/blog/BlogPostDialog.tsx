
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogPostDialogProps {
  selectedPost: BlogPost | null;
  onClose: () => void;
}

export const BlogPostDialog = ({ selectedPost, onClose }: BlogPostDialogProps) => {
  return (
    <Dialog open={!!selectedPost} onOpenChange={(isOpen) => !isOpen && onClose()}>
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
  );
};
