
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
  category: 'logos' | 'documents' | 'screenshots';
  description?: string;
}

export const usePresseData = () => {
  const [presseMitteilungen, setPresseMitteilungen] = useState<PresseMitteilung[]>([]);
  const [presseKit, setPresseKit] = useState<PresseKitItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPresseData = async () => {
      try {
        console.log('Fetching presse data from API...');
        const response = await fetch('https://jimmy-marken.de/presse_api.php');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Presse API data received:', data);
        
        // Nur echte Daten laden, keine Fallback-Beispiele
        if (data.pressemitteilungen && Array.isArray(data.pressemitteilungen)) {
          setPresseMitteilungen(data.pressemitteilungen);
        }
        
        if (data.pressekit && Array.isArray(data.pressekit)) {
          setPresseKit(data.pressekit);
        }
        
      } catch (err) {
        console.error('Error fetching presse data:', err);
        setError('Fehler beim Laden der Pressedaten');
        // Keine Fallback-Daten mehr - Arrays bleiben leer
      } finally {
        setLoading(false);
      }
    };

    fetchPresseData();
  }, []);

  return { presseMitteilungen, presseKit, loading, error };
};
