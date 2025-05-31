export const formatCurrency = (amount: number, currencySymbol: string = '$'): string => {
    return `${currencySymbol}${amount.toFixed(2)}`;
};

export const formatDate = (date: Date, locale: string = 'en-US'): string => {
    return date.toLocaleDateString(locale);
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};