import React from 'react';
import { Layout } from './components/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { EmployeesListPage } from './components/EmployeesListPage';
import { EmployeePage } from './components/EmployeePage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' render={() => <Redirect to={'/login'} />} />
        <Route path='/login' render={() => <LoginPage />} />
        <Route path='/users' render={() => <EmployeesListPage />} />
        <Route path='/user/:id' render={() => <EmployeePage />} />

        <Route path='*' render={() => <div>Страница не найдена</div>} />

      </Switch>
    </Layout>
  );
}

export default App;
