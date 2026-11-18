import { ArrowUpRight, ChartNoAxesCombined, ShieldCheck, Brain } from "lucide-react";
import { DeveloperHeading, RevealBlock } from "./DeveloperEffects";

const pillars = [
  [ChartNoAxesCombined, "Technical Analysis", "Charting market structure and price action.", ["Market structure", "Price action", "Chart patterns"]],
  [ShieldCheck, "Risk Management", "Calculated position sizing and portfolio balance.", ["Position sizing", "Portfolio balance", "Risk awareness"]],
  [Brain, "Market Psychology", "Understanding sentiment and behavioral economics.", ["Market sentiment", "Behavioral economics", "Discipline"]],
];
const candles = [[28,147,178,138,189],[53,163,192,152,202],[78,159,175,148,187],[103,139,166,127,179],[128,120,145,108,154],[153,130,152,118,167],[178,111,137,99,148],[203,87,118,76,129],[228,100,122,89,135],[253,78,105,65,117],[278,57,85,46,95],[303,69,91,54,106],[328,49,76,38,87],[353,30,56,20,70],[378,42,64,29,78],[403,22,48,12,60]];

export default function TraderSection() {
  return <section id="trading" className="dp-section trader-section grid-surface">
    <div className="dp-section-label"><span>07</span><i/>MARKETS & MINDSET</div>
    <div className="trader-introduction"><div><span className="dp-eyebrow">PATTERNS. DISCIPLINE. PERSPECTIVE.</span><DeveloperHeading>Active<br/><span className="gold">Trader.</span></DeveloperHeading><p>Beyond code, I navigate the financial markets. I apply the same analytical rigor from engineering to identify patterns, manage risk, and execute trades with discipline.</p></div><RevealBlock className="trader-chart"><div className="trader-chart-top"><span><i/> MARKET STUDY</span><ChartNoAxesCombined size={19}/></div><svg viewBox="0 0 440 235" role="img" aria-label="Illustrative candlestick chart showing market structure, not live market data"><defs><linearGradient id="trader-area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c6b580" stopOpacity=".16"/><stop offset="100%" stopColor="#c6b580" stopOpacity="0"/></linearGradient></defs>{[40,85,130,175,220].map(y=><line key={y} x1="10" x2="430" y1={y} y2={y} className="chart-guide"/>)}<path d="M28 178 L53 192 L78 159 L103 139 L128 120 L153 152 L178 111 L203 87 L228 122 L253 78 L278 57 L303 91 L328 49 L353 30 L378 64 L403 22 L403 228 L28 228 Z" fill="url(#trader-area)"/>{candles.map(([x,open,close,high,low],i)=><g key={x} className={`market-candle ${i%4===1?'candle-down':''}`}><line x1={x} x2={x} y1={high} y2={low}/><rect x={x-5} y={Math.min(open,close)} width="10" height={Math.abs(close-open)} rx="1"/></g>)}<path className="trader-trend" d="M24 197 Q115 162 169 143 T285 96 T411 46"/></svg><div className="trader-chart-bottom"><span>STRUCTURE → PATTERNS → DISCIPLINE</span><span>ILLUSTRATIVE CHART</span></div></RevealBlock></div>
    <div className="trader-pillars">{pillars.map(([Icon,title,description,topics],i)=><RevealBlock key={title}>
      <details className="trader-pillar" name="trading-focus" onToggle={() => requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))}>
        <summary>
          <span className="trader-pillar-number">0{i+1}</span>
          <Icon size={27} strokeWidth={1.2}/>
          <h3>{title}</h3><p>{description}</p>
          <span className="trader-pillar-hint">EXPLORE FOCUS <ArrowUpRight size={17}/></span>
        </summary>
        <div className="trader-pillar-content"><span className="dp-eyebrow">FOCUS AREAS</span><ul>{topics.map(topic=><li key={topic}>{topic}</li>)}</ul></div>
      </details>
    </RevealBlock>)}</div>
    <div className="trader-footnote"><span>PERSONAL INTEREST</span><p>Exploring financial markets through a technical lens. Learning chart patterns and market psychology as a personal interest.</p><div><span>Groww</span><span>CoinDCX</span></div></div>
  </section>;
}
