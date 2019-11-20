import React from 'react'

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}

class Timer extends React.Component {
    state = {
        counter: 0
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        )
    }
}


class TodoListApp extends React.Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            items: [],
            text: ''
        }
    }

    


    handleChange(event){
        let {value} = event.target
        this.setState({
            text: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (!this.state.text.length){
            return
        }

        this.setState({
            items: this.state.items.concat({text: this.state.text}),
            text: ''
        })
    }

    render(){
        return(
            <div>
                <h1>
                    TodoList
                </h1>
                <TodoList items={this.state.items} />
                What needs to be done?
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <input type="button" value={'Add #' + this.state.items.length} onClick={this.handleSubmit} />
            </div>
        )
    }
}

class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.items.map((item,index)=> {
                    return <li key={index}>{item.text}</li>
                })}
            </ul>
        )
    }
}


class Demo1 extends React.Component {
    render() {
        return (
            <div>
                <HelloMessage name="Taylor" />
                <Timer />
                <TodoListApp />
            </div>
        )
    }
}


export default Demo1