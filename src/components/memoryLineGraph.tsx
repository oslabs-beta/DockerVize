import React from 'react';
import Chart from 'chart.js/auto';

export default function memoryLineGraph() {
  const data2 = {
    React: 185134,
    Vue: 195514,
    Angular: 80460,
    Svelte: 57022,
    Ember: 22165,
    Backbone: 27862,
  };

  //   const canvas = <HTMLCanvasElement> document.getElementById('myChart');
  // const ctx = canvas.getContext('2d');

  const canvas = document.getElementById('myChart') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const myChart: Chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(data2),
        datasets: [
          {
            label: 'Number of GitHub Stars',
            data: Object.values(data2),
          },
        ],
      },
    });
  }
  return <div className='memory-line'>{myChart ? myChart : 'Hello'}</div>;
}

// canvas.width = 1024;
// canvas.height = 576;

// c.fillRect(0, 0, canvas.width, canvas.height);
