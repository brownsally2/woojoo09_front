import send from "../resources/send1.png"


const ChatFooter = () => {
    return( 
    <div className="chatBottom">
        <input className="chatSend"/>
        <button><img src={send} alt="send"/></button>
    </div>
);

}
export default ChatFooter

