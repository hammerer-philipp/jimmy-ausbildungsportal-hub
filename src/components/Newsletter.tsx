import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie eine E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Hier würde normalerweise die Supabase-Integration kommen
    try {
      // Simuliere API-Call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Erfolgreich angemeldet!",
        description: "Sie erhalten in Kürze eine Bestätigungs-E-Mail.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bei der Anmeldung ist ein Fehler aufgetreten.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        type="email"
        placeholder="Ihre E-Mail-Adresse"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-background border-border focus:border-jimmy-gold dark:bg-card dark:border-border/60 dark:text-foreground"
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-jimmy-gold to-yellow-400 text-jimmy-header hover:from-yellow-400 hover:to-jimmy-gold dark:text-jimmy-header"
      >
        {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
      </Button>
    </form>
  );
};

export default Newsletter;