import "./Level1Backstage.css";

const M = "player";
const I = "wall";
const X = "lava";
const _ = "platform";
const $ = "coin";
const O = "empty";


export const levelOneLayout = [
  [I, I, $, O, O, O, M, O, O, $, O, $, I, I],
  [_, _, _, _, X, X, _, _, X, X, _, _, _, _],
];

export const tiles = {
  player: (ix) => (
    <i
      key={ix}
      class="bi bi-person-standing fs-1 text-center"
    ></i>
  ),
  wall: (ix) => (
    <div
      key={ix}
      className="wall"
    ></div>
  ),
  lava: (ix) => (
    <div
      key={ix}
      className="lava"
    ></div>
  ),
  platform: (ix) => (
    <div
      key={ix}
      className="platform"
    ></div>
  ),
  coin: (ix) => (
    <div
      key={ix}
      className="coinOuter"
    >
      <div className="coinInner"></div>
    </div>
  ),
  empty: (ix) => (
    <div
      key={ix}
      className="empty"
    ></div>
  ),
};

export function tileToRender(tileType, ix) {
  switch (tileType) {
    case M:
      return tiles.player(ix);
    case I:
      return tiles.wall(ix);
    case X:
      return tiles.lava(ix);
    case _:
      return tiles.platform(ix);
    case $:
      return tiles.coin(ix);
    case O:
      return tiles.empty(ix);
    default:
      return tiles.empty(ix);
  }
}
