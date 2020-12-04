import React from 'react';
import ReactDOM from 'react-dom';
import {
  Card,
  CardContent,
  ComponentsProvider,
  Heading,
} from '@looker/components';
import {
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import Test from './Test';

function getPrime(size: number) {
  var x = 4;
  while (!isPrime(x)) {
    x = Math.round(Math.random() * size);
  }
  return x;
}
function isPrime(num: number) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

const Application = () => {
  const x = [...Array(100).keys()];
  const y = x.map((x) => ({
    x: x,
    y: x * x,
  }));
  const random = [...Array(100).keys()].map((x) => ({
    x: x,
    y: getPrime(100),
  }));
  return (
    <ComponentsProvider loadGoogleFonts>
      <Card raised>
        <CardContent>
          <Heading fontWeight="semiBold" textTransform="capitalize">
            Here's a bunch of graphs:
          </Heading>
        </CardContent>
      </Card>
      <LineChart width={400} height={400} data={y}>
        <Tooltip cursor={{ stroke: 'red', strokeWidth: 1 }} />
        <XAxis dataKey="x" name="X" />
        <YAxis dataKey="y" name="Y" />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
      </LineChart>
      <ScatterChart width={400} height={400}>
        <Tooltip cursor={{ stroke: 'red', strokeWidth: 1 }} />
        <XAxis dataKey="x" name="X" />
        <YAxis dataKey="y" name="Y" />
        <Scatter name="Random" data={random} fill="#8884d8" />
      </ScatterChart>
      <Test />
    </ComponentsProvider>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
