/* eslint-disable react/prop-types */
import { APIProvider, Map, useMap, InfoWindow } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const API_KEY = "AIzaSyALOdn_pNdH0rafCH2XESCX6JRj6rz2YPA";
import { Box, Text } from "@chakra-ui/react";
import PangkalPinangRoads from "../../assets/pkg_transportasi_dummy.json"

const MyComponent = ({geoJsonData, useRoads, filterGeoJson, setInfoWindowData}) => {
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
      setInfoWindowData(
        {
          lat : event.latLng.lat(),
          lng : event.latLng.lng(),
          status : event.feature.h.FUNGSI_REV ? 'ROAD': 'REGION',
          data : event.feature.h
        }
      )
      return 
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
  const [infoWindowData, setInfoWindowData] = useState(null);
  const [mapViewPosition, setMapViewPosition] = useState({lat: -2.13212, lng: 106.11366});

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
          center={mapViewPosition}
        >
        {
          dataMap ? <MyComponent geoJsonData={geoJson} useRoads={useRoads} filterGeoJson={filterGeoJson} setInfoWindowData={setInfoWindowData}/> : null
        }        
        {infoWindowData ? <InfoWindow position={{lat: infoWindowData.lat, lng: infoWindowData.lng}}>
          {
            infoWindowData.status === 'REGION' ? (
              <>
                <img width={100} src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <br></br>
                <Text fontSize='lg'>{infoWindowData.data.WADMKL}</Text>
                <br></br>
                <p>Kelurahan : {infoWindowData.data.WADMKL}</p>
                <p>Kecamatan : {infoWindowData.data.WADMKC}</p>
                <p>Kota : {infoWindowData.data.WADMKK}</p>
                <p>Provinsi : {infoWindowData.data.WADMPR}</p>
                <br></br>
                <p>Area : {infoWindowData.data.AREA}</p>
                <p>Hectar : {infoWindowData.data.HECTARES}</p>
                <p>Jumlah Penduduk : {infoWindowData.data.Jlh_Pddk}</p>
                <p>Luas Wilayah : {infoWindowData.data.Luas_Will}</p>
                <br></br>
                <p>Coordinate Location</p>
                <p>latitude : {infoWindowData.lat}</p>
                <p>longitude : {infoWindowData.lng}</p>
              </>
            ) : (
              <>
                <p>Nama : {infoWindowData.data.NAMA}</p>
                <p>Nama Jalan : {infoWindowData.data.NAMA_JLN}</p>
                <br></br>
                <p>Fungsi Rev : {infoWindowData.data.FUNGSI_REV}</p>
                <p>Status Rev : {infoWindowData.data.STATUS_REV}</p>
                <p>Sumber : {infoWindowData.data.SUMBER}</p>
                <br></br>
                <p>Coordinate Location</p>
                <p>latitude : {infoWindowData.lat}</p>
                <p>longitude : {infoWindowData.lng}</p>
              </>
            )
          }
        </InfoWindow> : null}
        </Map>
      </div>
    </APIProvider>
  );
};
export default MapsComponent;
