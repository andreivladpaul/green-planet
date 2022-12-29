import React from 'react';
import styles from './MetricComponents.module.scss';
import Chart from '../../components/chart';

function Co2(props) {

    let loader = props.loaderData;

    let result = loader.data.co2.slice(-1);
    let lastvalue = result[0].trend;

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.title}>Carbon Dioxide</h2>
                <p className={styles.subtitle}>Carbon Dioxide levels from 2012 to present</p>

                <div className={styles.info}>
                    <p>Last Value: {lastvalue}</p>
                </div>

                <Chart
                    chartData={loader.data.co2}
                />
            </div>
        </div>
    )
}

export default Co2;