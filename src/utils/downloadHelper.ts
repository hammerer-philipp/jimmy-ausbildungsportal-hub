
export const downloadFile = async (url: string, filename?: string) => {
  console.log('Attempting to download:', url);
  
  try {
    // Verwende einen Proxy-Ansatz über einen versteckten iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    
    // Setze die Source des iframes auf die Download-URL
    iframe.src = url;
    
    // Füge das iframe zum DOM hinzu
    document.body.appendChild(iframe);
    
    // Entferne das iframe nach einer kurzen Verzögerung
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 2000);
    
    console.log('Download initiated via iframe');
    
    // Falls das iframe nicht funktioniert, verwende den direkten Link-Ansatz
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = url;
      
      // Generiere Dateinamen falls nicht gegeben
      const downloadFilename = filename || url.split('/').pop()?.split('?')[0] || 'download';
      link.download = downloadFilename;
      
      // Setze Attribute für erzwungenen Download
      link.style.display = 'none';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Füge Link temporär zum DOM hinzu
      document.body.appendChild(link);
      
      // Simuliere rechtsklick für Kontext-Menü
      const rightClickEvent = new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 2
      });
      
      // Simuliere normalen Klick
      link.click();
      
      // Entferne Link nach kurzer Verzögerung
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
      }, 100);
    }, 500);
    
  } catch (error) {
    console.error('Download failed:', error);
    
    // Letzter Fallback: Öffne in neuem Tab mit Hinweis
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Zeige Benutzerhinweis nach kurzer Verzögerung
    setTimeout(() => {
      alert('Bitte klicken Sie mit der rechten Maustaste auf die geöffnete Datei und wählen Sie "Speichern unter..." um sie herunterzuladen.');
    }, 1000);
  }
};
