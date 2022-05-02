import React from "react";
import axios from "axios";
import {Products} from "..Products/"
export default class PersonalList extends React.Component {
    state={
        person:[]
    }
    componentDidMount(){
        axios.get(`https://movie-fake-server.herokuapp.com/products`).then(res=>{
            const person = res.data;
            this.setState({person});

        })
    }
    render(){
        return (
            <>
            {
                this.state.person.map(person =><Products person={person} key={person.id}/>)
            }
            </>
        )
    }
}