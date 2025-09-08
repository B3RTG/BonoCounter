interface SaldoCardProps {
  saldo: number;
}

const SaldoCard = ({ saldo }: SaldoCardProps) => (
  <div className="w-full max-w-xs mx-auto mb-6">
    <div className="rounded-2xl shadow-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 flex flex-col items-center relative overflow-hidden">
      <span className="uppercase text-xs tracking-widest opacity-80 mb-2">Saldo actual</span>
      <span className="text-4xl font-extrabold tracking-tight drop-shadow-lg">{saldo.toFixed(2)} €</span>
      <div className="absolute right-4 top-4 opacity-20 text-6xl select-none pointer-events-none">💳</div>
    </div>
  </div>
);

export default SaldoCard;
