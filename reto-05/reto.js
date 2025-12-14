/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const elf2datetime = (elf) => {
    const year = elf.substring(0, 4);
    const month = elf.substring(5,7) - 1; // months 0 to 11
    const day = elf.substring(8,10);
    const hour = elf.substring(11,13);
    const minute = elf.substring(14,16);
    const second = elf.substring(17,19);
    return new Date(year, month, day, hour, minute,second);
  }
  return Math.floor((elf2datetime(takeOffTime) - elf2datetime(fromTime))/1000);
}

const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff));
// 30

// justo en el momento exacto
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff));
// 0

// 12 segundos después del despegue
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff));
// -12

