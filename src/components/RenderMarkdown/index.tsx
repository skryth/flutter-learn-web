import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'

interface RenderMarkdownProps {
    children: string
}
const RenderMarkdown: React.FC<RenderMarkdownProps> = ({
    children
}) => {
  return (
    <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
            img: ({...props}) => (
                <img 
                    {...props}
                    className={styles.img}
                    alt={props.alt || 'lesson image'}
                    onError={e => e.currentTarget.style.display = 'none'}
                />  
            ),
            p: ({children}) => (
                <Typography weight='medium' color='light' style={{marginBottom: '1rem'}} children={children}/>
            ),
            h2: ({children}) => (
                <Typography as='h3' size='lg' weight='bold' style={{marginBottom: '1rem'}} children={children} />
            ),
            h3: ({children}) => (
                <Typography as='h4' size='md' weight='bold' style={{marginBottom: '0.8rem'}} children={children} />
            ),
            a: ({...props}) => (
                <a {...props} target="_blank" rel="noopener noreferrer" className={styles.link} />
            )
        }}
    >
        {children}
    </ReactMarkdown>
  )
}

export default RenderMarkdown