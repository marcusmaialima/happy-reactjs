import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import mapIcon from "../utils/mapIcon";
import IOrphanage from './interfaces/Orphanage';

import mapMarkerImg from "../assets/images/map-marker.svg";
import "../assets/styles/pages/orphanages-map.css";
import api from "../services/api";

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    api.get("/orphanages").then((response) => {
      setOrphanages(response?.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Ícone do Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </header>
        <footer>
          <strong>Barra Mansa</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>

      <Map
        center={[-22.5428511, -44.1625245]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon}>
              <Popup
                className="map-popup"
                closeButton={false}
                minWidth={240}
                maxWidth={240}
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
