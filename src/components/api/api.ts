import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-Type': 'application/json'
    },
});

type RequestRegisterType = {
    id: number
    token: string
}

type RequestLoginType = {
    token: string
}

export type UserType = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

type RequestUsersType = {

    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<UserType>
}

type ApiType = {
    register: (email: string, password: string) => Promise<RequestRegisterType>;
    login: (email: string, password: string) => Promise<RequestLoginType>;
    getUsers: (token: string) => Promise<RequestUsersType>;
    getUser: (token: string, id: number) => Promise<UserType>;
}

export const api: ApiType = {
    register: async (email, password) => {
        const resp = await instance.post('register',
            {
                email, password
            }
        );
        return resp.data;
    },

    login: async (email, password) => {
        const resp = await instance.post('login',
            {
                email, password
            }
        );
        return resp.data;
    },

    getUsers: async (token) => {
        const resp = await instance.get('users',
            {
                headers: { 'Authorization': `Basic ${token}` }
            }
        );
        return resp.data;
    },

    getUser: async (token, id) => {
        const resp = await instance.get(`users/${id}`,
            {
                headers: { 'Authorization': `Basic ${token}` }
            }
        );
        return resp.data;
    },

}