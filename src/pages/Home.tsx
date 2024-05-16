import React, { useEffect, useState } from 'react';
import { MunkaApi } from '../api/ApiMunka/index';

const Home: React.FC = () => {
  const [vacancies, setVacancies] = useState<any[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await MunkaApi.getAllVacancies();
        setVacancies(response);
      } catch (error) {
        console.error('Error fetching vacancies:', error);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      {vacancies.length > 0 ? (
        <ul>
          {vacancies.map((vacancy) => (
            <li key={vacancy.id}>
              <h3>{vacancy.title}</h3>
              <p>{vacancy.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no active vacancies.</p>
      )}
    </div>
  );
};

export default Home;
