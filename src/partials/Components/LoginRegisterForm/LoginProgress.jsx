import React from 'react';
import * as style from '../../../sass/Module/LoginRegisterForm.module.scss';

const LoginProgress = ({ password }) => {
  return (
    <div className={style.progress_container}>
      <div
        className={style.progress_bar}
        password={password}
        minLength={6}
      ></div>
    </div>
  );
};

export default LoginProgress;
