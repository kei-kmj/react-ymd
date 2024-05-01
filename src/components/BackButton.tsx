import {Link} from "react-router-dom";

export const BackButton = () => {
    return <Link to="/">
        <button>Back to App</button>
    </Link>;
}