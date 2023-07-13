"use client";

// importsPrivate
import LineStylesDemo from "../components/chart";
import Footer from "../components/footer";

// importsPuplic
import { ScrollTop } from "primereact/scrolltop";

// styles
import style from "../style/homeDashboard.module.css";

// icons
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import Diversity3Icon from "@mui/icons-material/Diversity3";
// import TurnSlightRightIcon from "@mui/icons-material/TurnSlightRight";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <div className={style.divheader}>
            <p className={style.logo}>Elhefnawy</p>

            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <RoomServiceIcon/>   */}
              <p className={style.login}>تسجيل الدخول</p>
            </div>
          </div>

          <div className={style.parentcards}>
            <div className={style.card}>
              <LineStylesDemo
                backgroundColor="#FFC9C2"
                borderColor="#E58474"
                data={[7, 6, 8, 6, 5, 6, 5, 10, 9, 7]}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div style={{ width: "100px" }}>
                  {/* <YouTubeIcon className={style.iconcard} /> */}
                </div>
                <div>
                  <p className={style.titlecard}> الدروس</p>
                  <p className={style.numbercard}>5 6 4</p>
                </div>
              </div>
            </div>

            <div className={style.card}>
              <LineStylesDemo
                backgroundColor="#FFE8C5"
                borderColor="#FFCA87"
                data={[7, 6, 8, 6, 5, 6, 5, 10, 9, 7]}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div style={{ width: "100px" }}>
                  {/* <LibraryBooksIcon
                    className={style.iconcard}
                    style={{ color: "#FDBB5B", backgroundColor: "#FFF4E7" }}
                  /> */}
                </div>
                <div>
                  <p className={style.titlecard}> الكورسات</p>
                  <p className={style.numbercard}>1 0 1</p>
                </div>
              </div>
            </div>

            <div className={style.card}>
              <LineStylesDemo
                backgroundColor="#D6F3DC"
                borderColor="#A1E9AE"
                data={[7, 6, 8, 6, 5, 6, 5, 10, 9, 7]}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div style={{ width: "100px" }}>
                  {/* <Diversity3Icon
                    className={style.iconcard}
                    style={{ color: "#76D98A", backgroundColor: "#E6FBE9" }}
                  /> */}
                </div>
                <div>
                  <p className={style.titlecard}> الطلاب</p>
                  <p className={style.numbercard}>1 6 4 0</p>
                </div>
              </div>
            </div>

            <div className={style.card}>
              <LineStylesDemo
                backgroundColor="#BCEBF9"
                borderColor="#56C9DE"
                data={[7, 6, 8, 6, 5, 6, 5, 10, 9, 7]}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div style={{ width: "100px" }}>
                  {/* <TurnSlightRightIcon
                    className={style.iconcard}
                    style={{ color: "#41C4E7", backgroundColor: "#E1F7FB" }}
                  /> */}
                </div>
                <div>
                  <p className={style.titlecard}>معدل المشاركة</p>
                  <p className={style.numbercard}>1 6 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollTop
          threshold={50}
          className="w-2rem h-2rem border-round bg-primary"
          icon="pi pi-arrow-up text-base"
        />

        <Footer />
      </div>
    </>
  );
}
