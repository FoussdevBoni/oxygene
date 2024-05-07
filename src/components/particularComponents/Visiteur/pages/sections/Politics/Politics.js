import React, { useContext, useEffect } from 'react';
import MyContext from '../../../../../../Contextes/MyContext';

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  },
  h1: {
    margin: 0,
    fontSize: '24px',
    color: '#333',
  },
  main: {
    padding: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  h2: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '10px',
  },
  p: {
    lineHeight: '1.6',
    color: '#666',
  },
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};


function Politics(props) {
    const {myVariable, setMyVariable} = useContext(MyContext)
    useEffect(()=>{
          setMyVariable((prevState) => ({
      ...prevState,
      hidden: true,
    }));

     return ()=>{
             setMyVariable((prevState) => ({
      ...prevState,
      hidden: false,
    }));
    }
    },[])

    return (
        <div style={styles.body}>
              <header style={styles.header}>
        <h1 style={styles.h1}>Politique de Confidentialité - Oxygenebenin</h1>
    </header>
  
    <main style={styles.main}>
        <section>
            <h2 style={styles.h2}>Collecte des informations</h2>
            <p>Nous collectons des informations personnelles telles que votre nom, adresse et numéro de téléphone
                pour...</p>
        </section>

        <section>
            <h2  style={styles.h2}>Utilisation des informations</h2>
            <p>Les informations collectées sont utilisées pour...</p>
        </section>

        <section>
            <h2  style={styles.h2}>Divulgation à des tiers</h2>
            <p>Nous ne divulguons pas vos informations personnelles à des tiers sans votre consentement explicite...</p>
        </section>

        <section>
            <h2  style={styles.h2}>Conservation des données</h2>
            <p>Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir les services
                demandés...</p>
        </section>

        <section>
            <h2  style={styles.h2}>Protection des données</h2>
            <p>Nous prenons des mesures de sécurité pour protéger vos informations personnelles contre...</p>
        </section>

        <section>
            <h2  style={styles.h2}>Modifications de la politique de confidentialité</h2>
            <p>Toute modification de notre politique de confidentialité sera affichée sur cette page...</p>
        </section>
    </main>  
        </div>
    );
}

export default Politics;