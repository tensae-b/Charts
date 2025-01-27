export const articleReadTimeChartOptions = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      detail: {
        formatter: "{value}",
      },
      data: [
        {
          value: 50,
          name: "SCORE",
        },
      ],
    },
  ],
};

export const ArticleTotalReadTimeChartOption = {
  series: [
    {
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: "#464646",
        },
      },
      axisLine: {
        lineStyle: {
          width: 40,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      title: {
        fontSize: 14,
      },
      detail: {
        width: 50,
        height: 14,
        fontSize: 14,
        color: "inherit",
        borderColor: "inherit",
        borderRadius: 20,
        borderWidth: 1,
        formatter: "{value}%",
      },
    },
  ],
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

export const completionRateForArticleOption = {
  legend: {},
  tooltip: {},
  dataset: {},
  series: [],
};

export const interactionTypeCountWithNameOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [],
};

export const articleInteractionScoreByAudienceTypeOption = {
  backgroundColor: {
    image: [],
    repeat: "repeat",
  },
  title: {
    text: "饼图纹理",
    textStyle: {
      color: "#235894",
    },
  },
  tooltip: {},
  series: [
    {
      name: "pie",
      type: "pie",
      selectedMode: "single",
      selectedOffset: 30,
      clockwise: true,
      label: {
        fontSize: 18,
        color: "#235894",
      },
      labelLine: {
        lineStyle: {
          color: "#235894",
        },
      },
      data: [],
      itemStyle: {
        opacity: 0.7,
        color: {
          image: [],
          repeat: "repeat",
        },
        borderWidth: 3,
        borderColor: "#235894",
      },
    },
  ],
};

// export const audienceLevelPeoplesChoicePercentagesOption = {
//   tooltip: {},
//   legend: {
//     data: ['Audience Level Peoples Choice Percentages'],
//     selectedMode: 'single'
//   },
//   xAxis: {
//     data: ['Average Audience', 'Intermediate Audience', 'Advanced Audience', 'Expert Audience'],
//     axisTick: { show: true },
//     axisLine: { show: true },
//     axisLabel: { show: true }
//   },
//   yAxis: {
//     max: bodyMax,
//     offset: 20,
//     splitLine: { show: false }
//   },
//   grid: {
//     top: 'center',
//     height: 230
//   },
//   markLine: {
//     z: -100
//   },
//   series: [
//     {
//       name: 'typeA',
//       type: 'pictorialBar',
//       symbolClip: true,
//       symbolBoundingData: bodyMax,
//       label: labelSetting,
//       data: [],
//       markLine: markLineSetting,
//       z: 10
//     },
//     {
//       name: 'typeB',
//       type: 'pictorialBar',
//       symbolClip: true,
//       symbolBoundingData: bodyMax,
//       label: labelSetting,
//       data: [],
//       markLine: markLineSetting,
//       z: 10
//     },
//     {
//       name: 'full',
//       type: 'pictorialBar',
//       symbolBoundingData: bodyMax,
//       animationDuration: 0,
//       itemStyle: {
//         color: '#ccc'
//       },
//       data: []
//     }
//   ]
// }