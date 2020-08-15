import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components';


const Home = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    // onClick = {() => console.log()}
                    items={[
                        "Su mėsa", "Vegetariškos", "Griliaus", "Aštrios", "Uždaros"
                    ]}
                />
                <SortPopup
                    items={[
                        { name: 'Populiariausios', type: 'popular' },
                        { name: 'Pagal kainas', type: 'price' },
                        { name: 'Pagal abėcėlę', type: 'alphabet' }
                    ]}
                />
            </div>
            <h2 className="content__title">Visos picos</h2>
            <div className="content__items">
                {
                    items.map(obj => <PizzaBlock
                        key={obj.id}
                        {...obj}
                    />)
                }
            </div>
        </div>
    )
}

export default Home
