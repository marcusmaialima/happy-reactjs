export default interface IOrphanages {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: IImage[];
}

interface IImage {
    id: number;
    url: string;
}