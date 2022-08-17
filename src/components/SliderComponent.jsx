import React from 'react';
import Slider from "react-slick";
import SliderCardItemComponent from './SliderCardItemComponent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    const datas = [
        {
            id: 1,
            title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            dateOfEvent: "16 августа"
        },
        {
            id: 2,
            title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            dateOfEvent: "16 августа"
        },
        {
            id: 3,
            title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            dateOfEvent: "16 августа"
        },
        {
            id: 4,
            title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            dateOfEvent: "16 августа"
        },
        {
            id: 5,
            title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            dateOfEvent: "16 августа"
        },
        {
            id: 6,
            title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            dateOfEvent: "16 августа"
        },
    ]
    return (
        <div className="container">
        <Slider {...settings}>

            {/* {datas.map((event, key) => {
                <SliderCardItemComponent 
                imgSrc={"https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} 
                title={"Test"}
                dateOfEvent={"16 december"}
            />
            })} */}

            
            <SliderCardItemComponent 
                imgSrc={"https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} 
                title={"Test"}
                dateOfEvent={"16 december"}
            />
            <SliderCardItemComponent 
                imgSrc={"https://images.unsplash.com/photo-1531077386034-d12285794b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} 
                title={"Test"}
                dateOfEvent={"16 december"}
            />
            <SliderCardItemComponent 
                imgSrc={"https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"} 
                title={"Test"}
                dateOfEvent={"16 december"}
            />
            
        </Slider>
      </div>
    );
}

export default SliderComponent;