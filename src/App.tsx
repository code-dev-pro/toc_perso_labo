import { useEffect, useState } from "react";
import communication from "./communication/communication";
import { ICollection } from "./interface/interface";
import SidebarLayout from "./layout/sidebarLayout";
import ContentLayout from "./layout/contentLayout";
import useElementHeight from "./hooks/useElementHeight";
import useWindowSize from "./hooks/useWindowSize";
import { BREAKPOINT_MOBILE } from "./constants";
import { RecoilRoot } from "recoil";
import { version } from "../package.json";
import SkeletonLoader from "./components/preloader/skeletonLoader";
function App() {
  // HOOKS
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const documentHeight = useElementHeight(document.documentElement);

  const { width } = useWindowSize();
  // STATES
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const [isCommunicationInitialized, setIsCommunicationInitialized] =
    useState<boolean>(false);
  const [isLoad, setisLoad] = useState<boolean>(true);
  const [toc, setToc] = useState({ level: "", grade: "", subject: "" });
  const [collection, setCollection] = useState<ICollection>({
    type: "",
    data: {
      chapters: [],
      id: 0,
      lessons: [],
      mAuthorId: 0,
      userId: 0,
      userName: "",
      isAdaptive: false,
    },
  });
  const _window = window as any;
  const _level = _window.level ? _window.level : "";
  const _subject = _window.subject ? _window.subject : "";
  const _grade = _window.grade ? _window.grade : "";
  const [collectionID, setCollectionID] = useState<number>(0);

  // FUNCTIONS
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // EFFECTS
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  useEffect(() => {
    const fetchCollection = () => {
      document.body.classList.add(_window.level);
      communication.init().then((isAuth: boolean) => {
        if (isAuth) {
          communication
            .requestCollectionId()
            .then((data: any) => {
              setCollectionID(data?.data?.collectionId);
              communication
                .requestCollectionDataWithFlags(data?.data?.collectionId)
                .then((collection: any) => {
                  setCollection(collection);
                  console.log("communication", collection);
                  setIsCommunicationInitialized(true);
                  document?.body?.classList.remove("loader");
                  setisLoad(false);
                })
                .catch((error: string) => {
                  console.error("ERROR", error);
                });
            })
            .catch((error: string) => {
              console.error("ERROR", error);
            });
        }
      });
    };
    fetchCollection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isCommunicationInitialized) {
      communication.updateIFrameHeight(documentHeight);
    }
  }, [documentHeight, isCommunicationInitialized]);

  useEffect(() => {
    setToc({ grade: _grade, subject: _subject, level: _level });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // RETURN
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  return isLoad ? (
    <SkeletonLoader toc={toc} width={width} />
  ) : (
    <RecoilRoot>
      <div
        style={{
          fontSize: 8,
          padding: 5,
          opacity: 0.5,
          position: "fixed",
          bottom: 0,
          right: 0,
          color: "black",
        }}
      >
        Version {version}
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: `${
            width < BREAKPOINT_MOBILE ? "column-reverse" : "row"
          }`,
        }}
        className="App w1200"
      >
        <div
          className="toc--layout-main"
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
          <ContentLayout
            id={collectionID}
            isAdaptive={collection.data.isAdaptive}
            level={toc.level}
            datas={collection.data}
          />
        </div>

        <div
          className="toc--layout-sidebar"
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
              maxWidth: `${
                width < BREAKPOINT_MOBILE
                  ? "100%"
                  : toc.level === "primaire"
                  ? "280px"
                  : "280px"
              }`,
            }}
          >
            <SidebarLayout
              datas={collection.data}
              setVisible={() => void 0}
              width={width}
              subject={toc.subject}
              level={toc.level}
              grade={toc.grade}
              isAdaptive={collection.data.isAdaptive}
            />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
