import React, { useCallback, useEffect, useState } from 'react'
import { useAppSelector } from '../app/store/hooks';
interface MatchObj {
    id: string,
    type: 'modules' | 'lesson',
    title: string,
}
const useModalSearch = ({
    inputRef,
    value
}: {
    inputRef: React.RefObject<HTMLInputElement | null>,
    value: string
}) => {
    const [isSearchModule, setIsSearchModule] = useState(false);
    const modules = useAppSelector(state => state.modules.list)
    const [matches, setMatches] = useState<MatchObj[]>([]);

    useEffect(() => {
        const inputElement = inputRef.current;
        
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                findMatches();
            }
        };        
        if (inputElement) inputElement.addEventListener('keypress', handleKeyPress);

        return () => {inputElement && inputElement.removeEventListener('keypress', handleKeyPress)};
    }, [inputRef, value])

    const findMatches = useCallback(() => {
        if (!value.trim()) {
            setMatches([]);
            return
        };
        setIsSearchModule(true);
        const result: MatchObj[] = [];
        const lowerCaseValue = value.toLowerCase();

        const matchModules = modules.filter(m => m.title.toLowerCase().includes(lowerCaseValue));
        if (matchModules.length > 0) {
            matchModules.slice(0, 5).forEach(m => result.push({
                id: m.id,
                title: m.title,
                type: 'modules'
            }))
        }
        if (result.length >=5) {
            setMatches(result);
            return;
        }

        const lessons = modules.flatMap(module => 
            module.lessons.filter(l => l.title.toLowerCase().includes(lowerCaseValue))
        );
         if (lessons.length > 0) {
            lessons.slice(0, 5 - result.length).forEach(l => result.push({
                id: l.id,
                title: l.title,
                type: 'lesson'
            }))
        }

        setMatches(result)
    }, [value, modules])

    const closeModal = () => {
        setIsSearchModule(false);
        setMatches([]);
    } 
    return {
        findMatches, 
        closeModal, 
        matches, 
        isSearchModule
    }
}

export default useModalSearch