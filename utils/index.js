export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return regex.test(url);
  }
};
