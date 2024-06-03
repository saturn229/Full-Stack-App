import React, { Component } from 'react';
import './styles/global.css';

//React Router
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';




async function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" element={Home} />
          <Route path="signin" element={<UserSignIn />} />
          <Route path="signup" element={<UserSignUp />} />
          <Route path="signout" element={<UserSignOut />} />
        </Switch>
      </div>
    </BrowserRouter>
  )




}
export default App;
