import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MyMovie</div>
      <nav>
        <ul>
          <li>
            <Link href="#">내 영화</Link>
          </li>
          <li>
            <Link href="#">커뮤니티</Link>
          </li>
          <li>
            <Link href="#">로그인</Link>
          </li>
          <li>
            <Link href="#">회원가입</Link>
          </li>
          <li>
            <Link href="#">검색</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
