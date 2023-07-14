import { Link } from "react-router-dom";

function Error404() {
    return (
        <div className="error-404">
            <p>Nothing to see here!</p>
            <div className="button-arrow">
                <Link to='/'>
                    Go Back Home
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                </Link>
            </div>
        </div>
    );
}
export default Error404;