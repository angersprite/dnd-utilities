export default function RecoverPW() {
    return (
        <div className="form-container">
            <form>
                <div className="vert-label-field">
                    <label htmlFor="userName">Enter your username</label>
                    <input type="text" id="userName" name="userName" required></input>
                </div>
                <div>
                    <button className="big-button">Reset Password</button>
                </div>
            </form>
        </div>
    )
}

function resetPassword() {
    // call api endpoint to reset password
}