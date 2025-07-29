
// const elem = document.getElementById('hello') as HTMLElement // to be done carefully as it can cause runtime errors

// let course: number = "Typescript" as any as number

//safer type assertion
type Userinfo = {
    name: string
    code: number
}

// const user: Userinfo = {
//     name: 'Nanfuka',
//     code: 13315
// }

//alternatively

const user: Userinfo = {} as Userinfo
user.name = "Julia",
user.code = 44455

console.log(user)
