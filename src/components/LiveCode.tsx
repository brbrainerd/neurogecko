'use client';

import { CodePane } from 'spectacle';

interface LiveCodeProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
}

export const LiveCode = ({ code, language = "tsx", showLineNumbers = true }: LiveCodeProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 text-sm">
      <CodePane
        language={language}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </CodePane>
    </div>
  );
};
