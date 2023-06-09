const selectBoardList = function (param) {
  return `
    SELECT * FROM NJ_BOARD WHERE BOARD_ID='${param.BOARD_ID}'
  `;
};

const selectBoard = function (param) {
  return `
    SELECT * FROM NJ_BOARD WHERE BOARD_ID='${param.BOARD_ID}' AND SEQ=${param.SEQ}
  `;
};

const insertBoard = function (param) {
  return `
    INSERT INTO NJ_BOARD(BOARD_ID, TITLE, CONTENT)
    VALUES('${param.BOARD_ID}', '${param.TITLE}', '${param.CONTENT}');    
  `;
};

const updateBoard = function (param) {
  return `
    UPDATE NJ_BOARD
       SET TITLE   = '${param.TITLE}'
          ,CONTENT = '${param.CONTENT}'
     WHERE SEQ     = ${param.SEQ}
  `;
};

const deleteBoard = function (param) {
  return `
    DELETE FROM NJ_BOARD WHERE SEQ = ${param.SEQ}
  `;
};

export { selectBoardList, selectBoard, insertBoard, updateBoard, deleteBoard };
