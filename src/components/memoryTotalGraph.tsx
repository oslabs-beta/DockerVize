import React from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { useSelector } from 'react-redux';
import { AllStates } from '../types';
import {
  useGetMemoryDataQuery,
  // useGetCPUDataQuery,
} from '../services/containerQuery';

export default function memoryTotalGraph() {
  const state = useSelector((state: AllStates) => state);

  let containerNames: string[] = [];
  let currentMemoryMetric: number[] = [];

  // let data = useGetCPUDataQuery(undefined, { pollingInterval: 1000 });
  let data = useGetMemoryDataQuery(undefined, { pollingInterval: 1000 });
  // console.log('data1: ', data.data);
  // console.log('data2: ', data2.data);

  if (data && data.data) {
    for (let i = 0; i < data.data.length; i++) {
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

  let totalMemory: number = 0;
  if (currentMemoryMetric[0] !== undefined) {
    totalMemory = Number(
      currentMemoryMetric.reduce((acc, curr) => (acc += curr)).toFixed(2)
    );
  }

  return (
    <div>
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
            // legend: {
            //   labels: {
            //     padding: 0, //default is 10
            //   },
            //   display: true,
            //   position: 'top',
            //   align: 'center',
            // },
            title: {
              display: true,
              text: `Total Memory Usage: ${totalMemory} mb`,
            },
          },
          radius: 125,
        }}
      />
    </div>
  );
}
