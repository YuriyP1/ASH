import { useSelector } from 'react-redux'
import CardMenu from '../../cardMenu/CardMenu'
import './style.scss'

const ContainerMenu = ({ section, filter, menuListFiltered = '', setFullCard }) => {

    const menuList = useSelector(store => store.list.menu)

    return (
        <div className="ContainerMenu">
            {   
                menuList.map((item, _index)=>{
                        return <CardMenu key={item.id + Math.random()}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            weight={item.weight}
                            amount={item.amount}
                            number={item.number}
                            id={item.id}
                            setFullCard={setFullCard}
                        />
                })
            }
        </div>
    )
}

export default ContainerMenu