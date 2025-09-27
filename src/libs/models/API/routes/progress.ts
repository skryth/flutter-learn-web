import { API } from ".."
import type { Progress } from "../../../../app/store/slices/progressSlice"

const progressRoute = {
    // getProgress: () => {
    //     return API.get<Progress>('/progress/')
    // },
    getShareToken: () => {
        return API.post<ShareResponse>('/progress/share')
    },
    getProgress: (token: ShareResponse['token']) => {
        return API.get<Progress>(`/progress/${token}`)
    },
}
export default progressRoute

interface ShareResponse {
    created_at: string,
    expires_at: string,
    id: string,
    token: string,
    user_id: string
}