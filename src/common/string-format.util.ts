export function formatString(parameter: string): string {
    if (!parameter) return '';
  
    return parameter
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  