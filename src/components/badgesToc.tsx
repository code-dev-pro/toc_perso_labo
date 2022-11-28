import React from "react";
import { LEVELS } from "../constants";
import { IDatas, ILevel } from "../interface/interface";
import { getProgression, reoderTitle, tableOfContents } from "../utils";
import CircleProgress from "./circleProgress";

// FC BadgesToc
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const BadgesToc = ({
  grade,
  subject,
  level,
  datas,
  isAdaptive,
}: {
  grade: string;
  subject: string;
  level: string;
  datas: IDatas;
  isAdaptive: boolean;
}) => {
  const getTotalProgress = (datas: any, index: number) => {
    let _total = 0;

    const _parts = reoderTitle(tableOfContents(datas));
    let _count = 0;

    _parts[index]?.level_2.forEach((level: any) => {
      if (level.lessons.length) {
        _count += 1;
        _total += getProgression(level);
      }
    });
    _parts[index]?.level_3.forEach((level: any) => {
      if (level.lessons.length) {
        _count += 1;
        _total += getProgression(level);
      }
    });
    _parts[index]?.level_4.forEach((level: any) => {
      if (level.lessons.length) {
        _count += 1;
        _total += getProgression(level);
      }
    });

    return Math.round(_total / _count);
  };

  return (
    <>
      {LEVELS.map((item: ILevel) => {
        return (
          item.title ===
            `${grade.toUpperCase()}_${subject.toUpperCase()}_${level.toUpperCase()}` &&
          subject.toUpperCase() === item.subject.toUpperCase() &&
          item?.data?.map((itemstr: string, index: number) => {
            const _isComplettion = true;
            const _total = getTotalProgress(datas, index + 1);

            return (
              <div
                key={`badges--toc--badges_performance_${index}`}
                className={`badges toc--badges_performance`}
              >
                <div className="iteml">
                  <img
                    className="badge_college_lycee"
                    /*  style={{ opacity: _isComplettion ? 1 :1 }} */
                    width={80}
                    height="auto"
                    alt=""
                    src={
                      _isComplettion
                        ? `./assets/images/college_lycee/badges/${itemstr}.svg`
                        : `./assets/images/college_lycee/badges/badge_off.svg`
                    }
                  />
                  <div
                    style={{
                      position: "relative",
                      marginTop: 5,
                    }}
                  >
                    <div className="toc--layout-main_progress badges">
                      <p className="toc--layout-main--toc_progress_notion badges">
                        {_total + "%"}
                      </p>
                      <CircleProgress progress={100 - _total} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        );
      })}
    </>
  );
};

export default React.memo(BadgesToc);
