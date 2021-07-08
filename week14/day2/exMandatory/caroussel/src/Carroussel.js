import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselType extends Component {
    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../public/assets', false, /\.(jpe?g|wbp)$/));

        let elems = this.props.assets.map((asset,index)=>{

            console.log(images)
            return (
                <div style={{maxHeight:"100vh"}} key = {index}>
                    <img src={images[`${asset.image}`].default} alt={asset.name}/>
                    <p className="legend">{asset.name}</p>
                </div>
            )
        })

        return (
            

            <Carousel showArrows={true} >
               
                {elems}
            </Carousel>
        );
    }
};

export default CarouselType