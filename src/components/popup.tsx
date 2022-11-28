import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useRecoilValue } from "recoil";
import communication from "../communication/communication";
import { IBadge } from "../interface/interface";
import { WIN_BADGE } from "../recoil/recoilState";

const isReset = false;

const Popup = ({ id, level }: { id: number; level: string }) => {
  const refAnimationInstance = useRef<any>(null);
  const badge = useRecoilValue<any>(WIN_BADGE);
  const [open, setopen] = useState<boolean>(false);
  const refBadges = useRef<Array<IBadge>>([]);
  const _onClick = useCallback(
    (instance) => {
      communication
        .postCollectionCustomTOCState(id, badge)
        .then((collection: any) => {
          //  console.log(collection)
        })
        .catch((error: string) => {
          //console.error("ERROR", error);
        });

      setopen(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [badge]
  );

  const getInstance = useCallback((instance) => {
    //@ts-ignore
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    if (!open) {
      console.log(communication);
      communication
        .requestCollectionCustomTOCState(id)
        .then((collection: any) => {
          const _saveBadges = JSON.parse(
            collection.data.collectionCustomTOCState
          );

          if (!_saveBadges || !_saveBadges.length) {
            refBadges.current = badge;
          } else {
            const results = _saveBadges.filter(
              //@ts-ignore
              ({ urlLink: id1 }) =>
                //@ts-ignore
                !badge.some(({ urlLink: id2 }) => id2 === id1)
            );

            let _isFinded = false;
            let _inc = 0;
            badge.forEach((badgeWin: IBadge) => {
              _inc += 1;
              _isFinded = false;
              results.forEach((badgeSave: IBadge) => {
                if (badgeWin.urlLink === badgeSave.urlLink) {
                  _isFinded = true;
                }
              });

              if (_isFinded && _inc === badge.length) {
                refBadges.current.push(badgeWin);
              }
            });
          }

          if (refBadges.current.length) {
            setopen(true);
          }
        })
        .catch((error: string) => {
          console.error("ERROR STATE TOC", error);
        });
    }
    if (isReset) {
      communication
        .postCollectionCustomTOCState(id, { badges: [] })
        .then((collection: any) => {})
        .catch((error: string) => {
          console.error("ERROR", error);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badge]);

  useEffect(() => {
    if (open) fire();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return open ? (
    <>
      <div className="overlay" />
      <div className="popup">
        <div className="popupClose" onClick={_onClick}>
          <svg
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="view-close"
            viewBox="0 0 32 32"
            preserveAspectRatio="xMidYMid meet"
            fill="currentColor"
            width="32"
            height="32"
            style={{ minWidth: "32px" }}
          >
            <path d="M11.121,9.707c-0.39,-0.391 -1.024,-0.391 -1.414,0c-0.391,0.39 -0.391,1.024 0,1.414l4.95,4.95l-4.95,4.95c-0.391,0.39 -0.391,1.023 0,1.414c0.39,0.39 1.024,0.39 1.414,0l4.95,-4.95l4.95,4.95c0.39,0.39 1.023,0.39 1.414,0c0.39,-0.391 0.39,-1.024 0,-1.414l-4.95,-4.95l4.95,-4.95c0.39,-0.39 0.39,-1.024 0,-1.414c-0.391,-0.391 -1.024,-0.391 -1.414,0l-4.95,4.95l-4.95,-4.95Z"></path>
          </svg>
        </div>
        <ReactCanvasConfetti
          refConfetti={getInstance}
          style={{
            position: "fixed",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
        <div className="popupContent">
          <p>Félicitations !</p>
          <p>
            {level === "primaire"
              ? "Tu as terminé tes missions"
              : "Tu as terminé les parties"}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 40,
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {refBadges.current.map((item: IBadge, index: number) => {
              return (
                <React.Fragment key={`BADGE__${index}`}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className="badge_college_lycee"
                      width={80}
                      height="auto"
                      alt=""
                      src={item.urlLink}
                    />
                    <p
                      style={{ fontSize: 12, width: 100, textAlign: "center" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default React.memo(Popup);

/* ./assets/images/college_lycee/badges/francais/BADGE_60x65_dictees_on.svg */
