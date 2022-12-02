
import { useState } from "react";
import ChatShipAdr from "./ChatShipAdr";

const ChatBuyButton = () => {
    const [visibleAccLook, setvisibleAccLook] = useState(false);
    const [visibleDelInput, setvisibleDelInput] = useState(false);
    const [visibleDelLook, setvisibleDellook] = useState(false);
    const [type, setType] = useState('');

    const visibleAccountLook = (e) => {
        // console.log("선택한 값 : " +e.target.value)
        setvisibleAccLook(!visibleAccLook);
        setType(e.target.value)
    }
        console.log("값이 있나요?" +type);
    const visibleDeliveryLook = (e) => {
        setvisibleDelInput(!visibleDelInput);

    }
    const visibleDeliveryInput = (e) => {
        setvisibleDellook(!visibleDelLook);
    }

    return(
        <>
        <div className="sendPrivacy">
            {/* { visibleAccLook && <ChatShipAdr /> }  */}
             {visibleDelInput && <ChatShipAdr /> }
            {/* { visibleDelLook && <SendPhoto />}  */}
        </div>

        <div className="chatSell">
            <button onClick={visibleAccountLook} >{visibleAccLook ? "숨기기" : "계좌조회"}</button>
            <button onClick={visibleDeliveryInput}>{visibleDelInput ? "숨기기" : "배송정보입력"}</button>
            <button onClick={visibleDeliveryLook}>{visibleDelLook ? "숨기기" : "운송장조회"}</button>
            <button>배송조회</button>
            <button>사기피해조회</button>
        </div>
     </>
    );
}
export default ChatBuyButton;