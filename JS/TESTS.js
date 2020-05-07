var count = 0; // Player  starts with 0 

function cc(card) {
    if (card == 2 || card < 6) { 
        count ++;

    } switch(card) {
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
       count --;

     /* Another method:   else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
                            count -= 1; */ 
    }

        var holdbet = 'hold';
            if (count > 0) {
                holdbet = 'bet'
            }

            return count + " " + holdbet;

    }

cc(2); cc(2); cc(5); cc('K'); cc(2);
console.log(cc())







