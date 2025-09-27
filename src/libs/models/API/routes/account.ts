import { API } from ".."
const accountRoute = {
    signUp: (username: string, password: string) => {
        return API.post<AccountResponse>('/account/signup', { username, password })
    },
    signIn: (username: string, password: string) => {
        return API.post<AccountResponse>('/account/signin', { username, password })
    },
    signOut: () => {
        API.post('/account/logout')
    },
}
export default accountRoute;

interface AccountResponse {
    id: string,
    role: string,
    username: string
}