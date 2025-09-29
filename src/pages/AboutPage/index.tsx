import CircleButtonBack from '../../components/CircleButtonBack'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import { Typography } from '../../components/ui/Typography'
import styles from './index.module.css'

const teamMembers = [
  {
    role: 'Миллер Владимир',
    description: 'Руководитель проекта',
    skills: ['Менеджмент', 'Стратегия']
  },
  {
    role: 'Шипилов Данила',
    description: 'Frontend-разработчик',
    skills: ['React', 'TypeScript']
  },
  {
    role: 'Валиков Владислав',
    description: 'Backend-разработчик',
    skills: ['Rust', 'PostgreSQL']
  },
  {
    role: 'Адам Станислав',
    description: 'Контент-менеджер',
    skills: ['Flutter', 'Копирайтинг']
  },
  {
    role: 'Шатний Никита',
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
                    <Typography weight="bold" size="md" className={styles.teamRole}>
                      {member.role}
                    </Typography>
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
          
          <section className={styles.openSourceSection}>
            <div className={styles.openSourceCard}>
              <div className={styles.openSourceHeader}>
                <Typography weight="bold" size="md">
                  Open Source
                </Typography>
                <Typography color="light" size="sm">
                  Присоединяйтесь к разработке
                </Typography>
              </div>
              
              <div className={styles.repoLinks}>
                <a 
                  href="https://github.com/skryth/flutter-learn-web" 
                  className={styles.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography weight="bold" size="sm">Web</Typography>
                </a>
                
                <a 
                  href="https://github.com/skryth/flern-api" 
                  className={styles.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography weight="bold" size="sm">API</Typography>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage