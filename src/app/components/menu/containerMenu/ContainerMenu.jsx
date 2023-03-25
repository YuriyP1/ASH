import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import menu from '../../../../assets/menu/menu.json'
import CardMenu from '../../cardMenu/CardMenu'
import './style.scss'

const ContainerMenu = ({ section, filter }) => {

    // const storeSection = useSelector(state => state.section.section)

    return (
        <div className="ContainerMenu">
            {
                menu.menu.map((item, _index)=>{
                    if(section === item.chapter){
                        return <CardMenu key={item.id + Math.random()}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            weight={item.weight}
                            amount={item.amount}
                            index={item.id}
                        />
                    }
                })
            }
        </div>
    )
}

export default ContainerMenu