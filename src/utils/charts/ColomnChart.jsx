import React from 'react'
import Chart from "react-google-charts";

const ColoumChart = () => {

    const responseArr = [
        ["Name", "Percentage", { role: "annotation" }, { role: "link" }],
        ["Google", 55, "55%", "https://www.google.com"],
        ["Facebook", 40, "40%", "https://www.facebook.com"],
        ["Amazon", 25, "25%", "https://www.amazon.com"],
        ["Microsoft", 30, "30%", "https://www.microsoft.com"]
    ];

    return (
        <>
            <Chart
                width={"600px"}
                height={"300px"}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={responseArr}
                options={{
                    chart: {
                        title: "Company Percentage",
                        subtitle: "Google, Facebook, Amazon, and Microsoft",
                    },
                    legend: { position: "none" },
                    vAxis: {
                        title: "Percentage",
                    },
                    hAxis: {
                        title: "Company",
                    },
                }}
                chartEvents={[{
                    eventName: "select", callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart(); const selection = chart.getSelection(); if (selection.length === 1) {
                            const [selectedItem] = selection;
                            const { row } = selectedItem;
                            console.log(responseArr[row + 1][3]);
                            window.open(responseArr[row + 1][3], "_blank");
                        }
                    },
                },
                ]}
            />
        </>
    )
}

export default ColoumChart