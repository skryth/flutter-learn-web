import toast from 'react-hot-toast';

const copyToClipboard = async (value: string) => {
    try {
        await navigator.clipboard.writeText(value);
    } catch (error) {
        toast.error('Не удалось скопировать в буфер обмена')
    }
}

export default copyToClipboard