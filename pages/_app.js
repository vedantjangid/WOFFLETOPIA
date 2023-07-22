import { useState } from "react";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0";
import { UserProvider as AtlasUserProvider } from "../context/UserContext";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>WOFFLETOPIA</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UserProvider>
        <AtlasUserProvider>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colors: {
                  brand: [
                    "#F4F7F7", // hightlight light
                    "#fff",
                    "#fff",
                    "#fff",
                    "#fff",
                    "#1F4E5F", // icon color dark
                    "#79A8A9", // btn-primary light
                    "#1F4E5F", // btn-hover light
                    "#00684A", // btn-primary dark
                    "#023430", // btn-hover, highlight dark
                  ],
                  // #00ED64, #00684A, #023430
                },
                primaryColor: "brand",
                colorScheme,
              }}
            >
              <NotificationsProvider>
                <Component {...pageProps} />
              </NotificationsProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </AtlasUserProvider>
      </UserProvider>
    </>
  );
}
