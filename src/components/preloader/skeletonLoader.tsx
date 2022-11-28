import { BREAKPOINT_MOBILE } from "../../constants";
import Loader from "../loader";
import Skeleton from "../skeleton";

// FC SkeletonLoader
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const SkeletonLoader = ({
  toc,
  width,
}: {
  toc: { level: string; grade: string; subject: string };
  width: number;
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: 1500,
        flexDirection: `${
          width < BREAKPOINT_MOBILE ? "column-reverse" : "row"
        }`,
      }}
      className="App w1200"
    >
      <div
        className="toc--layout-main loader"
        role="main"
        style={{
          width: `${
            width < BREAKPOINT_MOBILE
              ? "100%"
              : toc.level === "primaire"
              ? "100%"
              : "100%"
          }`,
        }}
      >
        <div className="toc--layout-main-header">
          <div className="toc--layout-main-header__item" />
          <div className="toc--layout-main-header__item" />
          <div className="toc--layout-main-header__item" />
        </div>
        <div className="toc--bloc-toc__loader">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Skeleton type="text-lg" />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Skeleton type="text-xl" />
            <Skeleton type="text-smm" />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
          <Skeleton type="text-lg" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Skeleton type="text-xl" />
            <Skeleton type="text-smm" />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
          <Skeleton type="text-lg" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Skeleton type="text-xl" />
            <Skeleton type="text-smm" />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
        </div>
      </div>

      <div
        className="toc--layout-sidebar loader"
        style={{
          width: `${
            width < BREAKPOINT_MOBILE
              ? "100%"
              : toc.level === "primaire"
              ? "280px"
              : "280px"
          }`,
        }}
      >
        <div
          className="toc--layout-sidebar-container"
          style={{
            backgroundColor: "#ffffff",
            maxWidth: `${
              width < BREAKPOINT_MOBILE
                ? "100%"
                : toc.level === "primaire"
                ? "280px"
                : "280px"
            }`,
          }}
        >
          <div>
            <div
              style={{ position: "relative" }}
              className="toc--layout-sidebar-container__content"
            >
              <Skeleton type="text-lg" />
              <div
                style={{
                  position: "relative",
                  top: 30,
                  left: 30,
                  width: "100%",
                }}
              >
                <Skeleton type="text-md" />
                <Skeleton type="text-sm" />
              </div>

              <div className="shimmer-wrapper">
                <div className="shimmer"></div>
              </div>
            </div>
            <div className="toc--layout-sidebar-container__content">
              <Skeleton type="text-lg" />
              <div
                style={{
                  position: "relative",
                  top: 30,
                  left: 30,
                  width: "100%",
                }}
              >
                <Skeleton type="text-md" />
                <Skeleton type="text-sm" />
              </div>
              <div className="shimmer-wrapper">
                <div className="shimmer"></div>
              </div>
            </div>
            <div className="toc--layout-sidebar-container__content">
              <Skeleton type="text-lg" />
              <div
                style={{
                  position: "relative",
                  top: 30,
                  left: 30,
                  width: "100%",
                }}
              >
                <Skeleton type="text-md" />
                <Skeleton type="text-sm" />
              </div>
              <div className="shimmer-wrapper">
                <div className="shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
