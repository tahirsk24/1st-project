
import React, { useState } from 'react';
import ProposalView from './components/ProposalView';
import SuccessView from './components/SuccessView';
import FloatingBackground from './components/FloatingBackground';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      <FloatingBackground variant={isAccepted ? 'success' : 'proposal'} />
      
      {/* Navigation */}
      <nav className="relative z-20 w-full px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-icons text-2xl animate-pulse">favorite</span>
          <span className="font-bold text-lg tracking-tight">BeMine</span>
        </div>
        {!isAccepted && (
          <div>
            <button className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">
              Why me?
            </button>
          </div>
        )}
      </nav>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center p-6 text-center">
        {!isAccepted ? (
          <ProposalView onAccept={handleAccept} />
        ) : (
          <SuccessView />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-20 w-full py-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary/40 flex items-center justify-center gap-1">
          Made with <span className="material-icons text-[10px] text-primary">favorite</span> for you
        </p>
      </footer>
    </div>
  );
};

export default App;
