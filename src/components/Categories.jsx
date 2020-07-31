import React, {useState} from 'react'

const Categories = ({ items, onClick }) => {
    
    const [activeItem, setActiveItem] = useState(null)

    const changeActiveItem = (a) => {
        setActiveItem(a)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => changeActiveItem(null)}
                    >Visos
                </li>
                {items && items.map((item, index) =>
                    <li className={activeItem === index ? 'active' : ''}
                        onClick={() => changeActiveItem(index)}
                        key={`${item}_${index}`}>{item}
                    </li>)}
            </ul>
        </div>
    )
}

export default Categories
