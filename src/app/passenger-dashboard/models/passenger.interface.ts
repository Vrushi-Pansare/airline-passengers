export interface Child {
    name: string,
    age: number
}

export interface passenger {
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate: number | null
    children?: Child[] | null
}