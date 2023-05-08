import queryPromise from "/app/lib/mariadb.js";
import { insertBoard } from "/app/sql/nj-board-sql.js";
//import { authOptions } from "/pages/api/auth/[...nextauth].js";
//import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  //let session = await getServerSession(req, res, authOptions);
  //   if (session !== null) {
  //     req.body.author = session.user.email;
  //     req.body.complete = "N";
  //   }
  if (req.method == "POST") {
    console.log("신규.api:", req.body.title);

    let TITLE = req.body.title;
    let CONTENT = req.body.content;

    if (req.body.title === "") {
      return res.status(500).json({ resMsg: "제목을 입력해 주세요." });
    }
    if (req.body.content === "") {
      return res.status(500).json({ resMsg: "내용을 입력해 주세요." });
    }

    let SQL = insertBoard({ BOARD_ID: "NEXT", TITLE, CONTENT });
    let result;
    try {
      result = await queryPromise(SQL);
      return res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
