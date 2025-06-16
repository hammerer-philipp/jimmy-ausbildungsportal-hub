

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

    // Einfache E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://jimmy-ausbildung.de/api/newsletter_api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          action: 'subscribe'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Erfolgreich angemeldet!",
          description: data.message,
        });
        setEmail('');
      } else {
        toast({
          title: "Fehler",
          description: data.message || "Bei der Anmeldung ist ein Fehler aufgetreten.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Newsletter API Error:', error);
      toast({
        title: "Fehler",
        description: "Verbindung zur API fehlgeschlagen. Bitte versuchen Sie es später erneut.",
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
        required
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

