import queryPromise from "/app/lib/mariadb.js";
import { deleteBoard } from "/app/sql/nj-board-sql.js";
//import { authOptions } from "/pages/api/auth/[...nextauth].js";
//import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  //let session = await getServerSession(req, res, authOptions);
  //   if (session !== null) {
  //     req.body.author = session.user.email;
  //     req.body.complete = "N";
  //   }
  console.log("삭제 api req.body:", JSON.parse(req.body));

  if (req.method == "POST") {
    const param = JSON.parse(req.body);
    console.log("삭제 param SEQ:", param.SEQ);
    let SQL = deleteBoard({ BOARD_ID: "NEXT", SEQ: param.SEQ });
    console.log("삭제api SQL:", SQL);
    let result;
    try {
      result = await queryPromise(SQL);
      return res.status(200).json({ resMsg: "삭제완료 하였습니다." });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
