import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const tickers = [
    { symbol: "BTC", price: "98,432.10", change: "+2.4%", up: true },
    { symbol: "ETH", price: "2,845.50", change: "-0.8%", up: false },
    { symbol: "NIFTY", price: "24,850.00", change: "+0.5%", up: true },
    { symbol: "SPX", price: "5,890.20", change: "+1.2%", up: true },
    { symbol: "NVDA", price: "145.60", change: "+3.1%", up: true },
    { symbol: "TSLA", price: "240.80", change: "-1.5%", up: false },
    { symbol: "SOL", price: "180.25", change: "+4.2%", up: true },
    { symbol: "AAPL", price: "230.50", change: "+0.1%", up: true },
];

const TickerItem = ({ item }) => (
    <div className="flex items-center space-x-2 mx-6">
        <span className="font-bold text-gray-300">{item.symbol}</span>
        <span className="text-gray-400 text-sm">{item.price}</span>
        <span className={`text-xs font-bold flex items-center ${item.up ? 'text-green-400' : 'text-red-400'}`}>
            {item.up ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
            {item.change}
        </span>
    </div>
);

const StockTicker = () => {
    return (
        <div className="fixed bottom-6 left-0 right-0 z-40 pointer-events-none opacity-80 mix-blend-screen">
            <div className="bg-black/40 backdrop-blur-sm border-y border-white/5 py-2 overflow-hidden flex">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 25,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...tickers, ...tickers, ...tickers].map((item, index) => (
                        <TickerItem key={index} item={item} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default StockTicker;
