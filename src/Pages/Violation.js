import Violations from "../Component/Violation/Violations";
// import Login from "../Component/Login/Login";

function Violation(props) {
    const {user} = props;
    return (
        <div>
            <Violations user={user}/>
        </div>
    );
}

export default Violation;