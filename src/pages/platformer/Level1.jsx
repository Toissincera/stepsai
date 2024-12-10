import React from "react";
import { levelOneLayout, tileToRender } from "./Level1Backstage";

export default function Level1() {
  const top = levelOneLayout[0];
  const base = levelOneLayout[1];
  return (
    <div className="d-flex flex-column">
      <div className="d-flex myLevel">
        {top.map((tileType, ix) => tileToRender(tileType, ix))}
      </div>
      <div className="d-flex myLevel">
        {base.map((tileType, ix) => tileToRender(tileType, ix))}
      </div>
    </div>
  );
}

