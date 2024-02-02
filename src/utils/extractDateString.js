const extractDateString = (originalText) => {

  if(typeof originalText !== 'string') return
  const dateIndex = originalText.indexOf(':'); // Find the index of the colon
  const dateString = originalText.substring(0, dateIndex); // Extract the date string
  return dateString 
}

export default extractDateString