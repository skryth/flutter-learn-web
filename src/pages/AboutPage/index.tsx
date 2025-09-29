import { Link } from 'react-router'
import CircleButtonBack from '../../components/CircleButtonBack'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import { Icon } from '../../components/ui/Icon'
import { Typography } from '../../components/ui/Typography'
import styles from './index.module.css'

const teamMembers = [
  {
    name: 'Миллер Владимир',
    description: 'Руководитель проекта',
    skills: ['Менеджмент', 'Стратегия']
  },
  {
    name: 'dnflnx',
    link: 'https://github.com/flionx',
    description: 'Frontend-разработчик',
    skills: ['React', 'TypeScript']
  },
  {
    name: 'JerryImMouse',
    link: 'https://github.com/JerryImMouse',
    description: 'Backend-разработчик',
    skills: ['Rust', 'Axum']
  },
  {
    name: 'Адам Станислав',
    description: 'Контент-менеджер',
    skills: ['Flutter', 'Копирайтинг']
  },
  {
    name: 'Шатний Никита',
    description: 'HR-менеджер',
    skills: ['Аналитика', 'Стратегия']
  }
]

const AboutPage = () => {
  return (
    <Container>
      <CircleButtonBack to='/modules'/>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Typography weight="bold" size="xl" className={styles.title}>
              Flutter Learn
            </Typography>
            <Typography color="light" size="md" className={styles.subtitle}>
              Платформа для освоения мобильной разработки на Flutter и Dart
            </Typography>
          </div>
          <Button to="/modules" bg="primary" paddingX="md" paddingY="sm">
            Начать обучение
          </Button>
        </header>

        <div className={styles.content}>
          <section className={styles.aboutSection}>
            <div className={styles.aboutCard}>
              <Typography color="light" size="sm">
                Интерактивное обучение с практическими заданиями и поэтапным освоением материала. 
                Изучайте Flutter от основ до продвинутых техник разработки мобильных приложений.
              </Typography>
            </div>
          </section>

          <section className={styles.teamSection}>
            <Typography weight="bold" size="lg" className={styles.sectionTitle}>
              Команда проекта
            </Typography>
            
            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <div key={index} className={styles.teamCard}>
                  <div className={styles.teamInfo}>
                    {member.link ?
                      <a href={member.link} 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        className={styles.teamLink}
                      >
                        <Typography weight="bold" size="md">
                          {member.name}
                        </Typography>
                        <Icon name='github' size={20}/>
                      </a>
                    :
                      <Typography weight="bold" size="md" className={styles.teamRole}>
                        {member.name}
                      </Typography>
                    }
                    <Typography color="light" size="sm" className={styles.teamDescription}>
                      {member.description}
                    </Typography>
                  </div>
                  <div className={styles.skillTags}>
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className={styles.opensourceSection}>
          <div className={styles.opensourceCard}>
            <div className={styles.opensourceContent}>
              <div className={styles.opensourceHeader}>
                <Icon name='github' size={24} className={styles.githubIcon}/>
                <div>
                  <Typography weight="bold" size="lg" className={styles.opensourceTitle}>
                    Open Source
                  </Typography>
                  <Typography color="light" size="sm" className={styles.opensourceSubtitle}>
                    Присоединяйтесь к разработке
                  </Typography>
                </div>
              </div>
              
              <div className={styles.repoLinks}>
                <a 
                  href="https://github.com/skryth/flutter-learn-web" 
                  className={styles.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="link" size={16} />
                  <Typography weight="medium" size="sm">Web Client</Typography>
                </a>
                
                <a 
                  href="https://github.com/skryth/flern-api" 
                  className={styles.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="link" size={16} />
                  <Typography weight="medium" size="sm">API Server</Typography>
                </a>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage