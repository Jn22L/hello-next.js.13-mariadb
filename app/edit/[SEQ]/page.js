import queryPromise from "/app/lib/mariadb.js";
import { selectBoard } from "/app/sql/nj-board-sql.js";

export default async function Edit({ params }) {
  console.log("수정params", params);
  let SQL = selectBoard({ BOARD_ID: "NEXT", SEQ: params.SEQ });
  let rows;
  try {
    rows = await queryPromise(SQL);
    console.log("DB쿼리성공:", rows);
  } catch (error) {
    console.log("DB쿼리에러:", error);
  }
  return (
    <div className="p-20">
      <h4>글수정</h4>
      <form action="/api/post/edit" method="POST">
        <input name="SEQ" defaultValue={params.SEQ}></input>
        <input name="TITLE" defaultValue={rows[0].TITLE}></input>
        <input name="CONTENT" defaultValue={rows[0].CONTENT}></input>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
