// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
          rel="stylesheet"
        />
        {/* Netlify Widget */}
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `,
          }}
        />
      </body>
    </Html>
  );
}
