// const size = {
//   sm: "576px",
//   md: "768px",
//   lg: "992px",
//   xlg: "1200px",
//   xxlg: "1400px",
// };

// export default {
//   sm: `(min-width: ${size.sm})`,
//   md: `(min-width: ${size.md})`,
//   lg: `(min-width: ${size.lg})`,
//   xlg: `(min-width: ${size.xlg})`,
//   xxlg: `(min-width: ${size.xxlg})`,
// };

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
