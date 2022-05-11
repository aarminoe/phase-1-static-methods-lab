class Formatter {
  //add static methods here
  static capitalize(string) {
    let firstLetter = string.slice(0,1).toUpperCase()
    let restOfString = string.slice(1)
    return firstLetter + restOfString
  }

  static sanitize(string) {
    if (string.length === 1 && string.match(/[a-z]/i)) {
      return string
    }
    return string.replace(/[^a-z0-9' -]/gi, '')    
  }

  static titleize(string) {
    const badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(' ')
    let wordArray = []
    stringArray.forEach((s) => {
      badWords.forEach(() => {
        if (badWords.indexOf(s) === -1 || s === stringArray[0]) {
          let firstLetter = s.slice(0,1).toUpperCase()
          let restOfString = s.slice(1)
          let titleWord = firstLetter + restOfString
          wordArray.push(titleWord)
        }
        else {
          wordArray.push(s)
        }
      })
    })
    let newUniqueString = [...new Set(wordArray)]
    let finalString  = newUniqueString.join(' ')
    return finalString
  }

  static titleize(string) {
    const badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(' ')
    let wordArray = []
    stringArray.forEach((s) => {
      if (badWords.indexOf(s) === -1 || s === stringArray[0]) {
        let firstLetter = s.slice(0,1).toUpperCase()
        let restOfString = s.slice(1)
        let titleWord = firstLetter + restOfString
        wordArray.push(titleWord)
      }
      else {
        wordArray.push(s)
      }
    })
    let finalString  = wordArray.join(' ')
    return finalString
  }
}

