'use strict';

/**
 * 
 * @param {number} rateOfWinner 
 * @param {number} rateOfLoser 
 * @returns {number}
 */

function getRating(rateOfWinner, rateOfLoser) {
    if (
        rateOfWinner < 0 ||
        rateOfLoser < 0 ||
        typeof rateOfWinner !== "number" ||
        typeof rateOfLoser !== "number"
    ) return NaN;

    if (rateOfWinner === 0) {
        return rateOfLoser;
    }

    if (rateOfLoser === 0) {
        return rateOfWinner;
    }

    if ((rateOfWinner - rateOfLoser) >= 0 && (rateOfWinner - rateOfLoser) <= 2) {
        return rateOfWinner + 2;
    }

    if ((rateOfWinner - rateOfLoser) > 2 && (rateOfWinner - rateOfLoser) < 20) {
        return rateOfWinner + 1;
    }

    if (rateOfWinner < rateOfLoser) {
        const bonus = (rateOfLoser - rateOfWinner + 5) / 3;
        return rateOfWinner + Math.round(bonus * 10) / 10;
    }

    return rateOfWinner;
}

console.log(getRating(10, 30));