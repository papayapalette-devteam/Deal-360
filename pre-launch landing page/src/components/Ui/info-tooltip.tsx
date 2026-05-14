'use client';

import { BadgeInfo } from 'lucide-react';

import { cn } from '@/lib/utils';

type InfoTooltipProps = {
  content: string;
  className?: string;
};

export function InfoTooltip({ content, className }: InfoTooltipProps) {
  return (
    <span className="group relative inline-flex items-center">
      <BadgeInfo
        className={cn(
          'h-4 w-4 cursor-default text-[#7b8492] transition-colors group-hover:text-[#4b5563]',
          className
        )}
      />
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-[300px] -translate-x-1/2 rounded-[10px] bg-[#3f3f3f] px-4 py-3 text-[13px] leading-snug text-white/90 shadow-lg opacity-0 transition-opacity duration-150 group-hover:opacity-100 whitespace-pre-line"
      >
        {content}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#3f3f3f]" />
      </span>
    </span>
  );
}
