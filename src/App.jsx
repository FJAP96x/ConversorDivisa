import "./App.css";
import { CurrencyConverter } from "./components/currencyConverter";
export const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-red-600 flex items-center justify-center p-4 font-sans">
      <CurrencyConverter API_KEY={API_KEY} />
    </div>
  );
};
