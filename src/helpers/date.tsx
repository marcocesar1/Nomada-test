
const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export const humanDate = (date: string) => {
    const parts = date.split('-');
    const myDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])); 

    return myDate.toLocaleTimeString('es-ES', options).split(', ')[0];
}