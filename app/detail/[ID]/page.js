import queryPromise from "/app/lib/mariadb.js";
import { selectBoard } from "/app/sql/nj-board-sql.js";
export default async function Detail({ params }) {
  let SQL = selectBoard({ BOARD_ID: "NEXT", SEQ: params.ID });
  let rows;
  try {
    rows = await queryPromise(SQL);
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
      <h4>상세페이지</h4>
      {rows.map((row, idx) => (
        <div key={row.SEQ}>
          <h4>{row.TITLE}</h4>
          <p>{row.CONTENT}</p>
        </div>
      ))}
    </div>
  );
}
