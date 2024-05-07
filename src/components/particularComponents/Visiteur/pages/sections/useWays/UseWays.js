// ConditionsUtilisation.js

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

function ConditionsUtilisation() {
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
                <h1 style={styles.h1}>Conditions d'Utilisation</h1>
            </header>

            <main style={styles.main}>
                <section style={styles.section}>
                    <h2 style={styles.h2}>1. Acceptation des Conditions</h2>
                    <p style={styles.p}>En utilisant cette application, vous acceptez les conditions énoncées ci-dessous. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser cette application.</p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.h2}>2. Utilisation du Service</h2>
                    <p style={styles.p}>Vous acceptez de n'utiliser le service que conformément à ces conditions. Vous êtes responsable de l'exactitude et de la légalité des informations fournies lors de l'utilisation de notre application.</p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.h2}>3. Informations Personnelles</h2>
                    <p style={styles.p}>Nous pouvons collecter des informations personnelles conformément à notre politique de confidentialité. Ces informations peuvent inclure des données telles que votre nom, adresse email, etc.</p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.h2}>4. Responsabilité</h2>
                    <p style={styles.p}>Nous nous efforçons de fournir un service de qualité. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité ou la pertinence des informations fournies par l'application.</p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.h2}>5. Modifications des Conditions</h2>
                    <p style={styles.p}>Nous nous réservons le droit de mettre à jour ou de modifier ces conditions à tout moment sans préavis. Il est de votre responsabilité de vérifier périodiquement les changements. L'utilisation continue de l'application après de telles modifications constitue votre acceptation desdites modifications.</p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.h2}>6. Résiliation</h2>
                    <p style={styles.p}>Nous nous réservons le droit de résilier votre accès à l'application pour non-respect de ces conditions sans préavis.</p>
                </section>
                
                {/* Ajoutez d'autres sections si nécessaire */}

            </main>

            <footer style={styles.footer}>
                <p>&copy; 2023 Votre Application - Tous droits réservés</p>
            </footer>
        </div>
    );
}

export default ConditionsUtilisation;