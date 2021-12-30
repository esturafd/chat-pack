import ContentBox from "../components/ContentBox"
import NavMenu from "../components/NavMenu"

const Configs = () => {
    return (
        <ContentBox>
            <table border="0">
                <tr>
                    <td style={{width:"60px"}}></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><label class="titulo">Configuraciones:</label></td>
                    <td></td>
                </tr>						
                <tr>
                    <td colspan="2"><hr/></td>
                    <td></td>
                </tr>						
                <tr>
                    <td></td>
                    <td><img class="clsUsuario" src="./img/configuraciones.png" alt="Configuraciones"/></td>
                    <td></td>
                </tr>
            </table>
        </ContentBox>
    )
}

export default Configs
