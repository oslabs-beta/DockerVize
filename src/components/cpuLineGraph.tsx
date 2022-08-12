import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
import { useSelector } from 'react-redux';
import { AllStates } from '../types';
import { useGetCPUDataQuery } from '../services/containerQuery';

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
  let bytesYAxis: ChartObject[] = [];

  // let data = useGetMemoryDataQuery(undefined, { pollingInterval: 1000 });
  let data = useGetCPUDataQuery(undefined, { pollingInterval: 1000 });

  // console.log('Data2: ', data2.data?.slice(1));

  if (data && data.data) {
    data.data = data.data.slice(1);
    console.log('Data1: ', data.data[0]['values']);
    const timeValues: any = data.data[0]['values'];
    for (const index in timeValues) {
      let convertedTime = new Date(
        timeValues[index][0] * 1000
      ).toLocaleTimeString();
      timeXAxis.push(convertedTime);
    }

    const buildYAxis = (name: string, data: Number[]) => {
      let resultObj = {
        label: name,
        data: data,
        pointBackgroundColor: ['black'],
        pointBorderColor: ['black'],
        pointRadius: 2,
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
      const currentState: any = state.statusToggle;
      //Delete metric when ready
      let id = data.data[i].id.slice(8, 20);

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
        height={300}
        width={500}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Toggled CPU',
            },
          },
          maintainAspectRatio: false,
          scales: {
            yAxis: {
              title: {
                display: true,
                text: 'CPU %',
              },
            },
          },
        }}
      />
    </div>
  );
}
// import React from 'react';
// import Chart from 'chart.js/auto';
// import { Line } from 'react-chartjs-2';
// import { CategoryScale } from 'chart.js';
// Chart.register(CategoryScale);
// import { useSelector } from 'react-redux';
// import { AllStates } from '../types';

// interface ChartObject {
//   label: string;
//   data: String[];
//   backgroundColor: string[];
//   borderColor: string[];
//   borderWidth: number;
// }

// export default function cpuLineGraph() {
//   const state = useSelector((state: AllStates) => state);

//   let timeXAxis = [];

//   const values = Object.values(state.statusToggle);

//   for (let i = 0; i < values.length; i++) {
//     if (values[i].cpuState[0] === undefined) continue;
//     else {
//       for (let j = 0; j < values[i].cpuState.length; j++) {
//         let convertedTime = new Date(
//           values[i].cpuState[j][0] * 1000
//         ).toLocaleTimeString();
//         timeXAxis.push(convertedTime);
//       }
//       break;
//     }
//   }

//   let bytesYAxis: ChartObject[] = [];

//   const buildYAxis = (name: string, data: String[]) => {
//     let resultObj = {
//       label: name,
//       data: data,
//       pointBackgroundColor: ['black'],
//       pointBorderColor: ['black'],
//       pointRadius: 2,
//       fill: false,
//       backgroundColor: [
//         //Background color for boxes above chart - ex: /cadvisor
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         //Line colors
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//       yAxisID: 'yAxis',
//     };
//     return resultObj;
//   };

//   for (let i = 0; i < values.length; i++) {
//     if (values[i].cpuState[0] === undefined) continue;
//     else {
//       let subData = [];
//       for (let j = 0; j < values[i].cpuState.length; j++) {
//         subData.push(String(values[i].cpuState[j][1]));
//       }

//       let obj: ChartObject = buildYAxis(values[i].name, subData);
//       bytesYAxis.push(obj);
//     }
//   }

//   return (
//     <div>
//       <Line
//         data={{
//           labels: timeXAxis,
//           datasets: bytesYAxis,
//         }}
//         height={300}
//         width={500}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: 'Toggled CPU',
//             },
//           },
//           maintainAspectRatio: false,
//           scales: {
//             yAxis: {
//               title: {
//                 display: true,
//                 text: 'CPU %',
//               },
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }
