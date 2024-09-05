// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const hourTime = parseInt(time.split(":")[0])
  const minutesTime = parseInt(time.split(":")[1]);

  // Map the number to string
  const mapStrings = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "thirty",
  }


  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  // Find the string for correct minute and time
  let minTimeInWords = mapStrings[minutesTime]
  let hourTimeInWords =mapStrings[hourTime]

  // Deal with hour greater than 12
  if(hourTime > 12){
    hourTimeInWords = mapStrings[hourTime -12]
  }

  if (minutesTime > 0 && minutesTime <= 30){
    if(minutesTime === 15){
      minTimeInWords = "quarter"
    }
    if(minutesTime === 30){
      minTimeInWords = "half"
    }
    return `${minTimeInWords} past ${hourTimeInWords}`;
  }

  if(minutesTime > 0 && minutesTime > 30){
    if(minutesTime === 45){
      minTimeInWords = "quarter"
    }else{
      minTimeInWords = mapStrings[60 - minutesTime]
    }
    // Ensure the hour correct when the time is past 30 minutes
    hourTimeInWords= mapStrings[hourTime + 1]
    return `${minTimeInWords} to ${hourTimeInWords}`
  }

  if (minutesTime === 0) {
    return `${hourTimeInWords} o'clock`;
  }
}

module.exports = { convertTimeToWords };