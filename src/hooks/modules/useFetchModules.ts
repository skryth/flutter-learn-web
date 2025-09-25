import { useEffect } from 'react'
import modulesRoute from '../../libs/models/API/routes/modules'
import { useAppDispatch } from '../../app/store/hooks'
import { setModules, setModulesLoading } from '../../app/store/slices/modulesSlice';
import useCatchError from '../useCatchError';

const useFetchModules = () => {
    const fetchModules = useFuncFetchModules();
    useEffect(() => {
        fetchModules();
    }, [])
}

export default useFetchModules;

export const useFuncFetchModules = () => {
    const dispatch = useAppDispatch();
    const catchError = useCatchError();

    const fetchModules = async () => {
        try {
            dispatch(setModulesLoading(true))
            const modules = await modulesRoute.getModules();
            dispatch(setModules(modules))
        } catch (error) {
            catchError(error)
        } finally {
            dispatch(setModulesLoading(false))
        }
    }

    return fetchModules;
}  