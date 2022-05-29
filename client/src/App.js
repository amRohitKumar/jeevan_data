import {Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HeroPage from './page/hero/heroPage';
import SignInAndSignUpPage from './page/login/signIn-logIn.component';
import SignInAndSignUpPageDoctor from './page/doctor-login/signIn-logIn-doctor.component';
import HomePage from './page/home/homePage.component';
import RecordPage from './page/record/recordPage.component';
import ArticlePage from './page/article/articlePage.component';
import ArticleShowPage from './page/article-show/articleShow.component';
import DoctorPage from './page/doctorPage/doctorPage.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/loginuser" element={<SignInAndSignUpPage />} />
        <Route path="/logindoctor" element={<SignInAndSignUpPageDoctor />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reports" element={<RecordPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/showarticle" element={<ArticleShowPage />} />
        <Route path="*" element={<HeroPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
