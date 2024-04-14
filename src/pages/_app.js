import Header from "@/components/header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Toaster } from "react-hot-toast";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon, avalancheFuji } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [polygon, avalancheFuji],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "P2P CARPOOLING",
  projectId: "9d76ee4cef7c5b8d16e72986446c7841",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} modalSize="compact">
          <Header>
            <Component {...pageProps} />
            <Toaster />
          </Header>
        </RainbowKitProvider>
      </WagmiConfig>
    </SessionProvider>
  );
}
