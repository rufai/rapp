import "./style.css"

function TopItem(props){
    const {src, width, height} = props

    return (
        <div className="top_item">
            <h1>TopItem component</h1>
            <p>{width * 400} width </p>
            <p>{height} height</p>
            <p>{src} alternative</p>
        </div>
    )
}


export default TopItem;
