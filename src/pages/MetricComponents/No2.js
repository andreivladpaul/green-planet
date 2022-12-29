import React from 'react'
import styles from './MetricComponents.module.scss';
import Chart from '../../components/chart';

function No2(props) {

    let loader = props.loaderData;

    let result = loader.data.nitrous.slice(-1);
    let lastvalue = result[0].average;

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.title}>Nitrous Oxide</h2>
                <p className={styles.subtitle}>Nitrous Oxide levels from 2000 to present</p>

                <div className={styles.info}>
                    <p>Last Value: {lastvalue}</p>
                </div>

                <Chart
                    chartData={loader.data.nitrous}
                />
            </div>
        </div>
    )
}

export default No2;