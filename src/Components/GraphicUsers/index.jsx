import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dados manuais para carrinhos vazios e carrinhos feitos por mês
const data = [
  { name: 'Janeiro', carrinhosAbandonados: 300, carrinhosFeitos: 80 },
  { name: 'Fevereiro', carrinhosAbandonados: 250, carrinhosFeitos: 60 },
  { name: 'Março', carrinhosAbandonados: 280, carrinhosFeitos: 75 },
  { name: 'Abril', carrinhosAbandonados: 320, carrinhosFeitos: 90 },
  { name: 'Maio', carrinhosAbandonados: 300, carrinhosFeitos: 85 },
  { name: 'Junho', carrinhosAbandonados: 270, carrinhosFeitos: 70 },
  { name: 'Julho', carrinhosAbandonados: 290, carrinhosFeitos: 95 },
  { name: 'Agosto', carrinhosAbandonados: 310, carrinhosFeitos: 100 },
  { name: 'Setembro', carrinhosAbandonados: 350, carrinhosFeitos: 120 },
  { name: 'Outubro', carrinhosAbandonados: 330, carrinhosFeitos: 110 },
  { name: 'Novembro', carrinhosAbandonados: 360, carrinhosFeitos: 130 },
  { name: 'Dezembro', carrinhosAbandonados: 200, carrinhosFeitos: 140 },
];

export const GraphicUsers = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Linha para carrinhos vazios */}
        <Line type="monotone" dataKey="carrinhosAbandonados" stroke="#413ea0" strokeWidth={2} name="Carrinhos Abandonados" />
        {/* Linha para carrinhos feitos */}
        <Line type="monotone" dataKey="carrinhosFeitos" stroke="#ff7300" strokeWidth={2} name="Carrinhos Feitos" />
      </LineChart>
    </ResponsiveContainer>
  );
}


