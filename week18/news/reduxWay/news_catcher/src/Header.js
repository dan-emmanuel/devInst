import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {fetchNews} from './redux/action'

let Header =  (props)=>{
    let {fetchNews} = props
    
    return <div className="mt-3 mb-3">
       <Button onClick ={(e)=>fetchNews("bbc-news")}  variant="secondary"> BBC-news</Button>{' '}
       <Button onClick ={(e)=>fetchNews("cnn")}  variant="secondary">CNN</Button>{' '}
       <Button onClick ={(e)=>fetchNews("financial-times")}  variant="secondary">Financial-Times</Button>{' '}
       <Button onClick ={(e)=>fetchNews("espn")}  variant="secondary">ESPN</Button>{' '}
       <Button onClick ={(e)=>fetchNews("google-news")}  variant="secondary">Google-News</Button>{' '}

    </div>

}

const dispatchToProps = (dispatch) => {
    return {
        fetchNews:(e)=>dispatch(fetchNews(e))
    }
  }
  export default connect(null,dispatchToProps)(Header);