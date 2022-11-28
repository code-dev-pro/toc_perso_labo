import React, { useEffect } from "react";
import { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { PATH_BADGES_PRIMAIRE_MISSIONS } from "../constants";
import { IBadge, IDatas, ILevels } from "../interface/interface";
import { WIN_BADGE } from "../recoil/recoilState";
import { reoderTitle, setCurrentDate, tableOfContents } from "../utils";

// FC BadgesTocPrimaire
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const BadgesTocPrimaire = ({
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
  const setBadge = useSetRecoilState<any>(WIN_BADGE);
  const ref = useRef<number>(0);
  const refSend = useRef<boolean>(false);
  const refBadges = useRef<Array<IBadge>>([]);
  const refTimeout = useRef<any>(null);

  const getCompletion = (datas: IDatas) => {
    let _result = [] as any;
    const _parts = reoderTitle(tableOfContents(datas));
    _parts.forEach((item: ILevels) => {
      let _isAllOpened = 0;
      let _total = 0;

      for (let i = 0; i < item.level_3.length; i++) {
        if (item.level_3[i].lessons.length) {
          for (let p = 0; p < item.level_3[i].lessons.length; p++) {
            _total += 1;

            if (item.level_3[i].lessons[p].time > 0) {
              _isAllOpened += 1;
            }
          }
        }
      }

      _result.push({
        name: item.level_1.title,
        isOpen: _total === _isAllOpened,
      });
    });

    return _result;
  };

  const checkCompletion = (
    datas: IDatas,
    datasTitle: string,
    link: string,
    nb: number
  ) => {
    const _result = getCompletion(datas);

    let _title = "";

    const _lgth = _result.length;
    let _isOpen = false;
    for (let j = 0; j < _lgth; j++) {
      if (datasTitle.toLowerCase() === _result[j].name.toLowerCase()) {
        _isOpen = _result[j].isOpen;
        _title = datasTitle;
        ref.current += 1;
      }
    }

    if (_isOpen) {
      refBadges.current.push({
        time: setCurrentDate(),
        title: _title,
        urlLink: `${PATH_BADGES_PRIMAIRE_MISSIONS}${subject.toLowerCase()}/${link}.svg`,
      });
    }

    if (ref.current === nb) {
      if (!refSend.current) {
        refSend.current = true;
        refTimeout.current = setTimeout(() => {
          if (refTimeout.current) clearTimeout(refTimeout.current);
          setBadge([...refBadges.current]);
        }, 0);
      }
    }

    return _isOpen;
  };

  let _data = [] as Array<string>;
  let _dataTitle = [] as Array<string>;

  useEffect(() => {
    return () => {
      if (refTimeout.current) clearTimeout(refTimeout.current);
    };
  }, []);

  return (
    <>
      <div className="toc--sidebar-zone--containerBadges">
        {_data?.map((item: string, index: number) => {
          const _isComplettion = checkCompletion(
            datas,
            _dataTitle[index],
            item,
            _dataTitle.length
          );

          return (
            <div key={index} className={`badges toc--badges_performance`}>
              <div className={`item ${_isComplettion ? "" : "filterGray"}`}>
                <img
                  style={{ opacity: 1 }}
                  width={120}
                  height={80}
                  alt=""
                  src={`${PATH_BADGES_PRIMAIRE_MISSIONS}${subject.toLowerCase()}/${item}.svg`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(BadgesTocPrimaire);
