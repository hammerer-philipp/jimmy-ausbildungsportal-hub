
import { useState, useEffect } from 'react';

export interface PresseMitteilung {
  id: number;
  title: string;
  pdf_url: string;
  created_at: string;
}

export interface PresseKitItem {
  id: number;
  name: string;
  file_url: string;
  file_size: string;
  file_type: 'image' | 'document';
}

export const usePresseData = () => {
  const [presseMitteilungen, setPresseMitteilungen] = useState<PresseMitteilung[]>([]);
  const [presseKit, setPresseKit] = useState<PresseKitItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPresseData = async () => {
      try {
        const response = await fetch('https://jimmy-marken.de/presse_api.php');
        
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Daten');
        }
        
        const data = await response.json();
        
        if (data.success) {
          if (data.pressemitteilungen && Array.isArray(data.pressemitteilungen)) {
            setPresseMitteilungen(data.pressemitteilungen);
          }
          
          if (data.pressekit && Array.isArray(data.pressekit)) {
            setPresseKit(data.pressekit);
          }
        } else {
          throw new Error(data.error || 'Unbekannter Fehler');
        }
        
      } catch (err) {
        setError('Fehler beim Laden der Daten');
      } finally {
        setLoading(false);
      }
    };

    fetchPresseData();
  }, []);

  return { presseMitteilungen, presseKit, loading, error };
};
