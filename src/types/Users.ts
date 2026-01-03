import type { Order } from "./Orders"

export enum UserRole{
    USER = "USER",
    ADMIN = "ADMIN"
}

export interface Users{
    id: number,
    name: string,
    email: string,
    password: string,
    orders: Order[]
    role: UserRole
}