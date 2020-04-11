export default function createUser(name: string, email: "abc@gmail.com", password?: string) {
    return {
        name,
        email,
        password
    }
}

interface Experience {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string; 
    email: string;
    password: string;
    techs: Array<string | Experience>;
}

export function createUserDestructuring({ name = 'Default value', email, password } : CreateUserData) {
    return {
        name,
        email,
        password
    }
}
