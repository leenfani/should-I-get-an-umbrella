import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function useLanguage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = isAr ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.body.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [isAr, i18n.language]);

  useEffect(() => {
    document.title = t("title");
  }, [t, isAr]);

  return {
    t,
    toggleLanguage,
    isAr,
  };
}
