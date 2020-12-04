import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const Test = () => {
  return (
    <div>
      <div style={{ height: 400 }}>
        <ResponsiveLine
          data={line_data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <div style={{ height: 400 }}></div>
    </div>
  );
};

const line_data = [
  {
    id: 'us',
    color: 'hsl(321, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 126,
      },
      {
        x: 'helicopter',
        y: 159,
      },
      {
        x: 'boat',
        y: 236,
      },
      {
        x: 'train',
        y: 142,
      },
      {
        x: 'subway',
        y: 288,
      },
      {
        x: 'bus',
        y: 233,
      },
      {
        x: 'car',
        y: 54,
      },
      {
        x: 'moto',
        y: 240,
      },
      {
        x: 'bicycle',
        y: 265,
      },
      {
        x: 'horse',
        y: 152,
      },
      {
        x: 'skateboard',
        y: 60,
      },
      {
        x: 'others',
        y: 104,
      },
    ],
  },
];

export default Test;
