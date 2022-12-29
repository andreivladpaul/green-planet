import React from 'react';
import styles from './MetricComponents.module.scss';
import Chart from '../../components/chart';


function Methan(props) {

    const loader = props.loaderData;

    let result = loader.data.methane.slice(-1);
    let lastvalue = result[0].average;

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.title}>Methan</h2>
                <p className={styles.subtitle}>Methane levels from 1983 to present</p>

                <div className={styles.info}>
                    <p>Last Value: {lastvalue}</p>
                </div>

                <Chart
                    chartData={loader.data.methane}
                />
            </div>
        </div>
    )
}

export default Methan;