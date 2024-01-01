export const getWordCount = (str: string) => {
  return str.trim().split(/\s+/).length;
};
export const makeReadableTime = (isoTime:string) => {
    const time = new Date(isoTime);
    // Convert the time to a readable format
    const readableTime = time.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return readableTime;
  };