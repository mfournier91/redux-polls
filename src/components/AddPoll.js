import React, {Component} from 'react'
import {handleAddPoll} from "../actions/polls";
import {connect} from 'react-redux'

class AddPoll extends Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState(() => ({
            [name]: value
        }))

    }

    handleSubmit = (e) => {
        e.preventDefault()
        let poll = {...this.state}
        this.props.dispatch(handleAddPoll(poll))
    }

    isDisabled = () => {
        const {question,a,b,c,d} = this.state
        return question == ''
            || a == ''
            || b == ''
            || c == ''
            || d == ''
    }

    render() {
        const {question, a, b, c, d} = this.state
        return (
            <form className="add-form" onSubmit={this.handleSubmit}>
                <h3 style={{marginBottom: 5}}>What is your question?</h3>
                <input className="input" type="text" name="question" value={question} onChange={this.handleChange}/>

                <h3>What are the options?</h3>

                <label className="label" htmlFor="a">A.</label>
                <input className="input" type="text" name="a" value={a} onChange={this.handleChange}/>
                <label className="label" htmlFor="b">B.</label>
                <input className="input" type="text" name="b" value={b} onChange={this.handleChange}/>
                <label className="label" htmlFor="c">C.</label>
                <input className="input" type="text" name="c" value={c} onChange={this.handleChange}/>
                <label className="label" htmlFor="d">D.</label>
                <input className="input" type="text" name="d" value={d} onChange={this.handleChange}/>
                <button className="btn" disabled={this.isDisabled()} type="submit">Submit</button>
            </form>
        )
    }

}




export default connect()(AddPoll)