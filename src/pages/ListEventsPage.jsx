import React from 'react';
import SliderCardItemComponent from '../components/SliderCardItemComponent';
import ButtonComponent from '../components/UI/buttons/ButtonComponent';
import styles from "../styles/ListEventsPage.module.css"

const ListEventsPage = () => {
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
            <SliderCardItemComponent 
                title={data.title} 
                imgSrc={data.imgSrc} 
                dateOfEvent={data.dateOfEvent} 
                linkEvent={data.linkEvent}
            />
        );
    return (
        <div className={styles["search__block"]}>
            <h1 className={styles["search__title"]}>Все мероприятия</h1>
            <div className={styles["search__control"]}>
                <ButtonComponent className={styles["control__button"]} value="Категория" />
                <ButtonComponent className={styles["control__button"]} value="Сортировка"/>
            </div>
            <div className="search__result">
                {listItems}
            </div>

        </div>
    );
};

export default ListEventsPage;