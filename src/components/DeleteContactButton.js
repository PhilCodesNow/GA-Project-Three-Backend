import React, { Component } from 'react';




export default class DeleteContactButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    deleteContact = () =>{
        console.log('Delete clicked');
        // let thisContact = this
        // const response = await fetch (`${baseURL}/contacts/${lastItem._id}`,{
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `bearer ${token}`,
        //     },
    
        // })
    }


	render() {
		return (
            <button onClick={deleteContact()}>Delete</button>
            )
	}
}