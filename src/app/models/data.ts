export interface IUSERS {
    id: string;
    name: string;
    surname: string;
    mail: string;
    imageUrl: string;
    location: location;
    orders: orders;
}


export interface location {
    address: string;
    city: string;
    cap: string;
}

export interface orders {
    id: string;
    date: string;
    quantity: number;
}

export interface product {
    name: string;
    price: number;
}