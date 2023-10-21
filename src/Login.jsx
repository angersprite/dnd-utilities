import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="form-container">
            <form>
                <div className="vert-label-field">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" name="userName"></input>
                </div>
                <div className="vert-label-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                </div>
                <div>
                    <button className="big-button">Log In</button>
                </div>

                <div>
                    <Link to={`/Register`}>Register</Link>
                </div>
                <div>
                    <Link to={`/RecoverPW`}>Forgot your password?</Link>
                </div>
            </form>
        </div>
    )
}