import React from "react";
import Card from "./card";
import "./top-card-list.css";

const cardListData = [
  {
    username: "Mi perfil",
    id: 1,
    followers: "1596",
    todayFollowers: 12,
    icon: "ilustraciones/carbon_footprint.svg",
    name: "perfil",
  },
  {
    username: "Cacular huella de carbono",
    id: 2,
    followers: "28k",
    todayFollowers: 20,
    icon: "ilustraciones/carbon_footprint.svg",
    name: "calculadora",
  },
  {
    username: "Ranking",
    id: 3,
    followers: "6k",
    todayFollowers: 30,
    icon: "ilustraciones/carbon_footprint.svg",
    name: "ranking",
  },
  {
    username: "Calendario",
    id: 4,
    followers: "12k",
    todayFollowers: -50,
    icon: "ilustraciones/carbon_footprint.svg",
    name: "calendario",
  },
  {
    username: "Metas",
    id: 5,
    followers: "12k",
    todayFollowers: -50,
    icon: "imagenes/carbon_footprint.svg",
    name: "metas",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {/* {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))} */}
          <article className="card perfil">
            <p className="card-title">Mi perfil</p>
            <p className="card-followers">
              <img src="ilustraciones/access_biometric.svg" alt="" />
              {/* <span className="card-followers-number">28k</span> */}
              {/* <span className="card-followers-title">Followers</span> */}
            </p>
            {/* <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p> */}
          </article>
          <article className="card calculadora">
            <p className="card-title">Calcular huella de carbono</p>
            <p className="card-followers">
              <img src="ilustraciones/carbon_footprint.svg" alt="" />
              {/* <span className="card-followers-number">6k</span> */}
              {/* <span className="card-followers-title">Followers</span> */}
            </p>
            {/* <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p> */}
          </article>
          <article className="card ranking">
            <p className="card-title">
              {/* <img src="imagenes/carbon_footprint.svg" alt="" /> */}
              Ranking
            </p>
            <p className="card-followers">
              <img
                src="ilustraciones/sustainable_financial_products.svg"
                alt=""
              />
              {/* <span className="card-followers-number">12k</span> */}
              {/* <span className="card-followers-title">Followers</span> */}
            </p>
            {/* <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p> */}
          </article>
          <article className="card Calendario">
            <p className="card-title">
              {/* <img src="imagenes/carbon_footprint.svg" alt="" /> */}
              Calendario de actividades
            </p>
            <p className="card-followers">
              <img src="ilustraciones/calendar.svg" alt="" />
              {/* <span className="card-followers-number">12k</span> */}
              {/* <span className="card-followers-title">Followers</span> */}
            </p>
            {/* <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
              12 Today
            </p> */}
          </article>
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
