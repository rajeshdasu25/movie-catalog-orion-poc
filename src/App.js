import React, { Fragment, useState, useEffect } from 'react';
import {Alert, Container, Row } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import AppHeader from './components/AppHeader/AppHeader';
import MovieItem from './components/MovieItem/MovieItem';
import SearchInfo from './components/SearchInfo/SearchInfo';
import AppPagination from './components/AppPagination/AppPagination';

import { API_BASE_URL } from './config/config.json';
import './App.css';

function App() {
  const defPageNumber = 1;
  const [pageNumber, setPageNumber] = useState(defPageNumber);
  let [movies, setMovies] = useState([]);
  let [totalRecords, setTotalRecords] = useState();
  let [query, setQuery] = useState('Batman');
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}&s=${query}&page=${pageNumber}`)
      .then((response) => {
          setShowLoader(true);
          setMovies(response.data.Search);
          setTotalRecords(response.data.totalResults);
      })
      .catch(() => {
          setMovies([]);
          setTotalRecords(0);
      });
  }, [query, pageNumber]);

  const updatePageLimit = (spageNumber) => {
      setPageNumber(spageNumber);
  };

  const resetPageNumber = () => {
    setPageNumber(defPageNumber);
  };

  return (
    <Fragment>
      <AppHeader query={query} setQuery={setQuery} />
      <Container>
        <Row>
          <SearchInfo query={query} totalRecords={totalRecords} />
        </Row>
        <Row>
          {!showLoader && (
              <div className="loader-container">
                  <Loader 
                    type="Watch"
                    color="#00BFFF"
                    height="100" 
                    width="100"
                  />
              </div>
            )
          }
          {showLoader && movies && movies.length > 0 && (
            <MovieItem movies={movies} />
          )}
          {!movies && (
            <div className="alert-container">
            <Alert variant='danger'>
              No Movie Found for your search..!!!
            </Alert>
            </div>
          )}
        </Row>        
        <Row>
          {movies && movies.length > 0 && (
            <AppPagination 
              totalRecords={totalRecords} 
              pageNumber={ pageNumber }
              resetPageNumber={ resetPageNumber }
              updatePageLimit={ updatePageLimit }
            />
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
