export interface event {
    name: string,
    about: string,
    image: string,
    rulebook: {
        date: string,
        structure: string,
        rules: string[],
        judging: string[],
        prizes: string[]
    },
    organisers: person[]
}

export interface person{
    name: string,
    image: string,
    phone: number
}