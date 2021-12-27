import { Link } from "react-router-dom"
import "./LoginBox.css"

const LoginBox = () => {
    return (
        <div className="form">
            <form className="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <Link to="/users">
                    <button>login</button>
                </Link>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
            </form>
        </div>
    )
}

export default LoginBox
