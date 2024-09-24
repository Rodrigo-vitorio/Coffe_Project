import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dados manuais para visitas e clientes por mês
const data = [
  { name: 'Janeiro', visitas: 2000, clientes: 120 },
  { name: 'Fevereiro', visitas: 1800, clientes: 98 },
  { name: 'Março', visitas: 1500, clientes: 75 },
  { name: 'Abril', visitas: 2200, clientes: 150 },
  { name: 'Maio', visitas: 2100, clientes: 130 },
  { name: 'Junho', visitas: 1700, clientes: 90 },
  { name: 'Julho', visitas: 1950, clientes: 110 },
  { name: 'Agosto', visitas: 2400, clientes: 140 },
  { name: 'Setembro', visitas: 2150, clientes: 115 },
  { name: 'Outubro', visitas: 2300, clientes: 130 },
  { name: 'Novembro', visitas: 2500, clientes: 145 },
  { name: 'Dezembro', visitas: 2800, clientes: 170 },
];

export const GraphicVisit = () => {
  return (
    <ResponsiveContainer width={400} height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Barras para mostrar as visitas */}
        <Bar dataKey="visitas" barSize={20} fill="#413ea0" />
        {/* Linha para mostrar os clientes */}
        <Line type="monotone" dataKey="clientes" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}


