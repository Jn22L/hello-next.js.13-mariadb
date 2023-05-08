import Link from "next/link";
import queryPromise from "/app/lib/mariadb.js";
import { selectBoardList } from "/app/sql/nj-board-sql.js";
import ListItem from "./ListItem";

export const revalidate = 0;

export default async function Home() {
  let SQL = selectBoardList({ BOARD_ID: "NEXT" });
  let rows;
  try {
    rows = await queryPromise(SQL);
    console.log("DB쿼리성공:", rows);
  } catch (error) {
    console.log("DB쿼리에러:", error);
    console.error(error);
  }

  return (
    <div className="list-bg">
      <ListItem rows={rows} />
    </div>
  );
}
