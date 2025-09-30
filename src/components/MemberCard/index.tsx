import type { Member } from '../../libs/contants/about'
import { Icon } from '../ui/Icon'
import { Typography } from '../ui/Typography'
import styles from './index.module.css'
interface MemberCardProps {
    member: Member
}
const MemberCard: React.FC<MemberCardProps> = ({
    member
}) => {
  return (
    <div className={styles.card}>
        <div className={styles.info}>
            <a href={member.link} 
            target='_blank' 
            rel="noopener noreferrer" 
            className={styles.link}
            >
                <Typography weight="bold" size="md" color='darkblue'>
                    {member.name}
                </Typography>
                <Icon name='github' size={18}/>
            </a>
            <Typography color="light" size="sm" className={styles.description}>
                {member.description}
            </Typography>
        </div>
        <div className={styles.tags}>
            {member.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.tag}>
                    {skill}
                </span>
            ))}
        </div>
    </div>
  )
}

export default MemberCard