// pass data to a component
// using
// props = properties = plural - it can collect more than attribute
// props is object
// props will contain the content put in the component call
function Student(props){
    console.log(props)

    return (
        <section>
            <hr />
            <h3>{props.name}</h3>
            <h4> { props.age } </h4>
            <img src={props.img} alt={props.name} />
        </section>
    )
}

export default Student;