import { ThemeContext } from "./App"
import { useContext } from 'react'
function Baa() {
    const theme  = useContext(ThemeContext)
    return (
        
        <div>
            {console.log(theme)}
            <p className={theme}>
            rthigfjuiretghuirehuergierguihreguiguieruhireg
            </p>
        </div>
    )
}
export default Baa