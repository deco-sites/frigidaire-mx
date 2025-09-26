import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "../sections/Theme/Theme.tsx";
import { Context } from "@deco/deco";
export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();
  return (<>
    {/* Include default fonts and css vars */}
    <Theme colorScheme="any" />

    {/* Include Icons and manifest */}
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset(`/styles.css?revision=${revision}`)} rel="stylesheet" />

      {/* Fonts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-Book.otf")}) format("opentype");
                font-weight: 400;
                font-style: normal;
                font-display: swap;
              }

              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-Bold.otf")}) format("opentype");
                font-weight: 700;
                font-style: normal;
                font-display: swap;
              }

              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-BoldItalic.otf")
            }) format("opentype");
                font-weight: 700;
                font-style: italic;
                font-display: swap;
              }

              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-Black.otf")
            }) format("opentype");
                font-weight: 800;
                font-style: normal;
                font-display: swap;
              }

              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-BookItalic.otf")
            }) format("opentype");
                font-weight: 400;
                font-style: italic;
                font-display: swap;
              }

              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-LightItalic.otf")
            }) format("opentype");
                font-weight: 300;
                font-style: italic;
                font-display: swap;
              }

              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-Medium.otf")
            }) format("opentype");
                font-weight: 500;
                font-style: normal;
                font-display: swap;
              }

              @font-face {
                font-family: 'Gotham';
                src: url(${asset("/fonts/Gotham-Ultra.otf")
            }) format("opentype");
                font-weight: 900;
                font-style: normal;
                font-display: swap;
              }
            `,
        }}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
    </Head>

    {/* Rest of Preact tree */}
    <ctx.Component />
  </>);
});
