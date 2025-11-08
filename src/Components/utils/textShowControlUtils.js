// ===============================
// TEXT UTILITIES
// ===============================

// --------------------------------
// 1getShortText()
// --------------------------------
// Description:
// Takes a text string and returns a shortened version based on the number of words.
// Commonly used for "Read more / Show less" functionality.

// -------------------------------------
// Now useed students testimonial card
// -------------------------------------

export const getShortText = (text= "", limitWords = 15) => {
  // Remove extra spaces and split text into words
  const words = text.trim().split(" ");

  // Check if text contains more words than the limitWords
  const isLong = words.length > limitWords;

  // Take only the first 'limitWords' words and join them back into a string
  const shortText = words.slice(0, limitWords).join(" ");

  // NOTE: The following return statement will only return 'isLong'
  // Use object return instead for both values
  // return(shortText, isLong);
  //  Correct return (returns both)
  return { shortText, isLong };
};

// --------------------------------
// getShortTextByChar()
// --------------------------------
// Description:
// Truncates text by character length instead of word count.
// Adds "..." if the text exceeds the specified limitWords.

// -------------------------------------
// Now useed students testimonial card
// -------------------------------------

export const getShortTextByChar = (text = "", limitWords = 100) => {
  // Check if text length exceeds the character limit
  const isLong = text.length > limitWords;

  // If longer, slice the text and append "..."
  const shortText = isLong ? text.slice(0, limitWords) + "..." : text;

  // Return both the shortened text and the status
  return { shortText, isLong };
};

// --------------------------------
// Use Case Example
// --------------------------------

// In a React component:
{
  /*
  const { shortText, isLong } = getShortTextByChar(article.content, 120);
  
  return (
    <p>
      {showFull ? article.content : shortText}
      {isLong && (
        <button onClick={() => setShowFull(!showFull)}>
          {showFull ? "Show less" : "Read more"}
        </button>
      )}
    </p>
  );
  */
}
