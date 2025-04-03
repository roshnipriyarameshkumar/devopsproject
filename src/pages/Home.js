import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer'
import './home.css'


export default function Home() {
    return (
        <div>
           
            <Banner/>
            <div className="distance">
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://media.cntraveler.com/photos/55537510560358cc3c6e6db0/master/w_1024,h_768,c_limit/tribeca-grand-hotel-cinema-cr-courtesy.jpg"
                title="Cinema theatre"
                description="Spaces that make your day entertaining"
            />
            <Card
                src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/07/swimming-pool-1625797369.jpg"
                title="Swimming pool"
                description="Natural feeling you will get for sure"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Rest room"
                description="Rest room where you can spend time of yours"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Single room"
                description="Enjoy the amazing sights of  with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
            
            
        </div>
        </div>
    )
}
