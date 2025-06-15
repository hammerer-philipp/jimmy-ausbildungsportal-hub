

export const downloadFile = async (url: string, filename?: string) => {
  console.log('Attempting to download:', url);
  
  try {
    // Erstelle temporären Download-Link mit download-Attribut
    const link = document.createElement('a');
    link.href = url;
    
    // Generiere Dateinamen falls nicht gegeben
    const downloadFilename = filename || url.split('/').pop()?.split('?')[0] || 'download';
    link.download = downloadFilename;
    
    // Setze Attribute für erzwungenen Download
    link.style.display = 'none';
    link.target = '_self'; // Verhindert neues Tab
    
    // Füge Link temporär zum DOM hinzu
    document.body.appendChild(link);
    
    // Simuliere Klick für Download
    link.click();
    
    // Entferne Link nach kurzer Verzögerung
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 100);
    
    console.log('Download initiated successfully');
    
  } catch (error) {
    console.error('Download failed:', error);
    
    // Letzter Fallback: Öffne in neuem Tab mit Hinweis
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Zeige Benutzerhinweis nach kurzer Verzögerung
    setTimeout(() => {
      alert('Bitte klicken Sie mit der rechten Maustaste auf die geöffnete Datei und wählen Sie "Speichern unter..." um sie herunterzuladen.');
    }, 500);
  }
};

