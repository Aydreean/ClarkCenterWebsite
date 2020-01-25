import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'ol/ol.css';
import ol from 'ol';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as proj from 'ol/proj';

class HomeMap extends Component {

  componentDidMount() {
    var map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: proj.fromLonLat([-83.332819, 42.325450]),
        zoom: 18
      })
    })
  }
  render() {
    return (
      <div id="map" className="map"></div>
    )
  }
}

export default HomeMap