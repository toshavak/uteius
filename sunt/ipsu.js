function getDirectionValue(direction) {
  const directionMap = {
    "left": "0",
    "right": "1"
  };
  return directionMap[direction] || "-1";
}
