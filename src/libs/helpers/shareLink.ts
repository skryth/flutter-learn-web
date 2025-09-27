import copyToClipboard from "./copyToClipboard";

const shareLink = async (href: string) => {
  if (navigator.share) {
    try {
        await navigator.share({
            title: 'Flutter Learn',
            url: href,
        })
    } catch {
        copyToClipboard(href);
    }
    
  } else {
    copyToClipboard(href);
  }
}
export default shareLink;