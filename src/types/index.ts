export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    profilePicture?: string;
}

export interface Service {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
}

export interface Booking {
    id: string;
    userId: string;
    serviceId: string;
    date: string;
    time: string;
    status: 'pending' | 'confirmed' | 'completed' | 'canceled';
}

export interface DeliveryPartner {
    id: string;
    name: string;
    earnings: number;
    completedDeliveries: number;
}

export interface BusinessLocation {
    id: string;
    name: string;
    address: string;
    rating: number;
    servicesOffered: string[];
}

export interface AccessibilityOptions {
    language: string;
    textSize: 'small' | 'medium' | 'large';
    highContrast: boolean;
}