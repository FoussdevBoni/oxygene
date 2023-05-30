import React, { useState, useEffect } from 'react';

const LoadController = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler une tâche asynchrone
    const simulateAsyncTask = () => {
      setTimeout(() => {
        setIsLoading(false); // Fin de chargement
      }, 2000); // Temps en millisecondes
    };

    simulateAsyncTask();
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isLoading) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isLoading]);

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow">
        {isLoading ? (
          <div className="flex justify-center items-center h-16 w-16 border-t-4 border-b-4 border-gray-900 animate-spin"></div>
        ) : (
          <div>Contenu chargé</div>
        )}
      </div>
    </div>
  );
};

export default LoadController;
