"use client";

import { ChartNoAxesColumnIncreasing, Settings } from "lucide-react";
import { useState } from "react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

function Dashboard() {
    const data = [
        { name: 'Jan', responses: 40 },
        { name: 'Feb', responses: 35 },
        { name: 'Mar', responses: 50 },
        { name: 'Apr', responses: 45 },
        { name: 'May', responses: 30 },
        { name: 'Jun', responses: 25 },
        { name: 'Jul', responses: 60 },
        { name: 'Aug', responses: 55 },
        { name: 'Sep', responses: 10 },
        { name: 'Oct', responses: 0 },
        { name: 'Nov', responses: 0 },
        { name: 'Dec', responses: 0 },
    ];
    const data2 = [
        { name: "Documents", value: 20 },
        { name: "Videos", value: 10 },
        { name: "Photos", value: 15 },
        { name: "Music", value: 10 },
        { name: "", value: 60 },
    ];
    const COLORS = ['#03045E', '#00B4D8', '#0077B6', '#90E0EF', '#F5F5F5'];

    const currentMonth = new Date().getMonth();
    const [activeIndex, setIndex] = useState(currentMonth);
    const activeItem = data[activeIndex];

    const handleClick = (data: any, index: number) => {
        setIndex(index);
    }

    return (
        <div className="w-10/12 m-auto p-8 pt-12">
            <section className="flex w-full gap-8">
                <div className="w-96 h-96 flex flex-col justify-between border border-black/35 p-8 rounded-3xl">
                    <p className="text-xl font-semibold text-insightfy-gray">Respostas</p>

                    <div className="flex items-center gap-4">
                        <PieChart width={250} height={200}>
                            <Pie
                                data={data2}
                                innerRadius={60}
                                outerRadius={90}
                                fill="#8884d8"
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {data2.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                        </PieChart>

                        <div className="flex flex-col justify-between">
                            {data2.map((entry, index) => entry.name && (
                                <div key={index} className="flex items-center gap-2 mb-2">
                                <span 
                                    className="w-4 h-4 rounded" 
                                    style={{ backgroundColor: COLORS[index] }}
                                ></span>
                                <p className="text-sm text-insightfy-gray">{entry.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="flex justify-between items-center">

                        <div className="flex flex-col gap-3">
                            <p className="text-insightfy-gray">Used storage</p>

                            <div className="flex items-center gap-2">
                                <div className="relative flex items-center">
                                    {COLORS.map((color, index) => (
                                    <span 
                                        key={index} 
                                        style={{ backgroundColor: color, zIndex: COLORS.length - index }}
                                        className={`w-6 h-6 rounded-full ${index > 0 ? '-ml-3' : ''}`}
                                    ></span>
                                    ))}
                                </div>
                                <p className="text-xl font-bold text-gray-600">137GB</p>
                            </div>

                        </div>

                        <span className="w-14 h-14 flex justify-center items-center bg-insightfy-light-gray rounded-full cursor-pointer hover:bg-insightfy-gray/40 duration-200">
                            <Settings size={25} className="text-insightfy-gray" />
                        </span>

                    </div>

                </div>

                <div className="w-3/4 h-96 flex flex-col justify-between border border-black/35 p-8 rounded-3xl">

                    <div className="flex justify-between items-center">
                        <p className="text-xl">Periodo de mais respostas</p>

                        <span className="w-10 h-10 bg-insightfy-light-gray flex justify-center items-center rounded-lg">
                            <ChartNoAxesColumnIncreasing className="text-insightfy-dark-blue" size={22.5} />
                        </span>
                    </div>

                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart width={150} height={40} data={data}>
                            <Bar dataKey="responses" onClick={handleClick}>
                                {data.map((entry, index) => (
                                    <Cell 
                                        cursor="pointer" 
                                        fill={index === activeIndex ? '#82ca9d' : '#8884d8'} 
                                        key={`cell-${index}`} 
                                    />
                                ))}
                            </Bar>
                            <XAxis dataKey="name" tickMargin={10} />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="content">{`Respostas de "${activeItem.name}": ${activeItem.responses}`}</p>

                </div>
            </section>
        </div>
    );
}

export default Dashboard;