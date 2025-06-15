
import { useState, useEffect } from 'react';

export interface PresseMitteilung {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  pdf_url?: string;
  created_at: string;
}

export interface PresseKitItem {
  id: number;
  name: string;
  file_url: string;
  file_size: string;
  file_type: 'image' | 'document';
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
        
        // Annahme: API gibt ein Objekt mit pressemitteilungen und pressekit Arrays zurück
        if (data.pressemitteilungen) {
          setPresseMitteilungen(data.pressemitteilungen);
        }
        
        if (data.pressekit) {
          setPresseKit(data.pressekit);
        }
        
      } catch (err) {
        console.error('Error fetching presse data:', err);
        setError('Fehler beim Laden der Pressedaten');
        
        // Fallback Mock-Daten
        setPresseMitteilungen([
          {
            id: 1,
            title: "Jimmy revolutioniert den Ausbildungsmarkt in Bayern",
            date: "2024-01-20",
            excerpt: "Das Königsmooser Startup Jimmy UG verzeichnet bereits 30 registrierte Schüler und mehrere Partnerunternehmen.",
            pdf_url: "#",
            created_at: "2024-01-20"
          }
        ]);
        
        setPresseKit([
          { id: 1, name: "Jimmy Logo (PNG)", file_url: "#", file_size: "2.3 MB", file_type: "image" as const },
          { id: 2, name: "Unternehmensbroschüre", file_url: "#", file_size: "4.2 MB", file_type: "document" as const }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPresseData();
  }, []);

  return { presseMitteilungen, presseKit, loading, error };
};
