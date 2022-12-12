import React, { useCallback, useEffect, useRef, useState } from "react";
import communication from "../communication/communication";
import { IS_TE_TOCA_LENGUA } from "../constants";
import { ILesson, ILevels } from "../interface/interface";
import { getProgression, isLocalStorageAvailable, reoderTitle } from "../utils";
import CircleProgress from "../components/circleProgress";
// FC TocRenderProgression
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const TocRenderProgression = ({
  lesson,
  isAdaptive,
}: {
  lesson: any;
  isAdaptive: boolean;
}) => {
  return (
    <div className="toc--layout-main--toc_title_chapters_type">
      <div className="toc--layout-main--toc_title_chapter_notion">
        <p
          style={{ backgroundImage: `url(./assets/images/header.svg)` }}
          className={`${
            lesson.title.toLowerCase() === "avant de commencer"
              ? "toc--layout-main--toc_title_chapter_notion_title part big"
              : "toc--layout-main--toc_title_chapter_notion_title part"
          }`}
        >
          <span>{lesson.title}</span>
        </p>
      </div>
    {  lesson.title.toLowerCase() === "ressources" || lesson.title.toLowerCase() === "prise en main de la plateforme" ? <></> : <GenerateWheel isAdaptive={isAdaptive} lesson={lesson} />}
    </div>
  );
};
// FC GenerateWheel
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const GenerateWheel = ({
  lesson,
  isAdaptive,
}: {
  lesson: any;
  isAdaptive: boolean;
}) => {
  const getTotalScoreLesson = (datas: any) => {
    let _total = 0;
    let _cumul = 0;
    datas.lessons.forEach((item: any) => {
      if (item.isUnlocked) {
        _cumul += 1;
        _total += item.score;
      }
    });

    const _collectionLgt = _cumul; 

    return Math.round(_total / _collectionLgt);
  };

  const getTotalProgress = (datas: any) => {
    if (isAdaptive) {
      return getProgression(datas);
      //
    } else {
      let _total = 0;
      datas.lessons.forEach((item: any) => {
        if (item.time > 1 && (item?.isUnlocked || item?.isUnlocked === null)) {
          _total += 1;
        }
      });
      const _collectionLgt = datas.lessons.length;
      return Math.round((_total / _collectionLgt) * 100);
    }
  };

  const _total = getTotalProgress(lesson);
  const _score = getTotalScoreLesson(lesson);


  return lesson.lessons.length > 0 ? (
    <div className="toc--layout-main_progress">
      <div
        style={{
          position: "relative",
          marginTop: 5,
        }}
      >
        <p className="toc--layout-main--toc_progress_notion">{_total + "%"}</p>
        <CircleProgress progress={100 - _total} />
      </div>
      {IS_TE_TOCA_LENGUA && (
        <div
          style={{ backgroundImage: `url(./assets/images/lab.svg)` }}
          className="toc--layout-main--indicator--score"
        >
          {`${Math.round(_score / 5)}/20`}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
// FC TocRenderUniqueLevel
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const TocRenderUniqueLevel = ({
  part,
  level,
  title,
  lgt,
}: {
  part: any;
  level: string;
  title: string;
  lgt?: number;
}) => {
  

  var url =
    window.location !== window.parent.location
      ? document.location.ancestorOrigins
        ? document.location.ancestorOrigins[0]
        : document.referrer
      : document.location.href;

  return (
    <div className="toc--layout-main--toc_title_chapters_type wheel">
      {part.lessons.length > 0 ? (
        part.lessons?.map((lesson: ILesson) => {
          return (
            <div
              onClick={() => {
                communication.requestOpenLesson(lesson.id);
              }}
              key={lesson.id}
              className={`toc--layout-main--toc_title_chapter_name ${
                lesson?.isUnlocked || lesson?.isUnlocked === null
                  ? ""
                  : "filterGray"
              }`}
            >
              <img
                width={level === "primaire" ? 110 : 98}
                height={level === "primaire" ? 85 : "auto"}
                alt=""
                src={url + lesson.icon}
              />

              <p className="toc--layout-main--toc_title_chapter_notion_title">
                {lesson.name}
              </p>
            </div>
          );
        })
      ) : title === "Je manipule pour mieux comprendre" ? (
        <p style={{ padding: 20 }}>
          Tu dois commencer par J'observe et je comprends pour débloquer le
          reste du parcours.
        </p>
      ) : title === "Je mets en œuvre" && lgt === 0 ? (
        <p style={{ padding: 20 }}>
          Tu n'as pas fait toutes les leçons nécessaires pour débloquer cette
          partie.
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
// FC Toc
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const Toc = ({
  datasChapters,
  level,
  isAdaptive,
  id,
}: {
  datasChapters: any;
  level: string;
  isAdaptive: boolean;
  id: number;
}) => {
 
  
  const ref = useRef<string>("-1");
  const [state, setstate] = useState<Array<string>>([]);

 
  const manageRefOpen = useCallback(
    (str) => {
      if (state.includes(str)) {
        const _clone = [...state];
        _clone.forEach((item, index) => {
          if (item === str) {
            _clone.splice(index, 1);
          }
        });
        if (isLocalStorageAvailable()) {
          localStorage?.setItem("state", _clone[_clone.length - 1]);
        }

        setstate(_clone);
      } else {
        const _result = [...state, str];
        if (isLocalStorageAvailable()) {
          localStorage?.setItem("state", _result[_result.length - 1]);
        }
        setstate([...state, str]);
      }
    },
    [state]
  );

  useEffect(() => {
    if (state.length === 0) {
      let _open = null;
      if (isLocalStorageAvailable()) {
        _open = localStorage.getItem("state");
      }
      if (_open && _open !== "") {
        const _result = _open;
        if (_result.length) {
          setstate([_result]);
        } else {
          setstate([]);
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      {reoderTitle(datasChapters).map((part: ILevels, index: number) => {
        const j = index;

        return (
          //::::::::::::::::::::::::::::::::::::::::::LEVEL 1 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
          <div
            className="toc--bloc-toc-content"
            key={`CHAPTER_LEVEL_1_${index}`}
          >
            <p className="toc--sidebar-zone-title">
              <span>{part.level_1.title}</span>
            </p>

            {/*::::::::::::::::::::::::::::::::::::::::::LEVEL 2 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}

            {part.level_2.length > 0 ? (
              part.level_2?.map((lesson: any, index: number) => {
                const _id = lesson.id;
              
                return state.includes(`${j}_${index}`) ? (
                  <React.Fragment key={`CHAPTER_LEVEL_2_${_id}`}>
                    <p
                      onClick={() => {
                        ref.current = `${j}_${index}`;
                        manageRefOpen(`${j}_${index}`);
                      }}
                      className="toc--layout-main--toc_title_chapter"
                    >
                      <span>{lesson.title}</span>

                      <span className="toc--layout-main--toc_container_arrow">
                        <img
                          className="arrow"
                          alt=""
                          width={8}
                          height={14}
                          src="./assets/images/icon/arrow.svg"
                        />
                      </span>
                    </p>
                    <div
                      className={`borderLight ${
                        state.includes(`${j}_${index}`) ? "open" : ""
                      }`}
                    >
                     
                      <div className="toc--layout-main--toc_title_chapters_type">
                        

                        <GenerateWheel
                          isAdaptive={isAdaptive}
                          lesson={lesson}
                        />
                      </div>

                      <TocRenderUniqueLevel
                        title={lesson.title}
                        part={lesson}
                        level={level}
                        lgt={-1}
                      />

                      {/*::::::::::::::::::::::::::::::::::::::::::LEVEL 3 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}

                      {part.level_3.length > 0 ? (
                        part.level_3?.map((lesson: any) => {
                          const _id_level3 = lesson.id;

                          return (
                            lesson.parent === _id && (
                              <div
                                key={`CHAPTER_LEVEL_3_${lesson.id}`}
                                className="borderLight open"
                              >
                                <React.Fragment>
                                  <TocRenderProgression
                                    isAdaptive={isAdaptive}
                                    lesson={lesson}
                                  />

                                  <TocRenderUniqueLevel
                                    part={lesson}
                                    level={level}
                                    title={lesson.title}
                                    lgt={part.level_3.length}
                                  />

                                  {part.level_4.length > 0 ? (
                                    part.level_4?.map((lesson: ILesson) => {
                                      return (
                                        lesson.parent === _id_level3 && (
                                          <React.Fragment
                                            key={`CHAPTER_LEVEL_4_${lesson.id}`}
                                          >
                                            <TocRenderProgression
                                              lesson={lesson}
                                              isAdaptive={isAdaptive}
                                            />
                                            <TocRenderUniqueLevel
                                              part={lesson}
                                              level={level}
                                              title={"title"}
                                              lgt={-1}
                                            />
                                          </React.Fragment>
                                        )
                                      );
                                    })
                                  ) : (
                                    <></>
                                  )}
                                </React.Fragment>
                              </div>
                            )
                          );
                        })
                      ) : 
                        <>
                       
                        </>
                      }
                    </div>
                  </React.Fragment>
                ) : (
                  <p
                    key={`CHAPTER_LEVEL_17530_${_id}`}
                    onClick={() => {
                      ref.current = `${j}_${index}`;
                      manageRefOpen(`${j}_${index}`);
                     
                    }}
                    className={` ${
                      part.level_3.length
                        ? "toc--layout-main--toc_title_chapter"
                        : "toc--layout-main--toc_title_chapter"
                    }`}
                  >
                    <span>{lesson.title}</span>

                    <span className="toc--layout-main--toc_container_arrow active">
                      <img
                        className="arrow"
                        alt=""
                        width={8}
                        height={14}
                        src="./assets/images/icon/arrow.svg"
                      />
                    </span>
                  </p>
                );
              })
            ) : (
              //::::::::::::::::::::::::::::::::::::::::::LEVEL 1 & NO LEVEL 2,3,4 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
              <>
                <div className="borderLight open">
                  <TocRenderProgression
                    isAdaptive={isAdaptive}
                    lesson={part.level_1}
                  />
                  <TocRenderUniqueLevel
                    part={part.level_1}
                    level={level}
                    title=""
                    lgt={-1}
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
const tocPropsAreEqual = (prevtoc: any, nexttoc: any) => {
  return (
    prevtoc.datasChapters === nexttoc.datasChapters &&
    prevtoc.level === nexttoc.level &&
    prevtoc.id === nexttoc.id &&
    prevtoc.isAdaptive === nexttoc.isAdaptive
  );
};

const MemoizedToc = React.memo(Toc, tocPropsAreEqual);
export default MemoizedToc;
