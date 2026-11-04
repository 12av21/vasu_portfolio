import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, RefreshCw, Layers, DollarSign, HelpCircle, CheckCircle2 } from 'lucide-react';

export const Calculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bep' | 'ccc' | 'cagr'>('bep');

  // --- 1. BEP State ---
  const [fixedCosts, setFixedCosts] = useState<number>(150000); // ₹
  const [sellingPrice, setSellingPrice] = useState<number>(500); // ₹
  const [variableCost, setVariableCost] = useState<number>(280); // ₹
  const [plannedUnits, setPlannedUnits] = useState<number>(950);

  const bepMetrics = useMemo(() => {
    const contributionMargin = Math.max(sellingPrice - variableCost, 1);
    const cmRatio = (contributionMargin / Math.max(sellingPrice, 1)) * 100;
    const bepUnits = Math.ceil(fixedCosts / contributionMargin);
    const bepRevenue = bepUnits * sellingPrice;
    const plannedRevenue = plannedUnits * sellingPrice;
    const totalCostPlanned = fixedCosts + plannedUnits * variableCost;
    const profitPlanned = plannedRevenue - totalCostPlanned;
    const marginOfSafetyUnits = plannedUnits - bepUnits;
    const marginOfSafetyPct = plannedUnits > 0 ? (marginOfSafetyUnits / plannedUnits) * 100 : 0;

    return {
      contributionMargin,
      cmRatio,
      bepUnits,
      bepRevenue,
      plannedRevenue,
      totalCostPlanned,
      profitPlanned,
      marginOfSafetyUnits,
      marginOfSafetyPct,
    };
  }, [fixedCosts, sellingPrice, variableCost, plannedUnits]);

  // Presets for BEP
  const applyBepPreset = (type: 'darkstore' | 'cafe' | 'ecommerce') => {
    if (type === 'darkstore') {
      setFixedCosts(320000);
      setSellingPrice(510);
      setVariableCost(390);
      setPlannedUnits(3200);
    } else if (type === 'cafe') {
      setFixedCosts(45000);
      setSellingPrice(140);
      setVariableCost(55);
      setPlannedUnits(850);
    } else {
      setFixedCosts(85000);
      setSellingPrice(899);
      setVariableCost(420);
      setPlannedUnits(350);
    }
  };

  // --- 2. Cash Conversion Cycle (CCC) State ---
  const [dio, setDio] = useState<number>(38); // Days Inventory Outstanding
  const [dso, setDso] = useState<number>(24); // Days Sales Outstanding (Receivables)
  const [dpo, setDpo] = useState<number>(45); // Days Payables Outstanding (Creditors)
  const [dailySales, setDailySales] = useState<number>(25000); // Daily Sales in ₹

  const cccMetrics = useMemo(() => {
    const operatingCycle = dio + dso;
    const ccc = operatingCycle - dpo;
    const workingCapitalTiedUp = ccc * dailySales;
    const isNegative = ccc <= 0;

    return {
      operatingCycle,
      ccc,
      workingCapitalTiedUp,
      isNegative,
    };
  }, [dio, dso, dpo, dailySales]);

  const applyCccPreset = (preset: 'dmart' | 'manufacturing' | 'd2c') => {
    if (preset === 'dmart') {
      setDio(28);
      setDso(4);
      setDpo(48);
      setDailySales(850000);
    } else if (preset === 'manufacturing') {
      setDio(65);
      setDso(52);
      setDpo(38);
      setDailySales(120000);
    } else {
      setDio(42);
      setDso(12);
      setDpo(30);
      setDailySales(45000);
    }
  };

  // --- 3. Compound Return & ROI State ---
  const [initialCapital, setInitialCapital] = useState<number>(50000);
  const [monthlyAddition, setMonthlyAddition] = useState<number>(5000);
  const [annualRate, setAnnualRate] = useState<number>(14);
  const [years, setYears] = useState<number>(5);

  const cagrMetrics = useMemo(() => {
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = years * 12;
    let balance = initialCapital;
    const invested = initialCapital + monthlyAddition * totalMonths;

    for (let i = 0; i < totalMonths; i++) {
      balance = balance * (1 + monthlyRate) + monthlyAddition;
    }

    const totalInterestEarned = balance - invested;
    const totalGrowthMultiple = invested > 0 ? balance / invested : 1;
    const ruleOf72Years = annualRate > 0 ? (72 / annualRate).toFixed(1) : 'N/A';

    return {
      futureValue: Math.round(balance),
      totalInvested: Math.round(invested),
      totalInterestEarned: Math.round(totalInterestEarned),
      totalGrowthMultiple: totalGrowthMultiple.toFixed(2),
      ruleOf72Years,
    };
  }, [initialCapital, monthlyAddition, annualRate, years]);

  return (
    <section id="calculators" className="py-16 lg:py-24 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
            <span>Applied Financial Engineering</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Interactive Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Interactive Commerce & Venture Calculators
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            In Class 12 Commerce, theory meets calculation. I designed these three live models to demonstrate how unit economics, operating cycles, and compound interest drive corporate decision-making.
          </p>
        </div>

        {/* Tab Switcher - Functional Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-2xl mb-8">
          <button
            onClick={() => setActiveTab('bep')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer text-center ${
              activeTab === 'bep'
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            01. Break-Even Point (BEP)
          </button>
          <button
            onClick={() => setActiveTab('ccc')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer text-center ${
              activeTab === 'ccc'
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            02. Cash Conversion Cycle (CCC)
          </button>
          <button
            onClick={() => setActiveTab('cagr')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer text-center ${
              activeTab === 'cagr'
                ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            03. Venture ROI & Growth
          </button>
        </div>

        {/* TAB 1: BREAK-EVEN POINT CALCULATOR */}
        {activeTab === 'bep' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Model Parameters</span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span>Presets:</span>
                  <button onClick={() => applyBepPreset('darkstore')} className="hover:text-amber-300 underline underline-offset-2">Quick Commerce</button>
                  <span>·</span>
                  <button onClick={() => applyBepPreset('cafe')} className="hover:text-amber-300 underline underline-offset-2">Campus Cafe</button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Fixed Overhead Costs (Rent, Salaries, Tech)</span>
                  <span className="text-white font-mono font-bold">₹{fixedCosts.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={1000000}
                  step={5000}
                  value={fixedCosts}
                  onChange={(e) => setFixedCosts(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Selling Price per Unit (P)</span>
                  <span className="text-white font-mono font-bold">₹{sellingPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={10}
                  value={sellingPrice}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSellingPrice(val);
                    if (variableCost >= val) setVariableCost(Math.round(val * 0.6));
                  }}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Variable Cost per Unit (Raw materials, COGS, packaging)</span>
                  <span className="text-white font-mono font-bold">₹{variableCost.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={Math.max(sellingPrice - 10, 20)}
                  step={5}
                  value={variableCost}
                  onChange={(e) => setVariableCost(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Target / Projected Unit Sales</span>
                  <span className="text-amber-300 font-mono font-bold">{plannedUnits.toLocaleString('en-IN')} units</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={25}
                  value={plannedUnits}
                  onChange={(e) => setPlannedUnits(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Formula: BEP (Units) = Fixed Cost / (Price - Variable Cost)</span>
                <button
                  onClick={() => applyBepPreset('cafe')}
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              </div>
            </div>

            {/* Calculated Results & Visual Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Contribution Margin</div>
                  <div className="mt-1 text-xl font-bold font-mono text-white tabular-nums">
                    ₹{bepMetrics.contributionMargin}
                  </div>
                  <div className="text-[10px] text-amber-400 font-mono mt-0.5">
                    {bepMetrics.cmRatio.toFixed(1)}% of price
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Break-Even Units</div>
                  <div className="mt-1 text-xl font-bold font-mono text-amber-400 tabular-nums">
                    {bepMetrics.bepUnits.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Units to 0 Profit
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Break-Even Revenue</div>
                  <div className="mt-1 text-xl font-bold font-mono text-white tabular-nums">
                    ₹{(bepMetrics.bepRevenue / 1000).toFixed(0)}k
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    ₹{bepMetrics.bepRevenue.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${
                  bepMetrics.profitPlanned >= 0
                    ? 'bg-emerald-950/20 border-emerald-800/40'
                    : 'bg-rose-950/20 border-rose-800/40'
                }`}>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Planned Outcome</div>
                  <div className={`mt-1 text-xl font-bold font-mono tabular-nums ${
                    bepMetrics.profitPlanned >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {bepMetrics.profitPlanned >= 0 ? '+' : ''}₹{Math.round(bepMetrics.profitPlanned).toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {bepMetrics.marginOfSafetyPct.toFixed(1)}% MoS
                  </div>
                </div>
              </div>

              {/* Dynamic SVG Visual Break-Even Chart */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">Break-Even Geometry Visualizer</h4>
                    <p className="text-xs text-slate-400">Intersection of Total Revenue line vs Total Cost line</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <span className="w-2.5 h-0.5 bg-amber-400 inline-block" /> Revenue Line
                    </span>
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <span className="w-2.5 h-0.5 bg-blue-400 inline-block" /> Total Cost Line
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <span className="w-2.5 h-0.5 bg-slate-600 inline-block border-t border-dashed" /> Fixed Cost
                    </span>
                  </div>
                </div>

                {/* SVG Graph */}
                <div className="h-56 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 600 220" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="40" y1="20" x2="40" y2="190" stroke="#334155" strokeWidth="1" />
                    <line x1="40" y1="190" x2="580" y2="190" stroke="#334155" strokeWidth="1" />
                    <line x1="40" y1="105" x2="580" y2="105" stroke="#1e293b" strokeDasharray="3 3" />

                    {/* Fixed cost horizontal line */}
                    {/* Fixed Cost relative height on graph */}
                    <line
                      x1="40"
                      y1="140"
                      x2="580"
                      y2="140"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <text x="50" y="135" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                      Fixed Cost Base (₹{fixedCosts.toLocaleString('en-IN')})
                    </text>

                    {/* Total Cost Line: Starts at y=140, slopes up */}
                    <line
                      x1="40"
                      y1="140"
                      x2="560"
                      y2="40"
                      stroke="#60a5fa"
                      strokeWidth="2.5"
                    />

                    {/* Total Revenue Line: Starts at 0 (y=190), slopes up steeper */}
                    <line
                      x1="40"
                      y1="190"
                      x2="560"
                      y2="25"
                      stroke="#fbbf24"
                      strokeWidth="2.5"
                    />

                    {/* Break-Even Intersection Point Marker */}
                    <circle cx="330" cy="88" r="6" fill="#fbbf24" stroke="#0f172a" strokeWidth="2" />
                    <text x="345" y="86" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="monospace">
                      BEP ({bepMetrics.bepUnits} units)
                    </text>

                    {/* Profit zone label */}
                    <text x="460" y="55" fill="#34d399" fontSize="11" fontWeight="600">
                      Profit Area →
                    </text>
                    <text x="140" y="175" fill="#f87171" fontSize="11" fontWeight="600">
                      ← Loss Area
                    </text>
                  </svg>
                </div>

                <div className="mt-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-amber-400">Class 12 Commerce Insight:</span>{' '}
                  {bepMetrics.marginOfSafetyPct > 0 ? (
                    <span>
                      With target sales of {plannedUnits} units, your <strong>Margin of Safety</strong> is{' '}
                      <span className="text-emerald-400 font-mono font-semibold">
                        {bepMetrics.marginOfSafetyUnits} units ({bepMetrics.marginOfSafetyPct.toFixed(1)}%)
                      </span>
                      . Sales can drop by this volume before the venture enters loss.
                    </span>
                  ) : (
                    <span className="text-rose-400">
                      Current planned units ({plannedUnits}) fall below the break-even threshold ({bepMetrics.bepUnits} units). You need{' '}
                      {Math.abs(bepMetrics.marginOfSafetyUnits)} more units to cover fixed overhead.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CASH CONVERSION CYCLE (CCC) */}
        {activeTab === 'ccc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Working Capital Drivers</span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span>Presets:</span>
                  <button onClick={() => applyCccPreset('dmart')} className="hover:text-amber-300 underline underline-offset-2">D-Mart</button>
                  <span>·</span>
                  <button onClick={() => applyCccPreset('manufacturing')} className="hover:text-amber-300 underline underline-offset-2">Mfg Plant</button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Days Inventory Outstanding (DIO)</span>
                  <span className="text-white font-mono font-bold">{dio} days</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={120}
                  step={1}
                  value={dio}
                  onChange={(e) => setDio(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500">Average time inventory sits before being sold</span>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Days Sales Outstanding (DSO - Receivables)</span>
                  <span className="text-white font-mono font-bold">{dso} days</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={90}
                  step={1}
                  value={dso}
                  onChange={(e) => setDso(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500">Average time taken to collect payments from debtors</span>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Days Payables Outstanding (DPO - Creditors)</span>
                  <span className="text-white font-mono font-bold">{dpo} days</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={120}
                  step={1}
                  value={dpo}
                  onChange={(e) => setDpo(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <span className="text-[11px] text-slate-500">Credit period granted by your suppliers to pay bills</span>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Average Daily Sales / Revenue</span>
                  <span className="text-white font-mono font-bold">₹{dailySales.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={dailySales}
                  onChange={(e) => setDailySales(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Formula: CCC = (DIO + DSO) - DPO
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Operating Cycle</div>
                  <div className="mt-1 text-2xl font-bold font-mono text-white tabular-nums">
                    {cccMetrics.operatingCycle} <span className="text-xs font-normal text-slate-400">days</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">DIO ({dio}) + DSO ({dso})</div>
                </div>

                <div className={`p-4 rounded-xl border ${
                  cccMetrics.isNegative
                    ? 'bg-emerald-950/25 border-emerald-700/50'
                    : 'bg-amber-950/20 border-amber-800/40'
                }`}>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Cash Conversion Cycle</div>
                  <div className={`mt-1 text-2xl font-bold font-mono tabular-nums ${
                    cccMetrics.isNegative ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {cccMetrics.ccc} <span className="text-xs font-normal">days</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {cccMetrics.isNegative ? 'Negative CCC (Self-Funding)' : 'Cash Tied Up Period'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Net Working Capital</div>
                  <div className="mt-1 text-2xl font-bold font-mono text-white tabular-nums">
                    {cccMetrics.workingCapitalTiedUp >= 0 ? '₹' : '-₹'}
                    {Math.abs(Math.round(cccMetrics.workingCapitalTiedUp)).toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {cccMetrics.isNegative ? 'Supplier funded balance' : 'Short-term capital needed'}
                  </div>
                </div>
              </div>

              {/* Visual Timeline Bar */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2">Operating Timeline Flow</h4>
                <p className="text-xs text-slate-400 mb-6">
                  Visualizing how inventory holding and customer credit interact with supplier credit.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Inventory Holding (DIO: {dio}d)</span>
                      <span>Customer Credit (DSO: {dso}d)</span>
                    </div>
                    <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden flex">
                      <div
                        style={{ width: `${(dio / (dio + dso + dpo)) * 100}%` }}
                        className="bg-amber-500/80 flex items-center justify-center text-[10px] font-bold text-slate-950"
                      >
                        DIO
                      </div>
                      <div
                        style={{ width: `${(dso / (dio + dso + dpo)) * 100}%` }}
                        className="bg-blue-500/80 flex items-center justify-center text-[10px] font-bold text-white"
                      >
                        DSO
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Supplier Credit Period (DPO: {dpo}d)</span>
                      <span className="font-mono text-amber-400">Net Gap = {cccMetrics.ccc} days</span>
                    </div>
                    <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden flex">
                      <div
                        style={{ width: `${(dpo / (dio + dso + dpo)) * 100}%` }}
                        className="bg-emerald-500/80 flex items-center justify-center text-[10px] font-bold text-slate-950"
                      >
                        DPO Credit Window
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-amber-400">Strategic Analysis:</span>{' '}
                  {cccMetrics.isNegative ? (
                    <span>
                      <strong>Negative Working Capital advantage!</strong> Because suppliers grant {dpo} days of credit while goods are sold and collected in {cccMetrics.operatingCycle} days, this business collects customer cash {Math.abs(cccMetrics.ccc)} days <em>before</em> paying suppliers. This is how giants like D-Mart and Amazon generate free float to fund operations without debt.
                    </span>
                  ) : (
                    <span>
                      This enterprise experiences a <strong>{cccMetrics.ccc}-day working capital gap</strong>. The business must arrange approximately <strong>₹{Math.round(cccMetrics.workingCapitalTiedUp).toLocaleString('en-IN')}</strong> through bank overdrafts (Cash Credit limits) or founder equity to sustain day-to-day trade.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMPOUND RETURN & VENTURE ROI */}
        {activeTab === 'cagr' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Capital Inputs</span>
                <span className="text-xs text-slate-400 font-mono">Time Value of Money</span>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Initial Seed Investment (P)</span>
                  <span className="text-white font-mono font-bold">₹{initialCapital.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={500000}
                  step={10000}
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Monthly Operational Re-investment</span>
                  <span className="text-white font-mono font-bold">₹{monthlyAddition.toLocaleString('en-IN')}/mo</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50000}
                  step={1000}
                  value={monthlyAddition}
                  onChange={(e) => setMonthlyAddition(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Expected Annual Compound Rate (CAGR / ROI)</span>
                  <span className="text-amber-400 font-mono font-bold">{annualRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={35}
                  step={1}
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Time Horizon</span>
                  <span className="text-white font-mono font-bold">{years} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Rule of 72 doubling estimate: Money doubles approximately every {cagrMetrics.ruleOf72Years} years at {annualRate}%.
              </div>
            </div>

            {/* Calculated Values */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Total Invested Principal</div>
                  <div className="mt-1 text-2xl font-bold font-mono text-white tabular-nums">
                    ₹{cagrMetrics.totalInvested.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Direct capital outlay</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Compound Earnings</div>
                  <div className="mt-1 text-2xl font-bold font-mono text-amber-400 tabular-nums">
                    +₹{cagrMetrics.totalInterestEarned.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Value generated via compounding</div>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40">
                  <div className="text-[11px] uppercase tracking-wider text-amber-300">Projected Enterprise Value</div>
                  <div className="mt-1 text-2xl font-bold font-mono text-amber-300 tabular-nums">
                    ₹{cagrMetrics.futureValue.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-amber-400/80 mt-1">{cagrMetrics.totalGrowthMultiple}x Capital Multiple</div>
                </div>
              </div>

              {/* Visual Split */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2">Principal vs Compounded Wealth Ratio</h4>
                <p className="text-xs text-slate-400 mb-6">
                  Over a {years}-year period at {annualRate}% annual return.
                </p>

                <div className="space-y-3">
                  <div className="h-8 w-full bg-slate-950 rounded-xl overflow-hidden flex border border-slate-800">
                    <div
                      style={{ width: `${(cagrMetrics.totalInvested / cagrMetrics.futureValue) * 100}%` }}
                      className="bg-slate-700 flex items-center justify-center text-xs font-mono font-semibold text-slate-200"
                    >
                      {Math.round((cagrMetrics.totalInvested / cagrMetrics.futureValue) * 100)}% Outlay
                    </div>
                    <div
                      style={{ width: `${(cagrMetrics.totalInterestEarned / cagrMetrics.futureValue) * 100}%` }}
                      className="bg-amber-400 flex items-center justify-center text-xs font-mono font-bold text-slate-950"
                    >
                      {Math.round((cagrMetrics.totalInterestEarned / cagrMetrics.futureValue) * 100)}% Returns
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-slate-700" /> Invested Capital: ₹{cagrMetrics.totalInvested.toLocaleString('en-IN')}
                    </span>
                    <span className="flex items-center gap-1.5 text-amber-300">
                      <span className="w-2 h-2 rounded bg-amber-400" /> Wealth Multiplier: +₹{cagrMetrics.totalInterestEarned.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                  <span className="font-semibold text-amber-400">Class 12 Financial Mathematics Takeaway:</span>{' '}
                  As Albert Einstein famously called it, compound interest is the eighth wonder of the world. In commercial math, whether modeling a business sinking fund for machinery replacement or projecting enterprise venture valuations, time horizon is the primary exponent that multiplies returns.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
