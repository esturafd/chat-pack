import "./ContentBox.css"
import NavMenu from "./NavMenu"

const ContentBox = ({ children }) => {
    return (
        <>
            <NavMenu />
            <div className="content-box">
                { children }
            </div>
        </>
    )
}

export default ContentBox