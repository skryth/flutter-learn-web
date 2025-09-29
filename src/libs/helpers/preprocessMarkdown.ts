const preprocessMarkdown = (markdown: string): string => {
    if (!markdown) return '';

    let processed = markdown;

    processed = processed.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    processed = processed.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
        let cleanCode = code;
        
        cleanCode = cleanCode
        .replace(/`+/g, '')
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\')
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t')
        .trim();
        
        return `\`\`\`${lang || ''}\n${cleanCode}\n\`\`\``;
    });

    processed = processed.replace(/`{2,}([^`\n]+?)`{2,}/g, '`$1`');

    processed = processed.replace(/(?<!`)`([^`\n]+?)`(?!`)/g, (_, content) => {
        const cleaned = content.replace(/`+/g, '');
        return `\`${cleaned}\``;
    });

    processed = processed.replace(/^(#{1,6})\s*([^#\n]+?)\s*#{0,6}\s*$/gm, '$1 $2');

    processed = processed.replace(/\n{3,}/g, '\n\n');

    processed = processed.replace(/^[\s]*[-*+]\s+/gm, '- ');

    processed = processed.replace(/[ \t]+$/gm, '');

    processed = processed.replace(/^-{3,}$/gm, '---');

    return processed.trim();
};
export default preprocessMarkdown