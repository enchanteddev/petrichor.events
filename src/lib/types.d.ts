export interface event {
    name: string,
    about: string,
    image: string,
    date: string,
    rulebook: {
        structure: {[key: string]: string[]},
        rules: string[],
        judging: string[],
        prizes: string[]
    },
    organisers: person[]
}

export interface workshop {
    name: string,
    about: string,
    speakers: string[],
    date: string,
    fees: number,
    topics: string[],
    regdate: string,
    location: string,
    prereq: string[],
    image: string
}

export interface person{
    name: string,
    image: string,
    phone: number
}