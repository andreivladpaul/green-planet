import React from 'react';
import NavBar from "../../components/navbar"
import styles from './MetricPage.module.scss';
import { Route, useLoaderData, Routes } from 'react-router-dom';
import Temperature from '../MetricComponents/Temperature';
import Co2 from '../MetricComponents/Co2'
import Methan from '../MetricComponents/Methan';
import No2 from '../MetricComponents/No2';
import PolarIce from '../MetricComponents/PolarIce';


function MetricPage() {

  const loaderData = useLoaderData();

  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.container}>

        {/* Invece di creare un gafico unico ho conservato i grafici come componenti perchè sono tutti diversi l'uno dall'altro */}

        <Routes>
          <Route exact path={'/temperature'} element={<Temperature loaderData={loaderData} />} />
          <Route exact path={'/co2'} element={<Co2 loaderData={loaderData} />} />
          <Route exact path={'/methane'} element={<Methan loaderData={loaderData} />} />
          <Route exact path={'/nitrous-oxide'} element={<No2 loaderData={loaderData} />} />
          <Route exact path={'/arctic'} element={<PolarIce loaderData={loaderData} />} />
        </Routes>

      </div>
    </React.Fragment>
  )
}

export default MetricPage;
