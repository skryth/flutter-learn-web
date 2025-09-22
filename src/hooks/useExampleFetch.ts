import { useEffect, useRef } from 'react'
import { useAppDispatch } from '../app/store/hooks';
import { setModulesLoading } from '../app/store/slices/modulesSlice';
import { setTaskLoading } from '../app/store/slices/taskSlice';

const useExampleFetch = (isTask?: boolean) => {
    const dispatch = useAppDispatch();
    const timerRef = useRef<number>(null)

    useEffect(() => {
        const fetchModules = () => {
            if (isTask) {
                dispatch(setTaskLoading(true));
            } else {
                dispatch(setModulesLoading(true));
            }
            timerRef.current && clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                if (isTask) {
                    dispatch(setTaskLoading(false));
                } else {
                    dispatch(setModulesLoading(false));
                }
            }, 1500)
        }
        fetchModules();
        return () => {timerRef.current && clearTimeout(timerRef?.current)}
    }, [])
}

export default useExampleFetch