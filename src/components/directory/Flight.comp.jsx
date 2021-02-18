import React, {} from 'react';
// import './flight.styles.scss';

const Flight = ({id,title, flight_number, details, event_date_utc, links}) => {
    const date= event_date_utc;
    const n = flight_number;
    const article_url = links.article;
    const wiki_url = links.wikipedia;

    return (

        <article className="single-flight"> 

            {/* <Search /> */}
        <p className="flight-price"> Flight number: {n}</p>
       
    <h2 className="black"> {title}</h2>
        <hp className='flight-price'>  Mission Date: {date}</hp>
        <footer>
             
         <div className='flight-info'>
        
    <p> {details} </p>

            </div>
    <hp className='flight-price'> Wikipedia</hp>
    <p> 
        <a href= {wiki_url} >{wiki_url}</a>
        </p>

   <hp className='flight-price'> Article</hp>
    
   <p> 
        <a href= {article_url} >{article_url}</a>
        </p>
        
        
        </footer>
        
            
        </article>
    );
};

export default Flight;