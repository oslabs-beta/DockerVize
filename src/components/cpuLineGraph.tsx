import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { useSelector } from 'react-redux';
import { AllStates } from '../reducers/containerStatusSlice';

interface ChartObject {
  label: string;
  data: String[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

export default function cpuLineGraph() {
  const state = useSelector((state: AllStates) => state);

  let timeXAxis = [];

  const values = Object.values(state.statusToggle);

  for (let i = 0; i < values.length; i++) {
    if (values[i].cpuState[0] === undefined) continue;
    else {
      for (let j = 0; j < values[i].cpuState.length; j++) {
        let convertedTime = new Date(
          values[i].cpuState[j][0] * 1000
        ).toLocaleTimeString();
        timeXAxis.push(convertedTime);
      }
      break;
    }
  }

  let bytesYAxis: ChartObject[] = [];

  const buildYAxis = (name: string, data: String[]) => {
    let resultObj = {
      label: name,
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      yAxisID: 'yAxis',
    };
    return resultObj;
  };

  for (let i = 0; i < values.length; i++) {
    if (values[i].cpuState[0] === undefined) continue;
    else {
      let subData = [];
      for (let j = 0; j < values[i].cpuState.length; j++) {
        subData.push(String(values[i].cpuState[j][1]));
      }

      let obj: ChartObject = buildYAxis(values[i].name, subData);
      bytesYAxis.push(obj);
    }
  }

  return (
    <div>
      <Line
        data={{
          labels: timeXAxis,
          datasets: bytesYAxis,
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxis: {
              title: {
                display: true,
                text: 'CPU Percentage',
              },
            },
          },
        }}
      />
    </div>
  );
}
