import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as PrismLight } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './index.module.css'
import { Typography } from '../ui/Typography';
import preprocessMarkdown from '../../libs/helpers/preprocessMarkdown';

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
            .replace(/`+/g, '')
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\')
            .replace(/\\n/g, '\n')
            .replace(/\\t/g, '\t');

          const detectLanguage = (code: string): string => {
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

          let language = match ? match[1].toLowerCase() : detectLanguage(cleanCode);
          
          if (language === 'cmd' || language === 'shell') language = 'bash';
          if (language === 'js') language = 'javascript';

          return !inline && cleanCode.includes('\n') ? (
            <PrismLight
              style={darcula}
              language={language}
              PreTag="div"
              customStyle={{
                borderRadius: '0.2rem',
                fontSize: '0.9em',
                lineHeight: '1.4',
                margin: '1rem 0'
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