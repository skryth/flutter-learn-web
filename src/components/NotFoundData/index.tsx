import React from 'react'
import Container from '../ui/Container'
import { Typography } from '../ui/Typography'
interface NotFoundDataProps {
    title: string,
    text: string
}
const NotFoundData: React.FC<NotFoundDataProps> = ({
    title,
    text
}) => {
  return (
    <Container>
        <Typography as='h1' weight='bold' size='xxl' style={{marginBlock: '2.1875rem 0.3125rem'}}>
            {title}
        </Typography>
        <Typography size='md' style={{marginBottom: '2rem'}}>
            {text}
        </Typography>
    </Container>
  )
}

export default NotFoundData