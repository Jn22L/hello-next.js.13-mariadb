const selectBoard = function (param) {
  return `
    SELECT * FROM NJ_BOARD WHERE BOARD_ID='${param.BOARD_ID}'
  `;
};

export { selectBoard };
