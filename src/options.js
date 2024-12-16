export const articleReadTimeChartOptions = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: 'Pressure',
            type: 'gauge',
            detail: {
                formatter: '{value}'
            },
            data: [
                {
                    value: 50,
                    name: 'SCORE'
                }
            ]
        }
    ]
};

export const ArticleTotalReadTimeChartOption = {
    series: [
        {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
                show: false
            },
            progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: '#464646'
                }
            },
            axisLine: {
                lineStyle: {
                    width: 40
                }
            },
            splitLine: {
                show: false,
                distance: 0,
                length: 10
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                distance: 50
            },
            title: {
                fontSize: 14
            },
            detail: {
                width: 50,
                height: 14,
                fontSize: 14,
                color: 'inherit',
                borderColor: 'inherit',
                borderRadius: 20,
                borderWidth: 1,
                formatter: '{value}%'
            }
        }
    ]
};
export const totalReadedTimeChartOption = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
        {
            name: "Pressure",
            type: "gauge",
            progress: {
                show: true,
            },
            detail: {
                valueAnimation: true,
                formatter: "{value}",
            },
            data: [
                {
                    value: 10,
                    name: "SCORE",
                },
            ],
        },
    ],
};