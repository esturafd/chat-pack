import NavMenu from "../components/NavMenu"

const Groups = () => {
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
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td colspan="3"><label class="titulo">Grupos:</label></td>
				<td></td>
			</tr>			
			<tr>
				<td colspan="4"><hr/></td>
				<td></td>
			</tr>									
			<tr>
				<td></td>
				<td><img class="clsUsuario" src="./img/grp1.png" alt="usuario"/></td>
				<td><img class="clsTecnologia" src="./img/skype.png" alt="tecnologia"/></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td><img class="clsUsuario" src="./img/grp2.png" alt="usuario"/></td>
				<td><img class="clsTecnologia" src="./img/WhatsApp.png" alt="tecnologia"/></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td><img class="clsUsuario" src="./img/grp3.png" alt="usuario"/></td>
				<td><img class="clsTecnologia" src="./img/telegram.png" alt="tecnologia"/></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td><img class="clsUsuario" src="./img/grp4.png" alt="usuario"/></td>
				<td><img class="clsTecnologia" src="./img/telegram.png" alt="tecnologia"/></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td><img class="clsUsuario" src="./img/grp5.png" alt="usuario"/></td>
				<td><img class="clsTecnologia" src="./img/WhatsApp.png" alt="tecnologia"/></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td><img class="clsUsuario" src="./img/grp6.png" alt="usuario"/></td>
				<td><img class="clsTecnologia" src="./img/telegram.png" alt="tecnologia"/></td>
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

export default Groups