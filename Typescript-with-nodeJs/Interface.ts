interface CarInfo {
    name: string,
    model: string,
    color: string
}

interface CarProtoType extends CarInfo{
    code: number
}

const car: CarProtoType = {
    name: "Murano",
    model: "Nissan",
    color: "silver",
    code: 123
}
