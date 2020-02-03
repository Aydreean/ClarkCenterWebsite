import React, { Component } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as proj from 'ol/proj';

export default class ContactMap extends Component {
    componentDidMount() {
        var map = new Map({
          target: 'map1',
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
            <div className="col-lg-8 mb-4">
            <div id="map1" className="map"></div>
          </div>
        )
    }
}
