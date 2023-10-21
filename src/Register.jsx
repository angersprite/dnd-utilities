let password = ""
let confirmPassword = ""

export default function Register() {
    return (
        <div className="form-container">
            <form>
                <div className="vert-label-field">
                    <label htmlFor="userName">Email</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div className="vert-label-field">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" name="userName" required></input>
                </div>
                <div className="vert-label-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div className="vert-label-field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="password" required></input>
                </div>
                <div>
                    <button className="big-button">Log In</button>
                </div>
            </form>
        </div>
    )
}

function isPasswordValid() {
    // check for password min length, complexity
    return true
}

function isPasswordConfirmed() {
    return password == confirmPassword
}

function register() {
    if (!isPasswordValid()) {
        // show error
    }
    else if (!isPasswordConfirmed()) {
        // show error
    }
    else {
        // salt + hash pw
        // insert registration info into db
        // send confirmation email
    }
}