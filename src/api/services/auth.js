import API from "../api";

export async function login(email, password) {
    try {
        const response = await API.post('/auth/token', {
            email,
            password,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

