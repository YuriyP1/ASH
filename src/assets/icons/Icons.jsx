
import basket from './allIcons/basket.svg'

const Icons = ({icon}) =>{

    switch(icon){
        case 'basket':
            return <img src={basket} alt="icon" />
    }

}

export default Icons
