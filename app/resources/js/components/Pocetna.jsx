import React from 'react';
 
const Pocetna = () => {
  return (
    <div className="container">
         <header className="jumbotron">

        <img src="https://wallpapercave.com/wp/wp6836080.jpg" alt="Naslovna slika prodavnice" className="banner-image" />
        <div className="overlay-text">
          <h1>SkinCare store</h1>
          <p>
          Dobrodošli u našu čarobnu oazu lepote i nege kože!
          </p>
        </div>
      </header>

      <div className="content">
        <section>
          <h2>O nama...</h2>
          <p>
          Mi smo strastveni zaljubljenici u sve što čini kožu srećnom i sjajnom. Naša misija je jednostavna - pružiti vam proizvode koji će oživeti vašu kožu i uneti osmeh na vaše lice.
          </p>
        </section>

        <section>
          <h2>Zašto odabrati nas?</h2>
          <p>
          Naš tim stručnjaka i ljubitelja lepote tu je da vam pruži podršku i savete u vašem putovanju ka zdravijoj i blistavijoj koži. Bez obzira na vaš tip kože, uz nas ćete pronaći proizvode koji odgovaraju vašim potrebama i željama.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Pocetna;
