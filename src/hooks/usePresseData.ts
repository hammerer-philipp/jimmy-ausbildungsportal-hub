
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
        console.log('🔍 Starting API call to presse_api.php...');
        const response = await fetch('https://jimmy-marken.de/presse_api.php');
        
        console.log('📡 Response status:', response.status);
        console.log('📡 Response ok:', response.ok);
        console.log('📡 Response headers:', response.headers);
        
        if (!response.ok) {
          console.error('❌ HTTP Error Details:', {
            status: response.status,
            statusText: response.statusText,
            url: response.url
          });
          
          // Versuche, die Fehlerantwort zu lesen
          const errorText = await response.text();
          console.error('❌ Error response body:', errorText);
          
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log('✅ Presse API data received:', data);
        console.log('📊 Data structure:', {
          hasPressemitteilungen: !!data.pressemitteilungen,
          pressemitteilungenCount: data.pressemitteilungen?.length || 0,
          hasPressekit: !!data.pressekit,
          pressekitCount: data.pressekit?.length || 0
        });
        
        // Nur echte Daten laden, keine Fallback-Beispiele
        if (data.pressemitteilungen && Array.isArray(data.pressemitteilungen)) {
          console.log('✅ Loading pressemitteilungen:', data.pressemitteilungen.length, 'items');
          setPresseMitteilungen(data.pressemitteilungen);
        } else {
          console.log('⚠️ No valid pressemitteilungen data found');
        }
        
        if (data.pressekit && Array.isArray(data.pressekit)) {
          console.log('✅ Loading pressekit:', data.pressekit.length, 'items');
          setPresseKit(data.pressekit);
        } else {
          console.log('⚠️ No valid pressekit data found');
        }
        
      } catch (err) {
        console.error('❌ Detailed error information:', {
          error: err,
          message: err instanceof Error ? err.message : 'Unknown error',
          stack: err instanceof Error ? err.stack : undefined
        });
        setError(`Fehler beim Laden der Pressedaten: ${err instanceof Error ? err.message : 'Unbekannter Fehler'}`);
        // Keine Fallback-Daten mehr - Arrays bleiben leer
      } finally {
        console.log('🏁 API call completed, setting loading to false');
        setLoading(false);
      }
    };

    fetchPresseData();
  }, []);

  return { presseMitteilungen, presseKit, loading, error };
};
