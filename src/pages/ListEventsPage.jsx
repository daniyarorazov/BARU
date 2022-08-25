import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SliderCardItemComponent from "../components/Slider/SliderCardItemComponent";
import ButtonComponent from "../components/UI/buttons/ButtonComponent";
import styles from "../styles/ListEventsPage.module.sass";
import NavbarSearch from "../components/Navbar/NavbarSearch";
import DropdownComponent from "../components/UI/buttons/DropdownComponent";

const filterEvents = (searchText, listOfEvents, sortParam) => {
  if (!searchText && !sortParam) {
    return listOfEvents;
  }

  if (sortParam == "price_down" && searchText === "") {
    listOfEvents.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    console.log("SortParam is work");
    return listOfEvents;
  } else if (sortParam == "price_up" && searchText === "") {
    listOfEvents.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    console.log("SortParam is work");
    return listOfEvents;
  } else if (sortParam == "near" && searchText === "") {
    listOfEvents.sort(
      (a, b) =>
        new Date(...a.dateOfEvent.split(".").reverse()) -
        new Date(...b.dateOfEvent.split(".").reverse())
    );
    console.log("SortParam is work");
    return listOfEvents;
  }

  if (sortParam == "price_down" && searchText !== "") {
    console.log("SortParam and Search is work");
    return listOfEvents
      .filter(({ title }) =>
        title.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (sortParam == "price_up" && searchText !== "") {
    console.log("Near sort");
    return listOfEvents
      .filter(({ title }) =>
        title.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortParam == "near" && searchText !== "") {
    console.log("Near sort");
    return listOfEvents
      .filter(({ title }) =>
        title.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort(
        (a, b) =>
          new Date(...a.dateOfEvent.split(".").reverse()) -
          new Date(...b.dateOfEvent.split(".").reverse())
      );
  }

  return listOfEvents.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
};

const ListEventsPage = () => {
  const [sortValue, setSortValue] = useState("");
  const options = [
    { label: "Сортировка", value: "" },
    { label: "Возрастание цены", value: "price_up" },
    { label: "Убывание цены", value: "price_down" },
    { label: "Ближайшие", value: "near" },
  ];

  const datas = [
    {
      id: 1,
      title: "Event Mega",
      imgSrc:
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      dateOfEvent: "16.04.2022",
      linkEvent: "https://google.com/",
      price: 4000,
    },
    {
      id: 2,
      title: "Event Top",
      imgSrc:
        "https://images.unsplash.com/photo-1531077386034-d12285794b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      dateOfEvent: "24.09.2022",
      linkEvent: "https://google.com/",
      price: 10000,
    },
    {
      id: 3,
      title: "Топ мероприятия недели в Алматы (15 — 21 августа)",
      imgSrc:
        "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      dateOfEvent: "31.12.2022",
      linkEvent: "https://google.com/",
      price: 2000,
    },
    {
      id: 4,
      title: "Четкие мероприятия недели в Алматы (15 — 21 августа)",
      imgSrc:
        "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      dateOfEvent: "12.10.2022",
      linkEvent: "https://google.com/",
      price: 40000,
    },
    {
      id: 5,
      title: "Лучшие мероприятия недели в Алматы (15 — 21 августа)",
      imgSrc:
        "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      dateOfEvent: "01.11.2022",
      linkEvent: "https://google.com/",
      price: 30000,
    },
    {
      id: 6,
      title: "Возможные мероприятия недели в Алматы (15 — 21 августа)",
      imgSrc:
        "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      dateOfEvent: "28.11.2022",
      linkEvent: "https://google.com/",
      price: 1000,
    },
  ];
  const [eventsList, setEventsList] = useState(datas);
  const [searchEvent, setSearchEvent] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredEvents = filterEvents(searchEvent, datas, sortValue);
      setEventsList(filteredEvents);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchEvent, sortValue]);

  const listItems = eventsList.map((data) => (
    <SliderCardItemComponent
      title={data.title}
      imgSrc={data.imgSrc}
      dateOfEvent={data.dateOfEvent}
      linkEvent={data.linkEvent}
      price={data.price}
    />
  ));

  return (
    <>
      <Navbar />
      <main>
        <div className={styles["search__block"]}>
          <h1 className={styles["search__title"]}>Все мероприятия</h1>
          <NavbarSearch
            value={searchEvent}
            type="text"
            autoComplete="off"
            placeholder="Search..."
            onChange={(event) => setSearchEvent(event.target.value)}
          />
          <div className={styles["search__control"]}>
            <ButtonComponent
              className={styles["control__button"]}
              value="Категория"
            />
            <DropdownComponent
              className={styles["control__dropdown"]}
              label="What do we eat?"
              options={options}
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
            />
          </div>
          <div className="search__result">{listItems}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ListEventsPage;
