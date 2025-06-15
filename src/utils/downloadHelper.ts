
export const downloadFile = async (url: string, filename?: string) => {
  try {
    console.log('Attempting to download:', url);
    
    // Versuche zuerst eine normale Fetch-Anfrage
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Hole den Content-Type um den Dateityp zu bestimmen
    const contentType = response.headers.get('content-type') || '';
    console.log('Content-Type:', contentType);
    
    // Konvertiere die Response zu einem Blob
    const blob = await response.blob();
    console.log('Blob size:', blob.size);
    
    // Erstelle eine neue Blob mit explizitem MIME-Type für Download
    const downloadBlob = new Blob([blob], { 
      type: 'application/octet-stream' // Dies zwingt den Browser zum Download
    });
    
    // Erstelle Download URL
    const downloadUrl = window.URL.createObjectURL(downloadBlob);
    
    // Erstelle temporären Download-Link
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename || url.split('/').pop() || 'download';
    link.style.display = 'none';
    
    // Füge Link zum DOM hinzu und klicke ihn
    document.body.appendChild(link);
    link.click();
    
    // Aufräumen
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
    
    console.log('Download successful');
    
  } catch (error) {
    console.error('Download failed:', error);
    
    // Fallback: Erstelle einen Download-Link mit download-Attribut
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop() || 'download';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Versuche den Download trotzdem
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Informiere den Benutzer
    setTimeout(() => {
      alert('Falls der Download nicht automatisch gestartet ist, klicken Sie mit der rechten Maustaste auf den Link und wählen Sie "Ziel speichern unter..."');
    }, 500);
  }
};
