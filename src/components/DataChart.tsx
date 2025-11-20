'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { time: '0ms', signal: 4000, baseline: 2400 },
  { time: '100ms', signal: 3000, baseline: 1398 },
  { time: '200ms', signal: 2000, baseline: 9800 },
  { time: '300ms', signal: 2780, baseline: 3908 },
  { time: '400ms', signal: 1890, baseline: 4800 },
  { time: '500ms', signal: 2390, baseline: 3800 },
  { time: '600ms', signal: 3490, baseline: 4300 },
];

export const DataChart = () => {
  return (
    <div className="h-[500px] w-full p-4 bg-slate-900/50 rounded-xl border border-slate-800">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
          />
          <Legend />
          <Line type="monotone" dataKey="signal" stroke="#38bdf8" activeDot={{ r: 8 }} strokeWidth={2} />
          <Line type="monotone" dataKey="baseline" stroke="#64748b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

