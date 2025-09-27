import toast from 'react-hot-toast';

const copyToClipboard = async (value: string) => {
    try {
        await navigator.clipboard.writeText(value);
        toast.success('Скопировано в буфер обмена')
    } catch (error) {
        toast.error('Не удалось скопировать в буфер обмена')
    }
}

export default copyToClipboard