export const getCleanCode = (codeString: string) => {
    return codeString
        .replace(/^```[\w]*\n?/, '')
        .replace(/\n?```$/, '')
        .replace(/`+/g, '')
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t');
}

const detectLanguage = (codeString: string, match?: RegExpExecArray | null, ) => {
    const cleanCode = getCleanCode(codeString)

    const getLanguage = (code: string): string => {
        const trimmed = code.trim().toLowerCase();
        
        // Dart/Flutter
        if (trimmed.includes('void main()') || 
            trimmed.includes('import \'package:flutter') ||
            trimmed.includes('widget build(') ||
            trimmed.includes('class ') && trimmed.includes('extends stateless')) {
            return 'dart';
        }
        
        // Shell (flutter, dart, npm and etc)
        if (trimmed.startsWith('flutter ') || 
            trimmed.startsWith('dart ') ||
            trimmed.startsWith('npm ') ||
            trimmed.startsWith('cd ') ||
            /^[a-z-]+\s+/.test(trimmed)) {
            return 'bash';
        }
        
        // JSON
        if ((trimmed.startsWith('{') && trimmed.endsWith('}')) ||
            (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
            return 'json';
        }
        
        return 'text';
    };

    let language = match ? match[1].toLowerCase() : getLanguage(cleanCode);
    
    if (language === 'cmd' || language === 'shell') language = 'bash';
    if (language === 'js') language = 'javascript';

    return {cleanCode, language}
}

export default detectLanguage;