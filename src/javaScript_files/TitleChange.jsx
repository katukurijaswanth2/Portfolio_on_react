import { useEffect } from "react";

export const TitleChange = () => {
  useEffect(() => {
    const originalTitle = document.title;

    const handleBlur = () => {
      document.title = "📨 you still have more here.";
    };

    const handleFocus = () => {
      document.title = originalTitle;
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
};

