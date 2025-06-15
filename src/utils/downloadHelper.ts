
export const downloadFile = async (url: string, filename?: string) => {
  try {
    // Ersten Versuch: Fetch mit Blob (funktioniert bei CORS-fähigen Servern)
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    
    if (!response.ok) {
      throw new Error('Download failed');
    }
    
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename || url.split('/').pop() || 'download';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
    
  } catch (error) {
    console.error('Fetch download failed, trying alternative method:', error);
    
    // Fallback: Direkter Download-Link mit erzwungenen Headers
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop() || 'download';
    link.style.display = 'none';
    
    // Zusätzliche Attribute für erzwungenen Download
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Wenn das auch nicht funktioniert, zeige eine Nachricht
    setTimeout(() => {
      if (confirm('Der automatische Download hat möglicherweise nicht funktioniert. Soll die Datei in einem neuen Tab geöffnet werden?')) {
        window.open(url, '_blank');
      }
    }, 1000);
  }
};
