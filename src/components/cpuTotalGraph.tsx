import React from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { useSelector } from 'react-redux';
import { AllStates } from '../types';
import { useGetCPUDataQuery } from '../services/containerQuery';

export default function cpuTotalGraph() {
  const state = useSelector((state: AllStates) => state);

  let containerNames: string[] = [];
  let currentCpuMetric: number[] = [];

  let data = useGetCPUDataQuery(undefined, { pollingInterval: 1000 });
  // console.log('data: ', data.data);

  if (data && data.data) {
    for (let i = 0; i < data.data.length; i++) {
      const currentState: any = state.statusToggle;

      let id = data.data[i].id.slice(8, 20);

      if (currentState[id].dataState) {
        let name = currentState[id].name;
        containerNames.push(name);
        let arrLength = data.data[i].values.length;
        let dataValues: any = data.data[i].values;
        currentCpuMetric.push(Number(dataValues[arrLength - 1][1]));
      }
    }
  }
  let totalCpu: number = 0;
  if (currentCpuMetric[0] !== undefined) {
    totalCpu = Number(
      currentCpuMetric.reduce((acc, curr) => (acc += curr)).toFixed(2)
    );
  }

  return (
    <div style={{ width: '400px' }}>
      <Doughnut
        data={{
          labels: containerNames,
          datasets: [
            {
              data: currentCpuMetric,
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
          layout: {
            padding: 0,
          },
          plugins: {
            title: {
              display: true,
              text: `Total CPU Usage: ${totalCpu}%`,
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
