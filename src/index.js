import Senators from "./data/senators";

export const republicans = () => {
  return Senators.filter((senator) => senator.party === "Republican");
};

export const democrats = () => {
  return Senators.filter((senator) => senator.party === "Democrat");
};

export const independents = () => {
  return Senators.filter((senator) => senator.party === "Independent");
};

export const males = () => {
  return Senators.filter((senator) => senator.person.gender === "male");
};

export const females = () => {
  return Senators.filter((senator) => senator.person.gender === "female");
};

export const byState = (state = "UT") => {
  return Senators.filter((senator) => senator.state === state);
};

export const mapping = () => {
  return Senators.map((senator) => ({
    firstName: senator.person.firstname,
    lastName: senator.person.lastname,
    party: senator.party,
    gender: senator.person.gender,
  }));
};

export const reducedCount = () => {
  const partyCounts = Senators.reduce(
    (accum, senator) => {
      if (senator.party === "Republican") {
        accum.republican++;
      } else if (senator.party === "Democrat") {
        accum.democrat++;
      } else {
        accum.independent++;
      }

      return accum;
    },
    {
      republican: 0,
      democrat: 0,
      independent: 0,
    }
  );
  return partyCounts;
};

const REPLACE_ME_WITH_CODE = false;
