import litentry from "./litentry";
import statemine from "./statemine";
import statemint from "./statemint";
import westmint from "./westmint";
import litmus from "./litmus";
import westendCollectives from "./westendCollectives";
import collectives from "./collectives";
import kusama from "./kusama";
import polkadot from "./polkadot";
import fire from "./fire";

const chains = {
  kusama,
  polkadot,
  litentry,
  litmus,
  statemine,
  statemint,
  westmint,
  fire,
  "westend-collectives": westendCollectives,
  collectives,
};

export default chains;
