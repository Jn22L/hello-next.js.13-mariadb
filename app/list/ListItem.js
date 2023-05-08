"use client";
import Link from "next/link.js";
import { fetchJson } from "/app/util/nj-common";
import dayjs from "dayjs";

export default async function ListItem({ rows }) {
  const spanStyle = { cursor: "pointer", display: "inline-block", width: "80%", textAlign: "right", }; // prettier-ignore
  let nowYYYYMMDD = dayjs().format("YYYYMMDD");

  function handleDelete(e, row) {
    if (!confirm("삭제 할까요?")) {
      return;
    }

    // DELETE method 가 안먹어서, POST 변경후 정상작동
    fetchJson("/api/post/delete", { method: "POST", body: JSON.stringify({ SEQ: row.SEQ }) })
      .then((json) => {
        alert(json.resMsg);
        e.target.parentElement.style.opacity = 0;
        setTimeout(() => {
          e.target.parentElement.style.display = "none";
        }, 1000);
      })
      .catch((error) => {
        console.log("삭제실패", error);
        //alert(JSON.parse(error.message).resMsg);
      });
  }

  //   function handleCompleteOnClick(e, row) {
  //     if (e.target.dataset.complete === "N") {
  //       e.target.parentElement.style.background = "#FFA500";
  //       e.target.dataset.complete = nowYYYYMMDD;
  //     } else {
  //       e.target.parentElement.style.background = "white";
  //       e.target.dataset.complete = "N";
  //     }

  //     fetchJson("/api/post/complete", { method: "POST", cache: "no-store", body: JSON.stringify({ _id: row._id, complete: e.target.dataset.complete }) })
  //       .then((json) => {
  //         console.log("OK", json);
  //       })
  //       .catch((error) => {
  //         console.log("Error", error);
  //       });
  //   }

  return (
    <div>
      {rows.map((row, idx) => (
        <div className="list-item" key={row.SEQ}>
          <Link href={"/detail/" + row.SEQ}>
            <h4>{row.TITLE}</h4>
          </Link>
          <Link href={"/edit/" + row.SEQ}>✏️</Link>
          <span style={{ cursor: "pointer" }} onClick={(e) => handleDelete(e, row)}>
            🗑️
          </span>
          <span data-complete={row.complete}>✔️</span>
          <p>{row.CONTENT}</p>
        </div>
      ))}
    </div>
  );
}
