import { Component } from "react";

class UserList  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [],
            loaded: false
        };

    }

    componentDidMount = ()=>{
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // network failure, request prevented
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response);
                }
                return Promise.reject(new Error(response.statusText));
            })
            .then(response => response.json())
            .then(result => {
                this.setState({users:result,loaded:true})
            })
            .catch(error => {
                this.setState({"errorMsg":error})
            });
        
    }

    render() {
        const {users,loaded} = this.state
        return (
            <>
                <h1>List of Users :</h1>
                <div style={{marginLeft:"25%",width:"50%"}}>
                    <ul>
                        {loaded
                        ?users.map(({id,name,username,email,address:{city}})=> 
                            <div key={id} style={{marginBottom:"15px"}}>
                                <div>ID:{id}</div>
                                <div>Name: {name}</div>
                                <div>Username: {username}</div>
                                <div>Email:{email}</div>
                                <div>city:{city}</div>
                            </div>
                        )
                        :<p >Loading...</p>
                        }
                    </ul>
                </div>
            </>
        );
    }
}


export default class FormApi1 extends Component {
    render= ()=><UserList />
}