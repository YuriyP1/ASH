import { createRoot } from 'react-dom/client'
import App from './app/app'
import './style/style.scss'

const root = createRoot(document.querySelector('#root'))
 
root.render(
            <App />
)