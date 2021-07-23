import { Component } from "react";

class PostList  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            errorMsg: ''
        };

    }

    componentDidMount = ()=>{
        
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // network failure, request prevented
                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response);
                }
                return Promise.reject(new Error(response.statusText));
            })
            .then(response => response.json())
            .then(result => {
                this.setState({"posts":result})
            })
            .catch(error => {
                this.setState({"errorMsg":error})
            });
        
    }

    render() {
        const {posts} = this.state
        return (
            <>
                <h1>List of Posts :</h1>
                {posts.length>0
                ?posts.map(post=><p key={post.id}>{post.body}</p>)
                :<p >No Data</p>
                }
            </>
        );
    }
}


export default class FormApi1 extends Component {
    render= ()=><PostList />
}