import { useEffect, useState } from "react";
import { Button, Card, RadioPLayer } from "./components";

const BASE_URL = 'https://de1.api.radio-browser.info/json/stations/lastchange?hidebroken=true'
const LIMIT = 24
//const LAST_STATIONS = BASE_URL + 'lastchange/25'; //get the last 25 new stations
//const STATIONS_BY_VOTES = BASE_URL + 'topvote/5';
//const STATIONS_BY_CLICKS = BASE_URL + 'topclick/5';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [stations, setStations] = useState(null);
  const [currentStation, setCurrentStation] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const link = BASE_URL + '&offset=' + offset + '&limit=' + LIMIT;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        setStations(data);
        setIsLoading(false);
      })
  }, [isLoading, offset]);

  const onSelectRadio = (radio) => {
    setCurrentStation(radio);
  };

  const onClickPagination = (e) => {
    const { textContent } = e.target;
    if (textContent === 'Prev') {
      setOffset(offset - LIMIT);
    } else if (textContent === 'Next') {
      setOffset(offset + LIMIT);
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="text-3xl font-bold text-center p-10">
          Radio React App
        </h1>
      </header>
      <RadioPLayer currentRadio={currentStation}/>
      <main>
        {
          isLoading
            ? <div>Loading...</div>
            : <div className="flex flex-col justify-center p-10 gap-3 md:flex-row md:flex-wrap">
              {
                stations.map((item, i) => {
                  return (
                    <Card key={i} item={item} selectRadio={onSelectRadio} />
                  )
                }
                )
              } 
              </div>
        }
        <div className="mt-4 flex justify-center mb-10">
          <Button disabled={ offset <= 0 } text="Prev" onClick={onClickPagination}/>
          <Button text="Next"  onClick={onClickPagination}/>
        </div>
      </main>
    </div>
  );
}

export default App;
