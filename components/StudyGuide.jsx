"use client";

import { useState } from "react";

function Section({ section, index, isOpen, onToggle }) {
  return (
    <div className="bg-card rounded-2xl shadow-card overflow-hidden mb-4">
      {/* Section header — always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-card-alt/50 transition-colors"
      >
        <span className="w-8 h-8 rounded-lg bg-terra/10 text-terra flex items-center justify-center text-sm font-extrabold flex-shrink-0">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-navy">{section.title}</h3>
          {section.subtitle && (
            <p className="text-xs text-slate mt-0.5">{section.subtitle}</p>
          )}
        </div>
        <span
          className={`text-slate transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {/* Section content */}
      {isOpen && (
        <div className="px-6 pb-6 animate-fade-in">
          <div className="border-t border-line pt-5">
            {section.blocks.map((block, bi) => (
              <Block key={bi} block={block} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Block({ block }) {
  if (block.type === "text") {
    return (
      <p className="text-sm text-navy/80 leading-relaxed mb-4">
        {block.content}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h4 className="text-sm font-bold text-navy mt-5 mb-2">
        {block.content}
      </h4>
    );
  }

  if (block.type === "definition") {
    return (
      <div className="bg-steel-light rounded-xl p-4 mb-4">
        <div className="text-xs font-bold text-steel uppercase tracking-wider mb-1">
          {block.term}
        </div>
        <p className="text-sm text-navy font-medium leading-relaxed">
          {block.content}
        </p>
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="mb-4">
        {block.title && (
          <p className="text-sm font-semibold text-navy mb-2">{block.title}</p>
        )}
        <ul className="space-y-1.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-navy/80"
            >
              <span className="text-terra mt-1 flex-shrink-0 text-xs">●</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "keypoint") {
    return (
      <div className="bg-terra-light border-l-4 border-terra rounded-r-xl p-4 mb-4">
        <p className="text-sm text-navy font-medium leading-relaxed">
          <span className="font-bold">Key point: </span>
          {block.content}
        </p>
      </div>
    );
  }

  if (block.type === "comparison") {
    return (
      <div className="grid grid-cols-2 gap-3 mb-4">
        {block.items.map((item, i) => (
          <div key={i} className="bg-card-alt rounded-xl p-4">
            <div className="text-xs font-bold text-terra uppercase tracking-wider mb-1">
              {item.label}
            </div>
            <p className="text-sm text-navy/80 leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div className="mb-4 overflow-x-auto">
        {block.title && (
          <p className="text-sm font-semibold text-navy mb-2">{block.title}</p>
        )}
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-3 py-2 bg-subtle text-slate font-bold text-xs uppercase tracking-wider rounded-t-lg"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri} className="border-t border-line">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-3 py-2 text-navy/80 ${
                      ci === 0 ? "font-semibold text-navy" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

export default function StudyGuide({ guide }) {
  const [openSections, setOpenSections] = useState({ 0: true });

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const expandAll = () => {
    const all = {};
    guide.sections.forEach((_, i) => (all[i] = true));
    setOpenSections(all);
  };

  const collapseAll = () => setOpenSections({});

  return (
    <div className="animate-fade-in">
      {/* Guide intro */}
      {guide.intro && (
        <div className="bg-card-alt rounded-2xl p-6 mb-6">
          <p className="text-sm text-navy/70 leading-relaxed">{guide.intro}</p>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-slate font-medium">
          {guide.sections.length} sections
        </span>
        <div className="flex gap-2">
          <button
            onClick={expandAll}
            className="text-xs font-semibold text-steel hover:text-navy transition-colors px-3 py-1.5 rounded-lg hover:bg-subtle"
          >
            Expand all
          </button>
          <button
            onClick={collapseAll}
            className="text-xs font-semibold text-steel hover:text-navy transition-colors px-3 py-1.5 rounded-lg hover:bg-subtle"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Sections */}
      {guide.sections.map((section, i) => (
        <Section
          key={i}
          section={section}
          index={i}
          isOpen={!!openSections[i]}
          onToggle={() => toggleSection(i)}
        />
      ))}
    </div>
  );
}
