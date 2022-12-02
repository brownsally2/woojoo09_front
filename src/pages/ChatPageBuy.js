
import { useState } from "react";
import ChatList from "../components/ChatList";
import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import ChattingProduct from "../components/Chattingproduct";
import ChattingProductBuy from "../components/ChattingPoductBuy";
import ChatBuyButton from "../components/ChatBuyButton";
import ChatSellButton from "../components/ChatSellButton";

const ChatPageBuy = () => {
    // const EntranceBuy  = visible?
    //   <ChattingProductBuy /> :  <ChattingProduct />;

 
  return(
    <div className="wrapper">
      <div className="chatLeft"><ChatList/></div>
      <div className="chatRight">
        
        <ChatHeader/>

        {/* {EntranceBuy} */}
        {/* <ChattingProduct /> */}
        <ChattingProductBuy />
 

        <div className="chatContent">
          <div className="chatDate">2022년 12월 1일</div>
          <div className="chatMessage">상대가 보낸 메세지!!!!!</div>
          <div className="chatTalkTime">19:00</div>
          <div className="chatTalkTime-My">19:12</div>
          <div className="chatMessage-My">내가 보낸 메세지!!!!!!</div>
        </div>

      <ChatBuyButton/>

      <ChatFooter/>
      
      </div>
    </div>
  )
}
export default ChatPageBuy