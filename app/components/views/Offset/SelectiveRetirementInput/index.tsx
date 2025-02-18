import React, { ChangeEvent, FC } from "react";
import { utils } from "ethers";
import { t } from "@lingui/macro";

import * as styles from "./styles";

type Props = {
  projectAddress: string;
  setProjectAddress: (val: string) => void;
};

export const SelectiveRetirementInput: FC<Props> = (props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.setProjectAddress(e.target.value);

  return (
    <input
      className={styles.input}
      value={props.projectAddress}
      onChange={handleChange}
      placeholder={t({
        id: "offset.enter_address",
        message: "Enter 0x address",
      })}
      data-error={
        !!props.projectAddress && !utils.isAddress(props.projectAddress)
      }
      pattern="^0x[a-fA-F0-9]{40}$"
    />
  );
};
