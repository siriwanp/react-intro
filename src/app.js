import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">search</button>
        </form>
    )
}

//const title = 'My React Application'
const Header = (props) => (
        <header>
            <h1>{props.title}</h1>
              <SearchForm />

        </header>

)
const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <li>{item}</li>
        ))}
        </ul>
    )
}

const Content = (props) => (
    <section>
        <p>{props.description}</p>
        <Items items={props.items}/>
    </section>
)

const AppWithoutDescription = () => (
    <Header title = 'No description here'/>
)

const App = () => {
    const title = 'Fronttechs: React'
    const description = 'A simple react application'
    const items = [
        "Oliver",
        "Tobey",
        "Charkue",
        "Lucky",
        "Poo"
    ]
    return (
        <section>
          <Header title={title} />
          <Content description={description}
                items={items}/>
        </section>
        
    )
}

const element = document.getElementById('app')
//ReactDOM.render(<AppWithoutDescription />,element)
ReactDOM.render(<App />,element)