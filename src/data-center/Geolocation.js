import React, { useEffect, useState } from 'react';

const GeoLocation = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const response = await fetch('https://freegeoip.app/json/');
        const data = await response.json();
        setLocationData(data);
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    fetchGeoLocation();
  }, []);

  return (
    <div>
      {locationData ? (
        <div>
          <p>IP Address: {locationData.ip}</p>
          <p>Country: {locationData.country_name}</p>
          <p>City: {locationData.city}</p>
          {/* Display other relevant location data */}
        </div>
      ) : (
        <p>Loading geolocation data...</p>
      )}
    </div>
  );
};

export default GeoLocation;
