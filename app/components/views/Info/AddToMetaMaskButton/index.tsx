import React, { FC } from "react";
import { providers } from "ethers";
import * as styles from "./styles";

import { AddressInfo } from "..";

interface Props {
  info: AddressInfo;
  provider: providers.Web3Provider;
}

const AddToMetaMaskButton: FC<Props> = (props) => {
  const { provider } = props.provider;
  const { info } = props;
  const handleAddToMetaMask = async () => {
    try {
      await provider.request?.({
        method: "wallet_watchAsset",
        params: {
          // @ts-expect-error: complaining that it wants type Any[] for options
          // but heres the interface https://docs.metamask.io/guide/rpc-api.html#wallet-watchasset
          type: "ERC20",
          options: {
            address: info.address,
            symbol: info.ticker,
            image: info.image,
            decimals: info.decimals,
          },
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <button
      aria-label={info.ariaLabel}
      onClick={handleAddToMetaMask}
      className={styles.addToMetaMaskButton}
    >
      <img alt={info.ariaLabel} src="/metamask-fox.svg" />
    </button>
  );
};

export default AddToMetaMaskButton;
