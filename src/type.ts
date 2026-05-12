export interface Vehicle {
    id: number,
    name: string,
    price: number,
    rating: number,
    available: boolean,
    seats: number,
    transmission: string,
    energy: string,
    range: string,
    tag: string,
    img: string,
}

export interface Nav {
    text: string,
    url:string
}