import React, { useEffect, useState } from 'react';
 

const Kontakt = () => {
    const googleMapsApiKey = 'AIzaSyDvRJgwsfu6xlBWmBIJHtxX-jWdFcethCo';  
    const address = 'Jove Ilica 154 Beograd Vozdovac';
    const [coordinates, setCoordinates] = useState({ lat: 44.77842, lng: 20.45119 });
  
    useEffect(() => {
      const fetchCoordinates = async () => {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=${googleMapsApiKey}`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setCoordinates(data.results[0].geometry.location);
        }
      };
      fetchCoordinates();
    }, [address, googleMapsApiKey]);
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.defer = true;
      script.async = true;
  
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 15,
        });
  
        const marker = new window.google.maps.Marker({
          position: coordinates,
          map: map,
          title: 'Naša lokacija',
        });
      };
  
      document.head.appendChild(script);
  
      return () => {
        document.head.removeChild(script);
        delete window.initMap;
      };
    }, [coordinates, googleMapsApiKey]);

  return (
    <div className="contact-page-container">
      <h2>Kontakt informacije</h2>
      <p>Jove Ilica 154, 11010 Beograd, Srbija</p>
      <p>Telefon: +381 11 3950 800</p>
      <p>Email: info@skn.rs</p>

      <div id="map" className="map-container"></div>
    </div>
  );
};

export default Kontakt;
