import React, {Component} from 'react';
import '../css/userPopUp.css'


class UserPopUp extends Component{
    constructor(props) {
        super(props)

        this.state = {
            height: 2,
            width: 2,
        }
    }

    render() {
        return (
            <div className="user-bio-box">
                this is the creators bio!!
            </div>
        )
    }

}
    

export default UserPopUp;