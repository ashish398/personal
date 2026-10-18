"use client";
import { useEffect, useState } from "react";

const THEMES = [
  { id: "classic", label: "Classic" },
  { id: "pbd", label: "Pale Blue Dot" },
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("classic");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "pbd" ? "pbd" : "classic");
  }, []);

  const choose = (id: string) => {
    setTheme(id);
    if (id === "classic") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem("theme", id);
    } catch {}
  };

  return (
    <div className="themes" role="group" aria-label="Theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`theme-btn theme-btn--${t.id}`}
          title={t.label}
          aria-label={t.label}
          aria-pressed={theme === t.id}
          onClick={() => choose(t.id)}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
