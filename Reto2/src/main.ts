import './style.css'
import { Password } from './Password'

let password = new Password(8);
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${password.getLongitud()}
    ${password.getPassword()}
  </div>
`

