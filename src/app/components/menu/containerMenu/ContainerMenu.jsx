import menu from '../../../../assets/menu/menu.json'
import CardMenu from '../../cardMenu/CardMenu'
import './style.scss'

const ContainerMenu = ({ chapter, filter }) => {

    return (
        <div className="ContainerMenu">
            {
                menu.menu.map((item, _index)=>{
                    return <CardMenu key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        weight={item.weight}
                        amount={item.amount}
                        index={item.id}
                />
                })
            }
        </div>
    )
}

export default ContainerMenu