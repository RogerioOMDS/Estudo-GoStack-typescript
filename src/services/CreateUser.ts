// export default function createUser(name = '', email: string, password: string) {
//     const user = {
//         name,
//         email,
//         password,
//     }

//     return user
// }

interface TechObject {
    title: string;
    experience:number;
}


interface CreateUserData {
    name?:string; //opcional
    email: string;
    password: string;
    techs: Array<string | TechObject>; //string[] array de string
}
export default function createUser({name = '', email, password}: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user
}