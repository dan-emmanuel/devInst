import Button from 'react-bootstrap/Button';
import axios from 'axios'

let Header =  (props)=>{
    let {stateUpdater} = props
    let getData=async (media)=>{
        let url = `https://newsapi.org/v1/articles?source=${media}&apiKey=40f2953a030341b08cc18aac46f682f9`
        axios.get(url).then((response) => {
            stateUpdater(response.data.articles)
        });
        
    }

    return <div className="mt-5">
       <Button onClick ={()=>getData("bbc-news")}  variant="secondary"> BBC-news</Button>{' '}
       <Button onClick ={()=>getData("cnn")}  variant="secondary">CNN</Button>{' '}
       <Button onClick ={()=>getData("financial-times")}  variant="secondary">Financial-Times</Button>{' '}
       <Button onClick ={()=>getData("espn")}  variant="secondary">ESPN</Button>{' '}
       <Button onClick ={()=>getData("google-news")}  variant="secondary">Google-News</Button>{' '}

    </div>

}

export default Header
