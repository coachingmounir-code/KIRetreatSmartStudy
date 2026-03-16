/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Strategy from './components/Strategy';
import YearlyPlan from './components/YearlyPlan';
import Investment from './components/Investment';
import Contract from './components/Contract';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-sans selection:bg-amber-600/30">
      <Hero />
      <Strategy />
      <YearlyPlan />
      <Investment />
      <Contract />
    </div>
  );
}
