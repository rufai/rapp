import "./index.css"
import MoreFromYoutube from "../MoreFromYoutube";
import Subscription from '../Subscription';
import PersonalVideo from "../PersonalVideo";
import Overview from "../Overview";

function Sidebar(){
    return (
        <div className="sidebar">
            <input id="koko" type="text" />
            {/* <label forHTML="koko"> do you know the koko ? </label> */}
            <h1>Sidebar component</h1>
            <Overview />
            <hr />
            <PersonalVideo />
            <hr />
            <Subscription />
            <hr />
            <MoreFromYoutube />
        </div>
    )
}

export default Sidebar;