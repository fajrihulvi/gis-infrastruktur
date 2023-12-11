import Maps from "../components/Maps";
import Sidebar from "../components/Sidebar";
import PangkalPinangCollection from "../assets/pkg_kelurahan_dummy.json";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedCollection , setSelectedCollection] = useState(null);
  const [listRegion , setlistRegion] = useState(null);
  const [filterRegion , setFilterRegion] = useState(null);
  const [filteredGeoJson , setFilteredGeoJson] = useState(null);
  
  function groupingRegionName(array) {
    return array.reduce((result, obj) => {
      const key = obj.properties.WADMKC;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(obj.properties.WADMKL);
      return result;
    }, {});
  }

  useEffect(() => {
    setSelectedCollection(PangkalPinangCollection);
    setlistRegion(groupingRegionName(PangkalPinangCollection.features))
  }, [])

  function filterGeoJsonByName(geoJson, targetName, type) {
    if (type == 'KECAMATAN') {
      return geoJson.features.filter(feature => feature.properties.WADMKC === targetName);
    } else if (type == 'KELURAHAN') {
      return geoJson.features.filter(feature => feature.properties.WADMKL === targetName);
    }
  }

  useEffect(() => {
    if (!filterRegion) return
    if (filterRegion.kelurahan) {
      setFilteredGeoJson(filterGeoJsonByName(selectedCollection, filterRegion.kelurahan, 'KELURAHAN'));
    } else if (filterRegion.kecamatan) {
      setFilteredGeoJson(filterGeoJsonByName(selectedCollection, filterRegion.kecamatan, 'KECAMATAN'));
    } else {
      setFilteredGeoJson(null)
    }
  },[filterRegion])

  return (
    <div>
      <Sidebar listRegion={listRegion} setFilterRegion={setFilterRegion}/>
      <Maps dataMap={selectedCollection} filteredGeoJson={filteredGeoJson}/>
    </div>
  );
};

export default Home;
