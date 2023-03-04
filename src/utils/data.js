export const dataTypes = [
  {
    label: "Pre Election",
    value: "Pre Election",
  },
  {
    label: "Election Day Live Updates",
    value: "Election Day Live Updates",
  },
  {
    label: "Post-Election Analysis",
    value: "Post-Election Analysis",
  },
]

export const electionLevels = [
  {
    label: "Presidential",
    value: "Presidential",
  },
  {
    label: "Gubernatorial",
    value: "Gubernatorial",
  },
  {
    label: "Senate",
    value: "Senate",
  },
  {
    label: "House of Representatives",
    value: "House of Representatives",
  },
]

export const electionYears = [
  {
    label: "2023",
    value: "2023",
  },
  {
    label: "2019",
    value: "2019",
  },
  {
    label: "2015",
    value: "2015",
  },
  {
    label: "2011",
    value: "2011",
  },
  {
    label: "2007",
    value: "2007",
  },
  {
    label: "2003",
    value: "2003",
  },
  {
    label: "1999",
    value: "1999",
  },
  {
    label: "1995",
    value: "1995",
  },
  {
    label: "1991",
    value: "1991",
  },
  {
    label: "1987",
    value: "1987",
  },
  {
    label: "1983",
    value: "1983",
  },
  {
    label: "1979",
    value: "1979",
  },
  {
    label: "1975",
    value: "1975",
  },
  {
    label: "1971",
    value: "1971",
  },
  {
    label: "1967",
    value: "1967",
  },
  {
    label: "1963",
    value: "1963",
  },
  {
    label: "1959",
    value: "1959",
  },
]

export const parties = [
  {
    color: "#64CCFF",
    name: "APC",
  },
  {
    color: "#0AA83F",
    name: "LP",
  },
  {
    color: "#D62B3C",
    name: "PDP",
  },
]

export const geoDataByParty = [
  ["State", "Party"],
  ["Abia", { v: 2, f: "LP" }],
  ["Adamawa", { v: 3, f: "PDP" }],
  ["Akwa Ibom", { v: 2, f: "LP" }],
  ["Anambra", { v: 2, f: "LP" }],
  ["Bauchi", { v: 1, f: "APC" }],
  ["Bayelsa", { v: 2, f: "LP" }],
  ["Benue", { v: 2, f: "LP" }],
  ["Borno", { v: 2, f: "LP" }],
  ["Cross River", { v: 2, f: "LP" }],
  ["Delta", { v: 2, f: "LP" }],
  ["Ebonyi", { v: 2, f: "LP" }],
  ["Edo", { v: 2, f: "LP" }],
  ["Ekiti", { v: 2, f: "LP" }],
  ["Enugu", { v: 2, f: "LP" }],
  ["Gombe", { v: 3, f: "PDP" }],
  ["Imo", { v: 2, f: "LP" }],
  ["Jigawa", { v: null, f: "Other" }],
  ["Kaduna", { v: 1, f: "APC" }],
  ["Kano", { v: 1, f: "APC" }],
  ["Katsina", { v: 1, f: "APC" }],
  ["Kebbi", { v: 1, f: "APC" }],
  ["Kogi", { v: 2, f: "LP" }],
  ["Kwara", { v: 2, f: "LP" }],
  ["Lagos", { v: 1, f: "APC" }],
  ["Nassarawa", { v: 1, f: "APC" }],
  ["Niger", { v: 1, f: "APC" }],
  ["Ogun", { v: 1, f: "APC" }],
  ["Ondo", { v: 2, f: "LP" }],
  ["Osun", { v: 1, f: "APC" }],
  ["Oyo", { v: 1, f: "APC" }],
  ["Plateau", { v: 1, f: "APC" }],
  ["Rivers", { v: 2, f: "LP" }],
  ["Sokoto", { v: 1, f: "APC" }],
  ["Taraba", { v: 3, f: "PDP" }],
  ["Yobe", { v: 1, f: "APC" }],
  ["Zamfara", { v: 1, f: "APC" }],
  ["Federal Capital", { v: 1, f: "APC" }],
]

export const geoDataByZone = [
  ["State", "Zone"],
  ["Abia", { v: 6, f: "South East" }],
  ["Adamawa", { v: 1, f: "North East" }],
  ["Akwa Ibom", { v: 5, f: "South South" }],
  ["Anambra", { v: 6, f: "South East" }],
  ["Bauchi", { v: 1, f: "North East" }],
  ["Bayelsa", { v: 5, f: "South South" }],
  ["Benue", { v: 3, f: "North Central" }],
  ["Borno", { v: 1, f: "North East" }],
  ["Cross River", { v: 5, f: "South South" }],
  ["Delta", { v: 5, f: "South South" }],
  ["Ebonyi", { v: 6, f: "South East" }],
  ["Edo", { v: 5, f: "South South" }],
  ["Ekiti", { v: 4, f: "South West" }],
  ["Enugu", { v: 6, f: "South East" }],
  ["Gombe", { v: 1, f: "North East" }],
  ["Imo", { v: 6, f: "South East" }],
  ["Jigawa", { v: 2, f: "North West" }],
  ["Kaduna", { v: 2, f: "North West" }],
  ["Kano", { v: 2, f: "North West" }],
  ["Katsina", { v: 2, f: "North West" }],
  ["Kebbi", { v: 2, f: "North West" }],
  ["Kogi", { v: 3, f: "North Central" }],
  ["Kwara", { v: 3, f: "North Central" }],
  ["Lagos", { v: 4, f: "South West" }],
  ["Nassarawa", { v: 3, f: "North Central" }],
  ["Niger", { v: 3, f: "North Central" }],
  ["Ogun", { v: 4, f: "South West" }],
  ["Ondo", { v: 4, f: "South West" }],
  ["Osun", { v: 4, f: "South West" }],
  ["Oyo", { v: 4, f: "South West" }],
  ["Plateau", { v: 3, f: "North Central" }],
  ["Rivers", { v: 5, f: "South South" }],
  ["Sokoto", { v: 2, f: "North West" }],
  ["Taraba", { v: 1, f: "North East" }],
  ["Yobe", { v: 1, f: "North East" }],
  ["Zamfara", { v: 2, f: "North West" }],
  ["Federal Capital", { v: 3, f: "North Central" }],
]

export const geoZones = [
  {
    color: "#449352",
    zone: "North East",
    votes: 3000,
  },
  {
    color: "#6D769D",
    zone: "North West",
    votes: 3000,
  },
  {
    color: "#A163BE",
    zone: "North Central",
    votes: 3000,
  },
  {
    color: "#E30325",
    zone: "South West",
    votes: 3000,
  },
  {
    color: "#2249D1",
    zone: "South South",
    votes: 3000,
  },
  {
    color: "#018796",
    zone: "South East",
    votes: 3000,
  },
]
