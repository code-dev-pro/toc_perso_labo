import { useState } from "react";
import BadgesToc from "../components/badgesToc";
import { BREAKPOINT_MOBILE, IS_TE_TOCA_LENGUA, _specDatas } from "../constants";
import { ILesson, ILessons } from "../interface/interface";
import {
  getProgression,
  reoderTitle,
  tableOfContents,
  timeConversion,
} from "../utils";

// FC Title
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const Title = ({
  part,
  section,
  level,
}: {
  part: string;
  section: string;
  level: string;
}) => {
  return (
    <>
      {level === "primaire" ? (
        <span className="toc--sidebar-zone-title__icon--left">
          <img
            width={30}
            height={35}
            alt=""
            src={`./assets/images/primaire/${
              part === "badge"
                ? "star"
                : part === "ressources"
                ? "plane"
                : "fusee_purple"
            }.svg`}
          />
        </span>
      ) : (
        <></>
      )}
      <p className="toc--sidebar-zone-title">{section}</p>
      {level === "primaire" ? (
        <span className="toc--sidebar-zone-title__icon--right">
          <img
            width={30}
            height={35}
            alt=""
            src={`./assets/images/primaire/${
              part === "badge"
                ? "star"
                : part === "ressources"
                ? "fusee_purple"
                : "fusee_purple"
            }.svg`}
          />
        </span>
      ) : (
        <></>
      )}
    </>
  );
};
// FC Progression
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const Progression = ({ val }: { val: number }) => {
  return (
    <div className="toc--sidebar-progression">
      <div className="toc--sidebar-content-progression">
        <div
          style={{ width: val + "%" }}
          className="toc--sidebar-content-progression-val"
        />
      </div>
    </div>
  );
};
// FC ScoreLayout
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const ScoreLayout = ({
  datas,
  level,
  isAdaptive,
}: {
  datas: ILessons;
  level: string;
  isAdaptive: boolean;
}) => {
  const getTotalScore = (datas: ILessons) => {
    let _total = 0;

    datas.lessons.forEach((item: ILesson) => {
      _total += item.score;
    });

    return Math.round(_total / datas.lessons.length);
  };

  const getTotalProgress = (datas: any) => {
    let _total = 0;
    if (isAdaptive) {
      const _parts = reoderTitle(tableOfContents(datas));
      let _count = 0;
      //_parts = cursus ou theme

      _parts.forEach((item: any) => {
        item.level_2.forEach((level: any) => {
          if (level.lessons.length) {
            _count += 1;
            _total += getProgression(level);
          }
        });
        item.level_3.forEach((level: any) => {
          if (level.lessons.length) {
            _count += 1;
            _total += getProgression(level);
          }
        });
        item.level_4.forEach((level: any) => {
          if (level.lessons.length) {
            _count += 1;
            _total += getProgression(level);
          }
        });
      });

      return Math.round(_total / _count);
    } else {
      datas.lessons.forEach((item: ILesson) => {
        if (item.time > 0) {
          _total += 1;
        }
      });
      return Math.round((_total / datas.lessons.length) * 100);
    }

    /* datas.lessons.forEach((item: ILesson) => {
      if((item.name==='Leçon' &&item.time>0)  || (item.name==='Cours' &&item.time>0)){
        _total += 1;
      
      }
      if(item.name==='Leçon' || item.name==='Cours'){
       _incr += 1;
      }
    });

    return Math.round((_total / _incr)*100); */
  };

  const getTotalTime = (datas: ILessons) => {
    let _totalTime = 0;
    datas.lessons.forEach((item: ILesson) => {
      _totalTime += Number(item.time);
    });
    return timeConversion(_totalTime);
  };

  const _totalTime = getTotalTime(datas);
  const _totalProgress = getTotalProgress(datas);
  const _totalScore = getTotalScore(datas);
  return (
    <div className="toc--sidebar-zone">
      {/* <Title
        part="progress"
        level={level}
        section={
          level === "primaire"
            ? "Résultats du parcours"
            : "Résultats du parcours"
        }
      /> */}
      <div className="toc--sidebar-content-title">
        <img height={40} alt="" src="./assets/images/resultat.svg" />
      </div>
      <div>
        <div className="toc--sidebar-content-score">
          <div>
            <img width={200} alt="" src="./assets/images/great.svg" />
          </div>

          <div
            className="toc--sidebar-content-score-result"
            /* style={{
              backgroundImage: "url(./assets/images/fond.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}  */
          >
            {/*  <div className={"toc--sidebar-content-score-result__container"}>
              <div>Mes résultats :</div>
              <div className="score">{`${Math.round(_totalScore / 5)}/20`}</div>
            </div>  */}

            {level === "primaire" && (
              <div
                className={` ${level === "primaire" ? "primaire_score" : ""}`}
              >
                <div>Ma progression :</div>
                <div className="score">
                  {`${Math.round(_totalProgress)}`}
                  <span style={{ fontSize: 11 }}>%</span>
                </div>
              </div>
            )}
          </div>
          {/* {level !== "primaire" && (
            <img alt="" src="./assets/images/progress.svg" />
          )} */}

          {level === "primaire" && (
            <div className={` ${level === "primaire" ? "primaire_score" : ""}`}>
              <div>Mon temps passé sur le parcours :</div>
              <div className="score time"></div>
            </div>
          )}
        </div>
        {level !== "primaire" && (
          <>
            <div className="toc--sidebar-container-progression__title">
              Ma progression :
            </div>
            <div className="toc--sidebar-container-progression__container">
              <div className="toc--sidebar-container-progression">
                <Progression val={_totalProgress} />
              </div>
              <div style={{width:"100%",textAlign:'center'}}> {_totalProgress}%</div>
            </div>
          </>
        )}
        {level !== "primaire" && (
          <div className="toc--sidebar-container-progression-totalTime">
            <span>Temps passé sur le parcours :</span>
            <span className="toc--time total--time">
              {_totalTime.days +
                "j " +
                _totalTime.hours +
                "h " +
                _totalTime.minutes +
                "m"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
// FC TimeLayout
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const TimeLayout = ({ datas, level }: { datas: ILessons; level: string }) => {
  const getTotalTime = (datas: ILessons) => {
    let _totalTime = 0;
    datas.lessons.forEach((item: ILesson) => {
      _totalTime += Number(item.time);
    });
    return timeConversion(_totalTime);
  };

  const _totalTime = getTotalTime(datas);

  return (
    <div className="toc--sidebar-zone">
      <Title part="time" level={level} section="Temps passé sur le parcours" />
      <div className="toc--sidebar-content-time">
        <img alt="" src="./assets/images/temps.svg" />
        <div
          className="toc--sidebar-content-time-result"
          style={{
            backgroundImage: "url(./assets/images/fond2.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            {_totalTime.days +
              "j " +
              _totalTime.hours +
              "h " +
              _totalTime.minutes +
              "m"}
          </div>
        </div>
      </div>
    </div>
  );
};
// FC BadgeLayout
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const BadgeLayout = ({
  subject,
  datas,
  level,
  grade,
  isAdaptive,
}: {
  subject: string;
  datas: any;
  level: string;
  grade: string;
  isAdaptive: boolean;
}) => {
  const getScore = (section: string, datas: any) => {
    let _result = 0;
    const _datas = reoderTitle(tableOfContents(datas));

    _datas[1].level_2.forEach((element1: any) => {
      let _dt = [] as any;
      _datas[1].level_3.forEach((element2: any) => {
        if (element2.parent === element1.id) {
          _dt.push(element2.lessons);

          element2.lessons.forEach((lesson: any) => {
            if (
              element1.title.includes(section) &&
              lesson.name.includes("Palier 3") &&
              lesson.score >= 75
            ) {
              _result += 1;
            }
          });
        }
      });
    });

    _datas[2].level_2.forEach((element1: any) => {
      let _dt = [] as any;
      _datas[2].level_3.forEach((element2: any) => {
        if (element2.parent === element1.id) {
          _dt.push(element2.lessons);

          element2.lessons.forEach((lesson: any) => {
            if (
              element1.title.includes(section) &&
              lesson.name.includes("Série 2") &&
              lesson.score >= 75
            ) {
              _result += 1;
            }
          });
        }
      });
    });

    return _result;
  };

  return (
    <div className="toc--sidebar-zone">
     
      {IS_TE_TOCA_LENGUA ? (
        <>
          <div className="toc--sidebar-content-title">
            <img
              className="toc--sidebar-zone--containerBadges--title title--1"
              height={40}
              alt=""
              src="./assets/images/reussite.svg"
            />
          </div>

          <div className="toc--sidebar-zone--containerBadges_1">
           
            <div className="toc--sidebar-zone--containerBadges">
              {level !== "primaire" ? (
                _specDatas.map(
                  (
                    element: { id: string; name: string; icon: string },
                    index: number
                  ) => {
                    return (
                      <div key={`badge_500_${index}`} className="item">
                        <img
                          style={{ opacity: 1 }}
                          width={100}
                          height={"auto"}
                          alt=""
                          src={`./assets/images/${element?.icon}.svg`}
                        />
                        <p className="score">{getScore(element.name, datas)}</p>
                      </div>
                    );
                  }
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {IS_TE_TOCA_LENGUA ? (
        <></>
      ) : (
        <div className="toc--sidebar-zone--containerBadges_2">
         
          <img
            className="toc--sidebar-zone--containerBadges--title title--2"
            alt=""
            src="./assets/images/badges.svg"
          />
          <div className="toc--sidebar-zone--containerBadges">
            <BadgesToc
              datas={datas}
              grade={grade}
              subject={subject}
              level={level}
              isAdaptive={isAdaptive}
            />
          </div>
        </div>
      )}
    </div>
  );
};
// FC RessourceLayout
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const RessourceLayout = ({
  subject,
  level,
}: {
  subject: string;
  level: string;
}) => {
  return (
    <div className="toc--sidebar-zone">
      <Title
        part="ressources"
        level={level}
        section={
          level === "primaire"
            ? "Ma boîte à outils"
            : "Ressources complémentaires"
        }
      />

      {level === "primaire" && (
        <div>
          <img
            style={{ opacity: 1 }}
            width={78}
            height={102}
            alt=""
            src={`./assets/images/primaire/malle.svg`}
          />
        </div>
      )}
      {level === "primaire" ? (
        <div className="toc--sidebar-zone--containerRessources--buttons">
          <div className="toc--sidebar-zone--containerRessources--button">
            <img
              width="24"
              height="24"
              src="./assets/images/primaire/podcast.svg"
              alt=""
            />
            <span>PODCASTS</span>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            window.open(
              "https://capeezy.directplateforme.com/courses/5386402111946752/next/~courses~list",
              "_top"
            );
          }}
          className="toc--sidebar-content-ressource"
        >
          <div className="toc--sidebar-content-ressource-item">
            <img alt="" src="./assets/images/podcast.svg" />
            <p>Podcasts</p>
          </div>
        </div>
      )}
    </div>
  );
};
// FC ROOT SidebarLayout
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const SidebarLayout = ({
  datas,
  width,
  setVisible,
  subject,
  level,
  grade,
  isAdaptive,
}: {
  datas: any;
  width: number;
  setVisible: Function;
  subject: string;
  level: string;
  grade: string;
  isAdaptive: boolean;
}) => {
  const [state, setstate] = useState<number>(0);

  const getSubject = (subject: string) => {
    if (
      subject === "francais" ||
      subject === "svt" ||
      subject === "histoire" ||
      subject === "geographie" ||
      subject === "pc" ||
      subject === "techno"
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {/* TOP MENU MOBILE */}
      {width < BREAKPOINT_MOBILE ? (
        <div className="toc--mobile__menu__wrapper">
          <ul className="toc--mobile__menu">
            <li
              onClick={() => {
                setstate(1);
              }}
            >
              <div
                className={`toc--mobile__menu__item ${
                  state === 1 ? "isActive" : ""
                }`}
              >
                <img
                  height={40}
                  alt=""
                  src="./assets/images/menu/menu_resultat.svg"
                />
              </div>
            </li>
            <li
              onClick={() => {
                setstate(2);
              }}
            >
              <div
                className={`toc--mobile__menu__item ${
                  state === 2 ? "isActive" : ""
                }`}
              >
                <img alt="" src="./assets/images/menu/menu_badge.svg" />
              </div>
            </li>
            {level === "primaire" || (level === "college" && grade !== "3") ? (
              <></>
            ) : (
              <li
                onClick={() => {
                  setstate(3);
                }}
              >
                <div
                  className={`toc--mobile__menu__item ${
                    state === 3 ? "isActive" : ""
                  }`}
                >
                  <img alt="" src="./assets/images/menu/menu_badge2.svg" />
                </div>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <></>
      )}

      {/* sidebar */}
      <div className={`toc--sidebar ${state === 1 ? "block_1" : "block_2"}`}>
        {width < BREAKPOINT_MOBILE ? (
          <>
            <div style={{ display: state === 1 ? "block" : "none" }}>
              <ScoreLayout
                isAdaptive={isAdaptive}
                datas={datas}
                level={level}
              />
              {level === "primaire" && (
                <TimeLayout datas={datas} level={level} />
              )}
            </div>

            <div style={{ display: state === 2 ? "block" : "none" }}>
              <BadgeLayout
                grade={grade}
                subject={subject}
                datas={datas}
                level={level}
                isAdaptive={isAdaptive}
              />
            </div>
          </>
        ) : (
          <>
            <ScoreLayout isAdaptive={isAdaptive} datas={datas} level={level} />
            {/*  <TimeLayout datas={datas} level={level} /> */}
            <BadgeLayout
              grade={grade}
              subject={subject}
              datas={datas}
              level={level}
              isAdaptive={isAdaptive}
            />
            {getSubject(subject) && (
              <RessourceLayout subject={subject} level={level} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SidebarLayout;
