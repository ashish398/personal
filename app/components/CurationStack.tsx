"use client";
import { useState } from "react";
import { CURATIONS } from "../data";

const CurationStack = () => {
  const [focus, setFocus] = useState<number | null>(null);
  const count = CURATIONS.items.length;

  return (
    <div className="curation">
      <a href={CURATIONS.href} className="curation-title">
        {CURATIONS.title}
      </a>
      <div
        className="stack"
        data-focused={focus !== null}
        onMouseLeave={() => setFocus(null)}
      >
        {CURATIONS.items.map((item, i) => {
          const dist = focus === null ? 0 : Math.abs(i - focus);
          const isFocused = focus === i;
          return (
            <a
              key={item.title}
              href={CURATIONS.href}
              className={`stack-item${isFocused ? " is-focused" : ""}`}
              aria-label={item.title}
              onMouseEnter={() => setFocus(i)}
              onFocus={() => setFocus(i)}
              onBlur={() => setFocus(null)}
              style={
                {
                  zIndex: isFocused ? count + 1 : count - (focus === null ? i : dist),
                  "--i": i,
                  "--focus": focus ?? 0,
                  "--dist": dist,
                } as React.CSSProperties
              }
            >
              {isFocused && <span className="stack-tooltip">{item.title}</span>}
              <span className="stack-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" loading="lazy" draggable={false} />
              </span>
            </a>
          );
        })}
      </div>
      <div className="curation-more">
        <a href={CURATIONS.href}>see full list on curations →</a>
      </div>
    </div>
  );
};

export default CurationStack;
