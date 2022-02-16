import React from 'react'
import Carousel from "react-elastic-carousel"
import './Client.css'

// device break points
const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3},
    { width: 1200, itemsToShow: 4},
    { width: 1600, itemsToShow: 5},
]

// carousel items and images
const items = [
    {id: 1, title: "SprtsIQ", logo_url: "https://sprtsiq.com/img/logo/SprtsIQ_Logo.png", url: "https://sprtsiq.com/"},
    {id: 2, title: "Fraxses", logo_url: "https://intenda.tech/wp-content/uploads/2020/10/fraxses_logo.dfea89b4.png", url: "https://intenda.tech/fraxses/"},
    {id: 3, title: "Purpose Matters", logo_url: "https://images.squarespace-cdn.com/content/v1/5b7b65e6365f02d291a4d673/1541442741593-Y5F859S7BHDH92TFOAZN/Wide-Logo-Color.png", url: "https://www.purposematters.com/who-we-are"},
    {id: 4, title: "Univesity of Wisconsin-Madison", logo_url: "https://www.wisc.edu/images/uw-crest-wordmark-overlay.svg", url: "https://www.wisc.edu/"},
    {id: 5, title: "United States Air Force", logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mark_of_the_United_States_Air_Force.svg/1200px-Mark_of_the_United_States_Air_Force.svg.png", url:"https://www.af.mil/"}
]

const Client = () => {
    return (
        <React.Fragment>
            <div class='carousel'>
                <h1>Our Clients</h1>
                <h2>Startups, companies, and institutions who we've supported</h2>  
                <Carousel breakPoints={breakPoints}>
                    {items.map(item => <a href={item.url}><img class='item' key={item.id} src={item.logo_url} alt={item.title}/></a>)}
                </Carousel>
            </div>
        </React.Fragment>
    )
}

export default Client;