export type BoxInformation = {
    image: string,
    title: string,
    text: string
};

export type CreateUser = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    report: boolean
};

export type LoginUser = {
    email: string,
    password: string
};

export type Error = {
    [key: string]: string
};
