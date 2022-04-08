// name, flag, wiki
function VideoCard(props){
    return (
        <section>
            <hr />
            <img src={props.flag} alt={props.country_name} />
            <section>
                <h4>{props.country_name} </h4>
                <a href= {"https://en.wikipedia.org"+ props.wiki}  target="_blank">Visit  {props.country_name} on wikipedia</a>
            </section>
        </section>
    )
}

export default VideoCard;