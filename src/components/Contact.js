import React, {Component} from 'react'
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                
                <img className="avatar" src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="avatar"></img>
            
                <div>
    
                    <div className="name">John Doe</div>
                    

                    <div className="status">
                        <div className="status-online"></div>   
                        <div className="status-text">online</div>
                    </div>   
                             
                </div>

            </div>

        )
    }
}

export default Contact