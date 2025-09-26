import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PrismLight } from 'react-syntax-highlighter';
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import preprocessMarkdown from '../../libs/helpers/preprocessMarkdown';

interface RenderMarkdownProps {
    children: string
}
interface RenderMarkdownProps {
  children: string;
}

const RenderMarkdown: React.FC<RenderMarkdownProps> = ({ children }) => {

  const processedMarkdown = preprocessMarkdown(children);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ ...props }) => (
          <img
            {...props}
            className={styles.img}
            alt={props.alt || 'lesson image'}
            onError={e => e.currentTarget.style.display = 'none'}
          />
        ),
        p: ({ children }) => (
          <Typography 
            weight='medium' 
            color='light' 
            style={{ marginBottom: '1rem' }} 
            children={children} 
          />
        ),
        h1: ({ children }) => (
          <Typography 
            as='h2' 
            size='xl' 
            weight='bold' 
            style={{ marginBottom: '1rem' }} 
            children={children} 
          />
        ),
        h2: ({ children }) => (
          <Typography 
            as='h3' 
            size='lg' 
            weight='bold' 
            style={{ marginBottom: '1rem' }} 
            children={children} 
          />
        ),
        h3: ({ children }) => (
          <Typography 
            as='h4' 
            size='md' 
            weight='bold' 
            style={{ marginBottom: '0.8rem' }} 
            children={children} 
          />
        ),
        a: ({ ...props }) => (
          <a 
            {...props} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link} 
          />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          const codeString = String(children).replace(/\n$/, '');
          
          const cleanCode = codeString
            .replace(/`([^`\n]*)`/g, '$1')
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\');

          return !inline && match ? (
            <PrismLight
              style={darcula}
              language={match[1]}
              PreTag="div"
              customStyle={{
                borderRadius: '0.2rem',
                fontSize: '0.9em',
                lineHeight: '1.4'
              }}
            >
              {cleanCode}
            </PrismLight>
          ) : (
            <code 
              className={styles.code}
              {...props}
            >
              {cleanCode}
            </code>
          );
        }
      }}
    >
      {processedMarkdown}
    </ReactMarkdown>
  );
};

export default RenderMarkdown;