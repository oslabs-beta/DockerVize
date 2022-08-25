import React from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { useSelector } from 'react-redux';
import { AllStates } from '../types';
import {
  useGetMemoryDataQuery,
} from '../services/containerQuery';

export default function memoryTotalGraph() {

  //Global state of containers
  const state = useSelector((state: AllStates) => state);

  let containerNames: string[] = [];
  let currentMemoryMetric: number[] = [];

  //Invoke get container query to grab raw Memory metrics from backend
  let data = useGetMemoryDataQuery(undefined, { pollingInterval: 1000 });

  //Populate dataset data (currentMemoryMetric) for ChartJS 
  if (data && data.data) {
    for (let i = 0; i < data.data.length; i++) {
      //Status Toggle is where Global State is stored after using useSelector
      const currentState: any = state.statusToggle;

      let id = data.data[i].metric.id.slice(8, 20);

      if (currentState[id].dataState) {
        let name = currentState[id].name;
        containerNames.push(name);

        let arrLength = data.data[i].values.length;
        let dataValues: any = data.data[i].values;
        currentMemoryMetric.push(
          Number(dataValues[arrLength - 1][1]) / 1000000
        );
      }
    }
  }

  //Grab metrics for Total Memory data (first element in raw data from Query)
  let totalMemory: number = 0;
  if (currentMemoryMetric[0] !== undefined) {
    totalMemory = Number(
      currentMemoryMetric.reduce((acc, curr) => (acc += curr)).toFixed(2)
    );
  }

  return (
    <div style={{ width: '400px' }}>
      <Doughnut
        data={{
          labels: containerNames,
          datasets: [
            {
              data: currentMemoryMetric,
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
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Total Memory Usage: ${totalMemory} mb`,
              font: {
                size: 13,
              },
            },
          },
          radius: 125,
        }}
      />
    </div>
  );
}
