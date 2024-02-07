const stringToEval = `abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca
  bcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca
  bcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca
  bcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca
  bcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca
  bcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabccabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabccabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabccabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab
  cabcabcabccabcabcabcabcabcabcabcabcabcabcabcabcabc
  abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab`;

function lengthInUtf8Kilobytes(str: string) {
  const encodedLength: Uint8Array = new TextEncoder().encode(stringToEval);
  return (str.length + (encodedLength ? encodedLength.length : 0)) / 1024;
}

export function get2KbObject() {
  return {
    value: stringToEval,
    size: lengthInUtf8Kilobytes(stringToEval),
  };
}
