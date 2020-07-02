const t = 1250;
const t2 = 1350;
const t3 = 1450;
const t4 = 1550;

const to = t2 + t + t3 + t4;
const pad = (v) => v;

function transformTime(ms, renderHours = false) {
  return (ms / 3600 / 1000) % 60;
}
