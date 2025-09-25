import { API } from ".."
import type { Progress } from "../../../../app/store/slices/progressSlice"

const progressRoute = {
    getProgress: () => {
        return API.get<Progress>('/progress/')
    }
}
export default progressRoute