import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { useSelector } from 'react-redux';
import { AllStates } from '../types';
import { useGetMemoryDataQuery } from '../services/containerQuery';

interface ChartObject {
  label: string;
  data: String[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

export default function memoryLineGraph() {

  //Global state of containers
  const state = useSelector((state: AllStates) => state);

  let timeXAxis = [];
  let bytesYAxis: ChartObject[] = [];

  //Invoke get container query to grab raw Memory metrics from backend
  let data = useGetMemoryDataQuery(undefined, { pollingInterval: 1000 });

  //Populate dataset data (cpuYAxis and timeXAxis) for ChartJS 
  if (data && data.data) {
    //Build out timeXAxis
    const timeValues: any = data.data[0]['values'];
    for (const index in timeValues) {
      let convertedTime = new Date(
        timeValues[index][0] * 1000
      ).toLocaleTimeString('en-US', { hour12: false });
      timeXAxis.push(convertedTime);
    }

    //Build out cpuYAxis - each container is a line on the Chart
    const buildYAxis = (name: string, data: Number[]) => {
      let resultObj = {
        label: name,
        data: data,
        pointBackgroundColor: ['black'],
        pointBorderColor: ['black'],
        pointRadius: 0,
        fill: false,
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

    for (let i = 0; i < data.data.length; i++) {
      //Status Toggle is where Global State is stored after using useSelector
      const currentState: any = state.statusToggle;
      let id = data.data[i].metric.id.slice(8, 20);

      if (currentState[id].dataState) {
        let name = currentState[id].name;

        let memoryData: any = [];
        for (let j = 0; j < data.data[i].values.length; j++) {
          let dataValues: any = data.data[i].values[j];
          memoryData.push(Number(dataValues[1] / 1000000));
        }
        let obj: any = buildYAxis(name, memoryData);

        bytesYAxis.push(obj);
      }
    }
  }

  return (
    <div>
      <Line
        data={{
          labels: timeXAxis,
          datasets: bytesYAxis,
        }}
        height={350}
        width={450}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Container Memory Usage',
              font: {
                size: 13,
              },
            },
          },
          maintainAspectRatio: false,
          scales: {
            yAxis: {
              title: {
                display: true,
                text: 'megabytes',
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 8,
              },
            },
            xAxis: {
              title: {
                display: true,
                text: 'Time (24hr)',
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
              },
            },
          },
        }}
      />
    </div>
  );
}
