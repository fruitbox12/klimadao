import { GetStaticProps } from "next";
import { Infinity } from "components/pages/Infinity";
import { loadTranslation } from "lib/i18n";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale);
  return {
    props: {
      translation,
      fixedThemeName: "theme-dark",
    },
  };
};

export default Infinity;
