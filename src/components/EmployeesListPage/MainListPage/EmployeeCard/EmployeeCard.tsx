import React, { useState } from 'react';
import styles from './employeecard.module.css';
import { ReactComponent as NoLikeSVG } from '../../../../assets/img/noLike.svg';
import { ReactComponent as LikeSVG } from '../../../../assets/img/like.svg';
import { useHistory } from 'react-router-dom';

type EmployeeCardType = {
  id: number
  avatar: string
  lastName: string
  firstName: string
}

export function EmployeeCard({ id, avatar, lastName, firstName }: EmployeeCardType) {
  const [isLike, toggleIsLike] = useState(false)
  const history = useHistory()

  const handleClick = (id: number) => {
    history.push(`/employee/${id}`)
  }

  return (
    <div className={styles.card} onClick={() => handleClick(id)}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={avatar} alt="Аватар" />
        <h3 className={styles.title}>
          {firstName + ' ' + lastName}
        </h3>
        <div
          className={styles.like}
          onClick={() => toggleIsLike(isLike ? false : true)}>
          {isLike
            ? <LikeSVG />
            : <NoLikeSVG />
          }
        </div>
      </div>
    </div>
  );
}
