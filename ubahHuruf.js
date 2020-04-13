/** UBAH HURUF */
function ubahHuruf(kata) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var ubah = '';
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < abjad.length; j++) {
      if (kata[i] === abjad[j]) {
        ubah += abjad[j+1]
      }
    }
  }
  return ubah;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
