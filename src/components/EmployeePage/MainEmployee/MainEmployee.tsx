import React from 'react';
import styles from './mainemployee.module.css';
import { ReactComponent as PhoneSVG } from '../../../assets/img/phone.svg';
import { ReactComponent as MailSVG } from '../../../assets/img/mail.svg';

export function MainEmployee({email}: {email: string}) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.

        В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".

        Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
      </div>
      <div className={styles.right}>
        <div className={styles.contact}>
          <PhoneSVG />
          +7(999) 999 99 99
        </div>
        <div className={styles.contact}>
          <MailSVG />
          {email}
        </div>
      </div>
    </div>
  );
}
