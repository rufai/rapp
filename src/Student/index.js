// pass data to a component
// using
// props = properties = plural - it can collect more than attribute
// props is object
// props will contain the content put in the component call
function Student(props){
    // console.log(props)
    const {name, age, img} = props

    return (
        <section>
            <hr />
            <h3>{name}</h3>
            <h4> {age } </h4>
            <img src={img} alt={name} />
        </section>
    )
}

let name ="Ogo"

export { Student, name };