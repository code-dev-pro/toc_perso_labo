import React from "react";
import { useEffect } from "react";
import Toc from "./toc";
import { IDatas } from "../interface/interface";
import { tableOfContents } from "../utils";

// FC ContentLayout
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const ContentLayout = ({
  datas,
  level,
  isAdaptive,
  id,
}: {
  datas: IDatas;
  level: string;
  isAdaptive: boolean;
  id: number;
}) => {
  useEffect(() => {}, [datas]);
  return (
    <div
      className="toc--bloc-toc"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Toc
        id={id}
        isAdaptive={isAdaptive}
        level={level}
        datasChapters={tableOfContents(datas)}
      />
    </div>
  );
};

export default React.memo(ContentLayout);
