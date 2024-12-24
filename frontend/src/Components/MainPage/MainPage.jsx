import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <Link to="/signin">Войти</Link>
      <br />
      <Link to="/signup">Зарегистрироваться</Link>
    </div>
  );
};

export default MainPage;