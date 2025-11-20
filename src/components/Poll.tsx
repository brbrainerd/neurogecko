'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const Poll = () => {
  const [votes, setVotes] = useState([
    { name: 'Option A', count: 12 },
    { name: 'Option B', count: 19 },
    { name: 'Option C', count: 5 },
  ]);

  const handleVote = (index: number) => {
    const newVotes = [...votes];
    newVotes[index].count += 1;
    setVotes(newVotes);
  };

  return (
    <div className="flex flex-col items-center w-full h-[500px]">
      <div className="flex gap-4 mb-8">
        {votes.map((option, index) => (
          <button
            key={option.name}
            onClick={() => handleVote(index)}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-bold transition-colors shadow-lg shadow-sky-500/20"
          >
            Vote {option.name.split(' ')[1]}
          </button>
        ))}
      </div>

      <div className="w-full h-full bg-slate-900/50 p-4 rounded-xl border border-slate-800">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={votes}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
            <Bar dataKey="count" fill="#38bdf8" radius={[4, 4, 0, 0]}>
              {votes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#38bdf8', '#818cf8', '#c084fc'][index % 3]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
