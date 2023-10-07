import './ItemListContainer.css'

const ItemListContainer = ({mensaje}) => {
    return (
        <div className='mensaje'>
            <h1>{mensaje}</h1>
        </div>
    )
}

export default ItemListContainer