var randomString = require('./util/randomString');

const A = [0, 100, 0];
const B = [0, 93.923, -34.328];
const C = [32.648, 93.923, -10.608];
const D = [20.177, 93.923, 27.772];
const E = [-20.177, 93.923, 27.772];
const F = [-32.648, 93.923, -10.608];
const G = [0, 79.433, 60.749];
const H = [-57.776, 79.433, 18.772];
const I = [-35.707, 79.433, -49.147];
const J = [35.707, 79.433, -49.147];
const K = [57.776, 79.433, 18.772];
const L = [40.355, 72.678, 55.583];
const M = [-40.355, 72.678, 55.583];
const N = [-65.326, 72.678, -21.226];
const O = [0, 72.678, -68.688];
const P = [65.326, 72.678, -21.226];
const Q = [20.177, 51.411, 83.315];
const R = [-20.177, 51.411, 83.315];
const S = [-73.002, 51.411, 44.935];
const T = [-85.472, 51.411, 6.556];
const U = [-65.295, 51.411, -55.543];
const V = [-32.647, 51.411, -79.263];
const W = [32.647, 51.411, -79.263];
const X = [65.295, 51.411, -55.543];
const Y = [85.472, 51.411, 6.556];
const Z = [73.002, 51.411, 44.935];
const AA = [52.574, 44.717, 72.363];
const AB = [-52.574, 44.717, 72.363];
const AC = [-85.067, 44.717, -27.64];
const AD = [0, 44.717, -89.445];
const AE = [85.067, 44.717, -27.64];
const AF = [0, 18.621, 98.251];
const AG = [-93.442, 18.621, 30.361];
const AH = [-57.75, 18.621, -79.487];
const AI = [57.75, 18.621, -79.487];
const AJ = [93.442, 18.621, 30.361];
const AK = [40.355, 17.038, 89.896];
const AL = [-73.025, 17.038, 66.159];
const AM = [-85.487, 17.038, -49.007];
const AN = [20.192, 17.038, -96.447];
const AO = [97.966, 17.038, -10.6];
const AP = [-40.355, 17.038, 89.896];
const AQ = [-97.966, 17.038, -10.601];
const AR = [-20.191, 17.038, -96.447];
const AS = [85.487, 17.038, -49.007];
const AT = [73.025, 17.038, 66.159];
const AU = [20.177, -17.308, 96.358];
const AV = [-85.407, -17.308, 48.966];
const AW = [-72.962, -17.308, -66.095];
const AX = [40.314, -17.308, -89.815];
const AY = [97.877, -17.308, 10.586];
const AZ = [-20.177, -17.308, 96.358];
const BA = [-97.877, -17.308, 10.586];
const BB = [-40.314, -17.308, -89.815];
const BC = [72.962, -17.308, -66.095];
const BD = [85.407, -17.308, 48.966];
const BE = [-56.853, -17.679, 79.627];
const BF = [-93.608, -17.679, -30.415];
const BG = [0, -17.679, -98.425];
const BH = [93.608, -17.679, -30.415];
const BI = [56.853, -17.679, 79.627];

var edges = [
  [A, B],
  [A, C],
  [A, D],
  [A, E],
  [A, F],
  [B, C],
  [C, D],
  [D, E],
  [E, F],
  [F, B],
  [G, D],
  [G, E],
  [H, E],
  [H, F],
  [I, F],
  [I, B],
  [J, B],
  [J, C],
  [K, C],
  [K, D],
  [L, D],
  [L, K],
  [L, G],
  [M, E],
  [M, G],
  [M, H],
  [N, F],
  [N, H],
  [N, I],
  [O, B],
  [O, I],
  [O, J],
  [P, C],
  [P, J],
  [P, K],
  [Q, L],
  [Q, G],
  [Q, R],
  [R, G],
  [R, M],
  [S, M],
  [S, H],
  [S, T],
  [T, H],
  [T, N],
  [U, N],
  [U, I],
  [U, V],
  [V, I],
  [V, O],
  [W, O],
  [W, J],
  [W, X],
  [X, J],
  [X, P],
  [Y, P],
  [Y, K],
  [Y, Z],
  [Z, K],
  [Z, L],
  [AA, Z],
  [AA, L],
  [AA, Q],
  [AB, R],
  [AB, M],
  [AB, S],
  [AC, T],
  [AC, N],
  [AC, U],
  [AD, V],
  [AD, O],
  [AD, W],
  [AE, X],
  [AE, P],
  [AE, Y],
  [AF, Q],
  [AF, R],
  [AG, S],
  [AG, T],
  [AH, U],
  [AH, V],
  [AI, W],
  [AI, X],
  [AJ, Y],
  [AJ, Z],
  [AK, AA],
  [AK, Q],
  [AK, AF],
  [AL, AB],
  [AL, S],
  [AL, AG],
  [AM, AC],
  [AM, U],
  [AM, AH],
  [AN, AD],
  [AN, W],
  [AN, AI],
  [AO, AE],
  [AO, Y],
  [AO, AJ],
  [AP, AF],
  [AP, R],
  [AP, AB],
  [AP, AL],
  [AQ, AG],
  [AQ, T],
  [AQ, AC],
  [AQ, AM],
  [AR, AH],
  [AR, V],
  [AR, AD],
  [AR, AN],
  [AS, AI],
  [AS, X],
  [AS, AE],
  [AS, AO],
  [AT, AJ],
  [AT, Z],
  [AT, AA],
  [AT, AK],
  [AU, AK],
  [AU, AF],
  [AV, AL],
  [AV, AG],
  [AW, AM],
  [AW, AH],
  [AX, AN],
  [AX, AI],
  [AY, AO],
  [AY, AJ],
  [AZ, AF],
  [AZ, AP],
  [BA, AG],
  [BA, AQ],
  [BB, AH],
  [BB, AR],
  [BC, AI],
  [BC, AS],
  [BD, AJ],
  [BD, AT],
  [BE, AZ],
  [BE, AP],
  [BE, AL],
  [BE, AV],
  [BF, BA],
  [BF, AQ],
  [BF, AM],
  [BF, AW],
  [BG, BB],
  [BG, AR],
  [BG, AN],
  [BG, AX],
  [BH, BC],
  [BH, AS],
  [BH, AO],
  [BH, AY],
  [BI, BD],
  [BI, AT],
  [BI, AK],
  [BI, AU],
  [AU, AZ],
  [AV, BA],
  [AW, BB],
  [AX, BC],
  [AY, BD]
];

var struts = {};
edges.map(function(edge) {
  var key = randomString(6);
  struts[key] = edge;
});

console.log(struts);