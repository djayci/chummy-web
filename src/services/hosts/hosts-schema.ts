export interface HostSchema {
    _id: string;
    isAvailableToday: boolean;
    currency: string;
    firstName: string;
    lastName: string;
    price: number;
    profession: string;
    profilePicture: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export type HostsSchema = HostSchema[];
