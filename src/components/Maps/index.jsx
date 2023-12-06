import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const API_KEY = "AIzaSyALOdn_pNdH0rafCH2XESCX6JRj6rz2YPA";

const MapsComponent = () => {
  const position = {lat: -2.13212, lng: 106.11366};

  return (
    <APIProvider apiKey={API_KEY}>
      <div style={{ height: "100vh" }}>
        <Map
          style={{ position: "absolute" }}
          zoom={15}
          center={position}
        >
          <Marker position={position}/>
        </Map>
      </div>
    </APIProvider>
  );
};
export default MapsComponent;
