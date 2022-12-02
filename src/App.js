import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import CelebratePage from "./pages/CelebratePage";
import ChatListPage from "./pages/ChatListPage";
import ChatPage from "./pages/ChatPage";
import DetailPage from "./pages/DetailPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwdPage from "./pages/FindPwdPage";
import MainPage from "./pages/MainPage";
import MemberPage from "./pages/MemberPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPwdPage from "./pages/ResetPwdPage";
import TermAgreePage from "./pages/TermAgreePage";
import WritePage from "./pages/WritePage";
import TermPage from "./pages/TermPage";
import ChatPageBuy from "./pages/ChatPageBuy";
import "./style/common.scss";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { useState } from "react";

function App() {
 
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/category/:categoryName' element={<CategoryPage/>}/>
          <Route path='/findid' element={<FindIdPage/>}/>
          <Route path='/findpwd' element={<FindPwdPage/>}/>
          <Route path='/resetpwd' element={<ResetPwdPage/>}/>
          <Route path='/termagree' element={<TermAgreePage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/celebrate' element={<CelebratePage/>}/>
          <Route path='/detail/:tradeNum' element={<DetailPage/>}/>
          <Route path='/chatlist' element={<ChatListPage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path='/chatbuy' element={<ChatPageBuy/>}/>
          <Route path='/member' element={<MemberPage/>}/>
          <Route path='/write' element={<WritePage/>}/>
          <Route path='/term' element={<TermPage/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicyPage/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
