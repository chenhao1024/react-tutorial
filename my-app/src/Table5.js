import React from 'react'

class Table5 extends React.Component{
    constructor(props){
        super(props)
        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target
        console.log(event.target)
        this.setState({
            [name]: value
        })
    }
    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render(){
        const {name, job} = this.state
        return(
            <form>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                <label>Job</label>
                <input type="text" name="job" value={job} onChange={this.handleChange}></input>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Table5