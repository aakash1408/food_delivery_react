import User from "./User.js"
import UserClass from "./UserClass.js";

const About = () => {
    return(
        <div>
            <h2> This is a food delivering app.</h2>
            <h3> Orber your add from the convenience of your home.</h3>
            <User></User>
            <UserClass name = "AAKASH"></UserClass>
        </div>
    );
};

export default About;