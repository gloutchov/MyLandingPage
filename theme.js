(() => {
  const storageKey = "glauco-site-theme";
  const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const root = document.documentElement;

  const readStoredTheme = () => {
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
    } catch {
      return null;
    }
  };

  const getSystemTheme = () => (darkThemeQuery.matches ? "dark" : "light");

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    const themeColor = theme === "dark" ? "#101815" : "#f5f3ec";
    document.querySelector("#theme-color-meta")?.setAttribute("content", themeColor);

    document.querySelectorAll("[data-theme-icon]").forEach((icon) => {
      icon.textContent = theme === "dark" ? "☀" : "☾";
    });

    const labelKey = theme === "dark" ? "theme.useLight" : "theme.useDark";
    const fallbackLabel = theme === "dark" ? "Attiva il tema chiaro" : "Attiva il tema scuro";
    const translatedLabel = window.siteI18n?.translate(labelKey) ?? fallbackLabel;

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", translatedLabel);
      button.setAttribute("aria-pressed", String(theme === "dark"));
    });

    document.querySelectorAll("[data-theme-label]").forEach((label) => {
      label.textContent = translatedLabel;
    });
  };

  const persistTheme = (theme) => {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // The theme still changes when storage is unavailable.
    }
  };

  applyTheme(readStoredTheme() ?? getSystemTheme());

  const initializeControls = () => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        persistTheme(nextTheme);
      });
    });

    window.addEventListener("site-language-change", () => applyTheme(root.dataset.theme));
    applyTheme(root.dataset.theme ?? getSystemTheme());
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeControls, { once: true });
  } else {
    initializeControls();
  }

  const handleSystemThemeChange = () => {
    if (!readStoredTheme()) applyTheme(getSystemTheme());
  };

  if (typeof darkThemeQuery.addEventListener === "function") {
    darkThemeQuery.addEventListener("change", handleSystemThemeChange);
  } else {
    darkThemeQuery.addListener(handleSystemThemeChange);
  }
})();
