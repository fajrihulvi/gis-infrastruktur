import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

const API_KEY = "AIzaSyALOdn_pNdH0rafCH2XESCX6JRj6rz2YPA";
import PkgKelurahan from '../../assets/pkg_kelurahan_dummy.json';
import { Box } from "@chakra-ui/react";

const MyComponent = () => {
  const map = useMap('one-of-my-maps');

  useEffect(() => {
    if (!map) return;
    map.data.addGeoJson(PkgKelurahan)
    map.data.setStyle({
      fillColor: 'green',
      opacity:0.2,
      strokeWeight: 1
    })
  }, [map]);
  // Do something with the Google Maps map instance

  return <Box>
    asdajsd
  </Box>;
};

const MapsComponent = () => {
  const position = {lat: -2.13212, lng: 106.11366};

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
        <MyComponent />
      </div>
    </APIProvider>
  );
};
export default MapsComponent;
