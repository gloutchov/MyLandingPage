(() => {
  const storageKey = "glauco-site-language";
  const supportedLanguages = ["it", "en"];
  const translations = window.siteTranslations ?? {};

  const readStoredLanguage = () => {
    try {
      const storedLanguage = window.localStorage.getItem(storageKey);
      return supportedLanguages.includes(storedLanguage) ? storedLanguage : null;
    } catch {
      return null;
    }
  };

  const detectLanguage = () => {
    const storedLanguage = readStoredLanguage();
    if (storedLanguage) return storedLanguage;

    return navigator.language?.toLowerCase().startsWith("it") ? "it" : "en";
  };

  const translate = (key, language = document.documentElement.lang) =>
    translations[language]?.[key] ?? translations.it?.[key] ?? key;

  const applyLanguage = (language, persist = false) => {
    const nextLanguage = supportedLanguages.includes(language) ? language : "it";
    document.documentElement.lang = nextLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n, nextLanguage);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = translate(element.dataset.i18nHtml, nextLanguage);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel, nextLanguage));
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      element.setAttribute("content", translate(element.dataset.i18nContent, nextLanguage));
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === nextLanguage));
    });

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, nextLanguage);
      } catch {
        // The language still changes when storage is unavailable.
      }
    }

    window.dispatchEvent(
      new CustomEvent("site-language-change", { detail: { language: nextLanguage } }),
    );
  };

  window.siteI18n = Object.freeze({
    getLanguage: () => document.documentElement.lang,
    setLanguage: (language) => applyLanguage(language, true),
    translate,
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  window.addEventListener("storage", (event) => {
    if (event.key === storageKey && supportedLanguages.includes(event.newValue)) {
      applyLanguage(event.newValue);
    }
  });

  applyLanguage(detectLanguage());
})();
