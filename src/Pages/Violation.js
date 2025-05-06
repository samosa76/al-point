import { Navigate, useParams } from "react-router-dom";
import Violations from "../Component/Violation/Violations";
// import Login from "../Component/Login/Login";

function Violation() {
    const { id } = useParams();

    if (id === "undefined") {
        return <Navigate to={`/sign-in`} />
    }
    else {
        return (
            <div>
                <Violations idName={id}/>
            </div>
        );
    }
    // return (
    //     <div>
    //         <Violations />
    //     </div>
    // );
}

export default Violation;