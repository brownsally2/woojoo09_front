
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MemberInfo from "../components/MemberInfo";
import Header from "../components/Header";

import { isLogin } from "../util/common";
const MemberPage = () =>{
  // if(!isLogin){
  //   window.location.replace("/");
  // }
  // if(isLogin){
    return(
      <div className="memberinfowrapper">
        <div className="headerwrapper">
          <Header/>
        </div>
        <MemberInfo/>
        <Footer/>
      </div>
    );
  // }
}
export default MemberPage
