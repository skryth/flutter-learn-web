import { useCallback, useState } from 'react'
import Container from '../../../components/ui/Container'
import { Typography } from '../../../components/ui/Typography'
import { Image } from '../../../components/ui/Image'
import CodeWithInput from '../../../components/CodeWithInput'
import ButtonCheckTask from '../../../components/ButtonCheckTask'
import styles from './index.module.css'
import EmulatorFlutter from '../../../components/EmulatorFlutter'

const taskCode = `import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(PLACEHOLDER_ANSWER(\n    child: Text(\n      'Hello Flutter',\n      textDirection: PLACEHOLDER_ANSWER.ltr,\n    )\n  ));\n}`
const correct = 'Flutter';

export type UserAnswerType = "success" | "wrong" | null;
const TaskPage = () => {
  const [userAnswerType, setUserAnswerType] = useState<UserAnswerType>(null)
  const [userAnswer, setUserAnswer] = useState<string>('');
  const callSetUserAnswer = useCallback((value: string) => setUserAnswer(value), []);

  const checkAnswer = () => {
    setUserAnswerType(userAnswer === correct ? "success" : "wrong")
  }
  
  return (
<Container>
  <Typography as='h1' weight='bold' size='xxl' style={{marginBlock: '2.1875rem 0.3125rem'}}>
    Заполни пропуск
  </Typography>
  <Typography size='md' style={{marginBottom: '2rem'}}>
    Заполни пропущенное слово в коде приложения Flutter
  </Typography>
  
  <div className={styles.row}>

    <div className={styles.task}>
      <div className={styles.code}>
        <CodeWithInput 
          disabled={Boolean(userAnswerType)}
          code={taskCode} 
          inputValue={userAnswer} 
          setValue={callSetUserAnswer}
          onEnter={checkAnswer}
        />
      </div>
      <div className={styles.questions}>
        <ButtonCheckTask 
          userAnswer={userAnswer}
          userAnswerType={userAnswerType} 
          checkAnswer={checkAnswer} 
        />
      </div>
    </div>

    <EmulatorFlutter userAnswerType={userAnswerType} />

  </div>
</Container>
  )
}

export default TaskPage