import React from "react";
import Link from "next/link";

function LoginForm() {
  return (
    <form method="post" className="form">
      <p>
        <label htmlFor="inpID">ID</label>
        <input type="text" id="inpID" placeholder="아이디" />
      </p>
      <p>
        <label htmlFor="inpPassword">Password</label>
        <input type="text" id="inpPassword" name="password" required />
      </p>
      <p>
        <Link href=".." type='button'>돌아가기</Link>
        <button type="submit">확인</button>
      </p>
    </form>
  );
}

export default LoginForm;
