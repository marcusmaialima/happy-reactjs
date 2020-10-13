import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../assets/images/map-marker.svg';
import '../assets/styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Ícone do Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </header>
                <footer>
                    <strong>Barra Mansa</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map 
                center={[-22.5428511,-44.1625245]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;