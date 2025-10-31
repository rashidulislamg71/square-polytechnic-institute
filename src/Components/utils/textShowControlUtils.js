
export const getShortText = (text, limit = 15)=>{
    const words = text.trim().split(" ");
    const isLong = words.length > limit;
    const shortText = words.slice(0, limit).join(" ");
    return(shortText, isLong);
}

export const getShortTextByChar = (text = "", limit = 100) => {
  const isLong = text.length > limit; // check if text exceeds limit
  const shortText = isLong ? text.slice(0, limit) + "..." : text; // truncate if needed
  return { shortText, isLong }; // object return
};