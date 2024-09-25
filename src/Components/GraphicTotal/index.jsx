import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

// Dados manuais para o gráfico
const data = [
  { name: 'Café', value: 400 },
  { name: 'Máquinas', value: 300 },
  { name: 'Acessórios', value: 200 },
  { name: 'Outros', value: 100 },
];

// Cores para cada fatia do gráfico
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const GraphicTotal = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="40%"
          outerRadius={70}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}


