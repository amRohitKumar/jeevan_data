import {Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HeroPage from './page/hero/heroPage';
import SignInAndSignUpPage from './page/login/signIn-logIn.component';
import HomePage from './page/home/homePage.component';
import RecordPage from './page/record/recordPage.component';
import ArticlePage from './page/article/articlePage.component';
import ArticleShowPage from './page/article-show/articleShow.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<SignInAndSignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reports" element={<RecordPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/showarticle" element={<ArticleShowPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
