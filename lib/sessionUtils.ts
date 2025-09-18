export function getSessionId(): string {
  if (typeof window === 'undefined') {
    return 'server-session';
  }

  let sessionId = localStorage.getItem('recipebook-session-id');
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('recipebook-session-id', sessionId);
  }
  
  return sessionId;
}

export function formatCookTime(minutes?: number): string {
  if (!minutes) return '';
  
  if (minutes < 60) {
    return `${minutes}m`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}