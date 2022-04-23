

function StoreItem(props){
    const {title,price, description, url, id } = props
    return (
        <section className={"div" + id}>
            <h3>{title}</h3>
            <img src={url} alt={description} width="200px" height="200px" />
            <p>{description}</p>
            <button type="button">Buy {price}</button>            
        </section>
    )
}

export default StoreItem;