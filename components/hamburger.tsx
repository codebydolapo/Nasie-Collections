export const line1 = {
  width: "80%",
  height: "3px",
  background: "white",
  transform: "rotate(45deg)",
  transformOrigin: "left",
  transition: "all ease 500ms",
};

export const line2 = {
  opacity: 0,
  transition: "all ease 500ms",
};

export const line3 = {
  width: "80%",
  height: "3px",
  background: "white",
  transform: "rotate(-45deg)",
  transformOrigin: "left",
  transition: "all ease 500ms",
};

export const linePassive = {
  width: "90%",
  height: "3px",
  background: "white",
  transition: "all ease 500ms",
};

export const menuActiveStyle = {
  width: "300px",
  height: "calc(100vh- 70px)",
  position: "fixed",
  right: 0,
  bottom: 0,
  background: "black",
  zIndex: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "all 500ms ease",
  //border: '1px solid white'
};

export const menuInactiveStyle = {
  width: "300px",
  height: "calc(100vh - 70px)",
  position: "fixed",
  background: "black",
  zIndex: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  right: "-300px",
  bottom: 0,
  transition: "all 500ms ease",
};
