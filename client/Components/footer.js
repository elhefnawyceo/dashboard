// styles
import Link from "next/link";
import style from "../style/footer.module.css";

// primerreact
import { Button } from "primereact/button";

export default function Home() {
  return (
    <>
      <div className={style.colored_div}>
        <div
          style={{
            paddingTop: "150px",
            textAlign: "center",
          }}
        >
          <p className={style.welcomingFooter}>
            هتقدر تعرف تحاليل وتفاصيل أكثر عن المنصه <br />
            لما تعمل تسجيل دخول او إنشاء حساب
          </p>

          <Link href='/login'>
            <Button
              icon="pi pi-user"
              rounded
              text
              raised
              severity="info"
              aria-label="User"
              style={{
                backgroundColor: "#3FB1F2",
                color: "#222A41",
                marginTop: "50px",
              }}
              label="تسجيل دخول"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
