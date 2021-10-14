const getSumaDivizibile = (numereDeDivizat, divizor) =>
  numereDeDivizat
    .map((nr) => {
      if (nr % divizor === 0) return nr / divizor;
      else return 0;
    })
    .reduce((prev, current) => prev + current, 0);
const numereDeDivizat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getSumaDivizibile(numereDeDivizat, 3));
