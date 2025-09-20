import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrismLight } from 'react-syntax-highlighter';
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
            ),
            code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          
          return !inline && match ? (
            <PrismLight
              style={darcula}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </PrismLight>
          ) : (
            <code className={styles.code}
              {...props}
            >
              {children}
            </code>
          );
        }
        }}
    >
        {children}
    </ReactMarkdown>
  )
}

export default RenderMarkdown