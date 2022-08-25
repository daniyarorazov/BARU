import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SliderCardItemComponent from '../components/Slider/SliderCardItemComponent';
import ButtonComponent from '../components/UI/buttons/ButtonComponent';
import styles from "../styles/ListEventsPage.module.sass"
import NavbarSearch from '../components/Navbar/NavbarSearch';

const filterEvents = (searchText, listOfEvents) => {
    
    if(!searchText){
        return listOfEvents;
    } 

    return listOfEvents.filter(({title}) => title.toLowerCase().includes(searchText.toLowerCase()));
    
}

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
            title: "Супер мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1531077386034-d12285794b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            dateOfEvent: "16 августа",
            linkEvent: "https://google.com/"
        },
        {
            id: 3,
            title: "Топ мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
            dateOfEvent: "16 августа",
            linkEvent: "https://google.com/"
        },
        {
            id: 4,
            title: "Четкие мероприятия недели в Алматы (15 — 21 августа)",
            imgSrc: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            dateOfEvent: "16 августа",
            linkEvent: "https://google.com/"
        },
        {
            id: 5,
            title: "Лучшие мероприятия недели в Алматы (15 — 21 августа)",
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
    const [eventsList, setEventsList] = useState(datas);
    const [searchEvent, setSearchEvent] = useState('');
    
    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredEvents = filterEvents(searchEvent, datas);
            setEventsList(filteredEvents);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchEvent])

    const listItems = eventsList.map((data) => 
            <SliderCardItemComponent 
                title={data.title} 
                imgSrc={data.imgSrc} 
                dateOfEvent={data.dateOfEvent} 
                linkEvent={data.linkEvent}
            />
        );
    return (
        <>
        <Navbar/>
                <main>
                    <div className={styles["search__block"]}>
                        <h1 className={styles["search__title"]}>Все мероприятия</h1>
                        <NavbarSearch
                            value = {searchEvent}
                            type = "text"
                            autoComplete="off"
                            placeholder = "Search..."
                            onChange = {(event) => setSearchEvent(event.target.value)}
                        />
                        <div className={styles["search__control"]}>
                            <ButtonComponent className={styles["control__button"]} value="Категория" />
                            <ButtonComponent className={styles["control__button"]} value="Сортировка"/>
                        </div>
                        <div className="search__result">
                            {listItems}
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    );
};

export default ListEventsPage;