
import {
    Link
} from "react-router-dom";



function AppRoute() {
    return (
        <>
            <div>
                <Link to="/">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </div>
        </>
    )
}


export default AppRoute