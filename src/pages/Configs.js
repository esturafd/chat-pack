import NavMenu from "../components/NavMenu"

const Configs = () => {
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
                        </div>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default Configs
