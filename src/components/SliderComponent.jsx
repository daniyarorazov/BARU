import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper";
import SliderCardItemComponent from './SliderCardItemComponent';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


function SliderComponent() {
    const datas = [
    {
        id: 1,
        title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
        imgSrc: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        dateOfEvent: "16 августа",
        linkEvent: "https://google.com/"
    },
    {
        id: 2,
        title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
        imgSrc: "https://images.unsplash.com/photo-1531077386034-d12285794b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        dateOfEvent: "16 августа",
        linkEvent: "https://google.com/"
    },
    {
        id: 3,
        title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
        imgSrc: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
        dateOfEvent: "16 августа",
        linkEvent: "https://google.com/"
    },
    {
        id: 4,
        title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
        imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        dateOfEvent: "16 августа",
        linkEvent: "https://google.com/"
    },
    {
        id: 5,
        title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
        imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        dateOfEvent: "16 августа",
        linkEvent: "https://google.com/"
    },
    {
        id: 6,
        title: "Главные мероприятия недели в Алматы (15 — 21 августа)",
        imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        dateOfEvent: "16 августа",
        linkEvent: "https://google.com/"
    },
    ]

    const listItems = datas.map((data) => 
    <SwiperSlide>
        <SliderCardItemComponent 
            title={data.title} 
            imgSrc={data.imgSrc} 
            dateOfEvent={data.dateOfEvent} 
            linkEvent={data.linkEvent}
        />
    </SwiperSlide>
    );

    return (
        <div className="container">
            <Swiper 
                className={"mySwiper"}
                cssMode
                loop
                navigation
                slidesPerView={3}
                modules={[Pagination, Navigation]}
                pagination={{dynamicBullets: true, clickable: true}} 
                >
                    {listItems}
            </Swiper>
        </div>
    );
}

export default SliderComponent;