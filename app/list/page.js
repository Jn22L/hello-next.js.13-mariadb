import Link from "next/link";
import queryPromise from "/app/lib/mariadb.js";
import { selectBoardList } from "/app/sql/nj-board-sql.js";
import ListItem from "./ListItem";

export const revalidate = 10;

export default async function Home() {
  let SQL = selectBoardList({ BOARD_ID: "NEXT" });
  let rows, result;
  try {
    rows = await queryPromise(SQL);
    result = JSON.parse(JSON.stringify(rows));
  } catch (error) {
    console.error(error);
  }

  //console.log("서버:", result);

  return (
    <div className="list-bg">
      <ListItem rows={result} />
    </div>
  );
}
