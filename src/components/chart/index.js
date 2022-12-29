import React from 'react';
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Await } from 'react-router-dom';


function Chart(props) {
    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            <Await resolve={props.chartData}>
                {() => (
                    <ResponsiveContainer width='100%' height={500}>
                        <AreaChart data={props.chartData} margin={{ bottom: 10, left: 10 }}>
                            <defs>
                                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#2451b7" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#2451b7" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area dataKey="average" stroke="#3774FF" fill="url(#color)" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false}>
                                <Label value="Year" offset={-10} position="insideBottom" fill="#4c7482" />
                            </XAxis>
                            <YAxis dataKey="trend" axisLine={false} tickLine={false} tickCount={10}>
                                <Label value="ppm" offset={0} position="insideLeft" fill="#4c7482" angle="270" />
                            </YAxis>

                            <CartesianGrid opacity={0.1} vertical={false} />
                            <Tooltip contentStyle={{ backgroundColor: "#4c7482" }} labelStyle={{ color: "#173E46", textAlign: 'left' }} />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </ Await>
        </React.Suspense>
    )
}

export default Chart;