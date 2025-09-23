import { API } from ".."
const accountRoute = {
    signUp: (username: string, password: string) => {
        return API.post<AccountResponse>('/api/v1/account/signup', { username, password })
    },
    signIn: (username: string, password: string) => {
        return API.post<AccountResponse>('/api/v1/account/signin', { username, password })
    }
}
export default accountRoute;

interface AccountResponse {
    id: string,
    role: string,
    username: string
}