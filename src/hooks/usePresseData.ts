
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
        
        if (data.pressemitteilungen) {
          setPresseMitteilungen(data.pressemitteilungen);
        }
        
        if (data.pressekit) {
          setPresseKit(data.pressekit);
        }
        
      } catch (err) {
        console.error('Error fetching presse data:', err);
        setError('Fehler beim Laden der Pressedaten');
        
        // Fallback Mock-Daten mit den spezifischen Dateien
        setPresseMitteilungen([
          {
            id: 1,
            title: "Jimmy revolutioniert den Ausbildungsmarkt in Bayern",
            pdf_url: "presse/mitteilungen/jimmy_ausbildungsmarkt_bayern.pdf",
            created_at: "2024-01-20"
          },
          {
            id: 2,
            title: "Neue Partnerschaft mit regionalen Unternehmen",
            pdf_url: "presse/mitteilungen/jimmy_partnerschaften.pdf",
            created_at: "2024-02-15"
          }
        ]);
        
        setPresseKit([
          {
            id: 1,
            name: "Jimmy Logo (PNG)",
            file_url: "presse/assets/jimmy_logo.png",
            file_size: "245 KB",
            file_type: "image" as const,
            description: "Hochauflösendes Logo im PNG-Format"
          },
          {
            id: 2,
            name: "Jimmy Logo (SVG)",
            file_url: "presse/assets/jimmy_logo.svg",
            file_size: "12 KB",
            file_type: "image" as const,
            description: "Vektorlogo im SVG-Format"
          },
          {
            id: 3,
            name: "Jimmy Ausbildung Flyer",
            file_url: "presse/assets/jimmy_ausbildung_flyer.pdf",
            file_size: "1.8 MB",
            file_type: "document" as const,
            description: "Informationsflyer über Jimmy"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPresseData();
  }, []);

  return { presseMitteilungen, presseKit, loading, error };
};
