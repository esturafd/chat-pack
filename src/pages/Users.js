import NavMenu from "../components/NavMenu"
import UserList from "../components/UserList"

const Users = () => {
    return (
        <>
            <table style={{width:"100%"}} border="0" >
                <tr>
                    <td style={{width:"10%"}}></td>
                    <td style={{width:"90%"}}></td>
                </tr>
                <tr>
                    <td style={{verticalAlign: "top"}}>
                        <div id="IdDivMenuPrincipal">
                            <NavMenu />	
                        </div>
                    </td>
                    <td style={{verticalAlign: "top"}}>
                        <div id="IdDivFrame">
                            <UserList />
                        </div>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default Users