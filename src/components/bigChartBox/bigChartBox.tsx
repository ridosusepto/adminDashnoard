import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, } from "recharts";
import "./bigChartBox.scss"

const data = [
    {
        name: 'Sun',
        electronic: 4000,
        books: 2400,
        clothes: 2400,
    },
    {
        name: 'Mon',
        electronic: 3000,
        books: 1398,
        clothes: 2210,
    },
    {
        name: 'Tue',
        electronic: 2000,
        books: 9800,
        clothes: 2290,
    },
    {
        name: 'Wed',
        electronic: 2780,
        books: 3908,
        clothes: 2000,
    },
    {
        name: 'Thu',
        electronic: 1890,
        books: 4800,
        clothes: 2181,
    },
    {
        name: 'fri',
        electronic: 2390,
        books: 3800,
        clothes: 2500,
    },
    {
        name: 'Sat',
        electronic: 3490,
        books: 4300,
        clothes: 2100,
    },
];
const BigChartBox = () => {
    return (
        <div className="bigChartBox">
            <h1>Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart

                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="books" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="clothes" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox;