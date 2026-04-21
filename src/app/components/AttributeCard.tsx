import React, { useState, useMemo } from 'react';
import { 
  Check, 
  Search, 
  Filter, 
  Trash2, 
  Anchor, 
  X,
  Ban
} from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { cn } from '../utils';

interface Attribute {
  id: string;
  label: string;
  icon: React.ElementType;
  options: string[];
}

type Step = 'selection' | 'grouping' | 'exclusion' | 'analysis';

interface AttributeCardProps {
  attribute: Attribute;
  step: Step;
  selectionCount: number;
  isGrouped: boolean;
  groupLevel: number;
  exclusionCount: number;
  onToggleGroup: () => void;
  onUpdateSelection: (values: string[]) => void;
  onUpdateExclusion: (values: string[]) => void;
  currentSelection: string[];
  currentExclusion: string[];
  tooltip?: string;
}

export function AttributeCard({ 
  attribute, 
  step, 
  selectionCount, 
  isGrouped, 
  groupLevel,
  exclusionCount,
  onToggleGroup,
  onUpdateSelection,
  onUpdateExclusion,
  currentSelection,
  currentExclusion,
  tooltip
}: AttributeCardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Filter options based on search
  const filteredOptions = useMemo(() => {
    if (!searchTerm) return attribute.options;
    return attribute.options.filter(opt => 
      opt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [attribute.options, searchTerm]);

  // Handlers
  const handleToggleOption = (value: string, isSelection: boolean) => {
    const currentList = isSelection ? currentSelection : currentExclusion;
    const updateFn = isSelection ? onUpdateSelection : onUpdateExclusion;
    
    if (currentList.includes(value)) {
      updateFn(currentList.filter(v => v !== value));
    } else {
      updateFn([...currentList, value]);
    }
  };

  const handleClear = (isSelection: boolean) => {
    if (isSelection) onUpdateSelection([]);
    else onUpdateExclusion([]);
  };

  // Visual State Helpers
  const isActive = (step === 'selection' && selectionCount > 0) || 
                   (step === 'grouping' && isGrouped) || 
                   (step === 'exclusion' && exclusionCount > 0);

  // Shared tooltip content (rendered via portal)
  const tooltipContent = tooltip ? (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className="z-[200] bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-[200px] text-center leading-snug"
        sideOffset={6}
      >
        {tooltip}
        <RadixTooltip.Arrow className="fill-slate-800" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  ) : null;

  // ─── 1. Grouping Mode (Direct Toggle) ───────────────────────────────────────
  if (step === 'grouping') {
    const btn = (
      <button
        onClick={onToggleGroup}
        className={cn(
          "relative w-[140px] h-[90px] shrink-0 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center group outline-none",
          isGrouped 
            ? "bg-[#F4F7FA] border-[#314158] shadow-md" 
            : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
        )}
      >
        <span className={cn(
          "text-[12px] font-bold uppercase tracking-wide transition-colors",
          isGrouped ? "text-[#314158]" : "text-slate-500 group-hover:text-slate-700"
        )}>
          {attribute.label}
        </span>
        
        {isGrouped && (
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center">
              <span className="text-sm font-bold">{groupLevel}</span>
            </div>
          </div>
        )}
        
        {isGrouped && (
          <div className="absolute top-2 right-2">
            <Anchor size={12} className="text-[#314158]" />
          </div>
        )}
      </button>
    );

    if (tooltip) {
      return (
        <RadixTooltip.Root delayDuration={300}>
          <RadixTooltip.Trigger asChild>
            <span className="inline-flex">{btn}</span>
          </RadixTooltip.Trigger>
          {tooltipContent}
        </RadixTooltip.Root>
      );
    }
    return btn;
  }

  // ─── 2. Selection & Exclusion Modes (Popover) ───────────────────────────────
  const isSelectionMode = step === 'selection';
  const count = isSelectionMode ? selectionCount : exclusionCount;
  const currentValues = isSelectionMode ? currentSelection : currentExclusion;

  // The actual card button JSX (shared between tooltip and non-tooltip variants)
  const cardButton = (
    <button
      className={cn(
        "relative w-[140px] h-[90px] shrink-0 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center group outline-none",
        !isActive && "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm",
        isSelectionMode && count > 0 && "border-[#314158] bg-[#f1f5f9] shadow-sm",
        !isSelectionMode && count > 0 && "bg-[#FFF6F4] border-[#F0462A] shadow-sm",
        isOpen && "ring-2 ring-slate-200 ring-offset-2"
      )}
    >
      <span className={cn("font-bold uppercase tracking-wide transition-colors text-[12px]", isActive && isSelectionMode ? "text-[#314158]" :
    isActive && !isSelectionMode ? "text-[#B83232]" :
        "text-slate-500 group-hover:text-slate-700")}>
        {attribute.label}
      </span>

      {count > 0 && (
        <div className={cn(
          "px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm transition-all animate-in zoom-in-50 mt-2",
          isSelectionMode 
            ? "bg-[#314158] text-white" 
            : "bg-[#B83232] text-white"
        )}>
          <span>{count}</span>
          <span className="opacity-80 font-medium">
            {isSelectionMode ? 'selec.' : 'excl.'}
          </span>
        </div>
      )}
    </button>
  );

  // Popover content (shared)
  const popoverContent = (
    <Popover.Portal>
      <Popover.Content 
        className="w-[280px] bg-white rounded-xl shadow-xl border border-slate-200 animate-in zoom-in-95 duration-200 z-50 flex flex-col overflow-hidden" 
        sideOffset={8}
        side="top"
      >
        {/* Header */}
        <div className={cn(
          "px-4 py-3 border-b flex items-center justify-between bg-slate-50/50",
          isSelectionMode ? "border-slate-100" : "border-slate-100"
        )}>
          <div className="flex items-center gap-2">
            {isSelectionMode ? (
              <Filter size={14} className="text-[#314158]" />
            ) : (
              <Trash2 size={14} className="text-[#F0462A]" />
            )}
            <span className={cn(
              "text-[14px] font-bold uppercase tracking-wide",
              isSelectionMode ? "text-slate-700" : "text-[#B83232]"
            )}>
              {isSelectionMode ? 'Filtrar' : 'Excluir'} {attribute.label}
            </span>
          </div>
          {count > 0 && (
            <button 
              onClick={() => handleClear(isSelectionMode)}
              className="text-[10px] font-medium text-slate-500 hover:text-slate-800 underline transition-colors"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Search */}
        <div className="p-2 border-b border-slate-100">
          <div className="relative">
            <Search size={13} className="absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Buscar em ${attribute.label.toLowerCase()}...`}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:bg-white transition-all placeholder:text-slate-400"
              autoFocus
            />
          </div>
        </div>

        {/* List */}
        <div className="max-h-[240px] overflow-y-auto p-1.5 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          {filteredOptions.length > 0 ? (
            <div className="space-y-0.5">
              {filteredOptions.map((opt) => {
                const isChecked = currentValues.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => handleToggleOption(opt, isSelectionMode)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all group",
                      isChecked 
                        ? isSelectionMode 
                          ? "bg-[#f1f5f9] text-[#314158]" 
                          : "bg-[#FFF6F4] text-[#B83232]"
                        : "hover:bg-slate-50 text-slate-600"
                    )}
                  >
                    <div className={cn(
                      "w-4 h-4 rounded border flex items-center justify-center transition-all flex-shrink-0",
                      isChecked 
                        ? isSelectionMode 
                          ? "bg-[#314158] border-[#314158]" 
                          : "bg-[#F0462A] border-[#F0462A]"
                        : "border-slate-300 bg-white group-hover:border-slate-400"
                    )}>
                      {isChecked && <Check size={11} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className={cn(
                      "text-xs font-medium truncate",
                       isChecked && "font-bold"
                    )}>
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-slate-400">
              <p className="text-xs">Nenhum resultado encontrado</p>
            </div>
          )}
        </div>

        {/* Summary Footer if items selected */}
        {count > 0 && (
          <div className="px-3 py-2 bg-slate-50 border-t border-slate-100">
            <div className="flex flex-wrap gap-1">
              {currentValues.slice(0, 3).map(val => (
                <span key={val} className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-white border border-slate-200 text-slate-600 max-w-[80px] truncate">
                  {val}
                </span>
              ))}
              {count > 3 && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-slate-200 text-slate-600">
                  +{count - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </Popover.Content>
    </Popover.Portal>
  );

  // With tooltip: RadixTooltip.Trigger asChild → span wrapper → Popover inside
  // (avoids nested asChild which leaks Figma inspector props to the button DOM element)
  if (tooltip) {
    return (
      <RadixTooltip.Root delayDuration={300} open={isOpen ? false : undefined}>
        <RadixTooltip.Trigger asChild>
          <span className="inline-flex">
            <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
              <Popover.Trigger asChild>
                {cardButton}
              </Popover.Trigger>
              {popoverContent}
            </Popover.Root>
          </span>
        </RadixTooltip.Trigger>
        {tooltipContent}
      </RadixTooltip.Root>
    );
  }

  // Without tooltip: plain Popover
  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        {cardButton}
      </Popover.Trigger>
      {popoverContent}
    </Popover.Root>
  );
}