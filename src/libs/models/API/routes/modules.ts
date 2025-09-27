import { API } from ".."
import type { Module } from "../../../../app/store/slices/modulesSlice"

const modulesRoute = {
    getModules: () => {
        return API.get<Module[]>('/modules/')
    }
}
export default modulesRoute;