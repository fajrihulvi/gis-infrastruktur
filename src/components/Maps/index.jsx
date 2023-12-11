/* eslint-disable react/prop-types */
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const API_KEY = "AIzaSyALOdn_pNdH0rafCH2XESCX6JRj6rz2YPA";
import { Box } from "@chakra-ui/react";
import PangkalPinangRoads from "../../assets/pkg_transportasi_dummy.json"

const MyComponent = ({geoJsonData, useRoads, filterGeoJson}) => {
  const map = useMap('one-of-my-maps');
  useEffect(() => {
    if (!map) return;
    if (filterGeoJson) 
    {
      map.data.forEach(function(feature) {
        map.data.remove(feature);
      });
      map.data.addGeoJson(
        {
          type: "FeatureCollection",
          features: useRoads ? [...filterGeoJson, ...PangkalPinangRoads.features] : filterGeoJson,
        }
      )
      map.data.setStyle({
        fillColor: filterGeoJson.length > 1 ? 'red' :'yellow',
        opacity:0.1,
        strokeWeight: 1
      })
    } else {
      map.data.forEach(function(feature) {
        map.data.remove(feature);
      });
      map.data.addGeoJson(geoJsonData)
      useRoads ? map.data.addGeoJson(PangkalPinangRoads) : null;
      map.data.setStyle({
        fillColor: 'orange',
        opacity:0.1,
        strokeWeight: 1
      })
    }
  }, [filterGeoJson, useRoads]);

  useEffect(() => {
    if (!map) return;
    map.data.addGeoJson(geoJsonData)
    map.data.setStyle({
      fillColor: 'orange',
      opacity:0.1,
      strokeWeight: 1
    })
    map.data.addListener("click", (event) => {
      console.log(event.feature.h);
    });
  }, [map]);
  
  // Do something with the Google Maps map instance

  return <Box>
    asdajsd
  </Box>;
};

const MapsComponent = ({dataMap, useRoad, filteredGeoJson}) => {
  const [geoJson, setGeoJson] = useState(null);
  const [useRoads, setUseRoads] = useState(false);
  const [filterGeoJson, setFilterGeoJson] = useState(null);
  const position = {lat: -2.13212, lng: 106.11366};

  useEffect(() => {
      setGeoJson(dataMap);
  },[dataMap])

  useEffect(() => {
    setFilterGeoJson(filteredGeoJson);
  },[filteredGeoJson])

  useEffect(() => {
    setUseRoads(useRoad);
  },[useRoad])

  return (
    <APIProvider apiKey={API_KEY}>
      <div style={{ height: "100vh" }}>
        <Map
          id="one-of-my-maps"
          disableDefaultUI={true}
          style={{ position: "absolute" }}
          zoom={15}
          center={position}
        />
        {
          dataMap ? <MyComponent geoJsonData={geoJson} useRoads={useRoads} filterGeoJson={filterGeoJson}/> : null
        }        
      </div>
    </APIProvider>
  );
};
export default MapsComponent;
