import React from "react";
import { allColors } from "./colorsList";

function crc32(str) {
  let crc = 0xffffffff;
  for (let i = 0; i < str.length; i++) {
    let byte = str.charCodeAt(i);
    crc = crc ^ byte;
    for (let j = 0; j < 8; j++) {
      if (crc & 1) {
        crc = (crc >>> 1) ^ 0xedb88320;
      } else {
        crc = crc >>> 1;
      }
    }
  }
  crc = crc ^ 0xffffffff;
  return (crc >>> 0).toString(16).padStart(8, "0");
}

export default function RandomColors() {
  return (
    <>
      {/* <div className="d-flex flex-row flex-wrap">
        {allColors.map((item) => square(item[0], item[1]))}
      </div> */}
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="d-flex flex-row flex-wrap">
        {allColors.map((item) => hashed(item[0], item[1]))}
      </div>
    </>
  );
}

function square(hex, hexName) {
  return (
    <div
      style={{
        width: "12rem",
        padding: "1rem",
        backgroundColor: hex,
      }}
    >
      {hexName}
    </div>
  );
}

function hashed(hex, hexName) {
  let q = crc32(hexName).toString().substring(0, 8);
  return (
    <div
      style={{
        width: "24rem",
        padding: "1rem",
        backgroundColor: `#${q}`,
      }}
    >
      {hex} | {q} | {hexName}
    </div>
  );
}
