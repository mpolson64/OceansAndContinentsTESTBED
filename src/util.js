const histogram = (data, filteredData, extractor, transform) => {
  const res = [];
  const temp = {};

  data.forEach((obj) => {
    temp[transform(obj[extractor])] = 0;
  });

  filteredData.forEach((obj) => {
    temp[transform(obj[extractor])] += 1;
  });

  Object.keys(temp).forEach((key) => {
    res.push({
      key,
      value: temp[key],
    });
  });

  return res;
};

const histogramNumberic = (data, filteredData, extractor, transform) => {
  const res = [];
  const temp = {};

  data.forEach((obj) => {
    temp[transform(obj[extractor])] = 0;
  });

  filteredData.forEach((obj) => {
    temp[transform(obj[extractor])] += 1;
  });

  Object.keys(temp).forEach((key) => {
    res.push({
      x: parseFloat(key),
      y: temp[key],
    });
  });

  return res;
};

const coalesceHistogram = (hist) => {
  const temp = {};
  const res = [];

  hist.forEach((elem) => {
    if (elem.value !== 0) {
      temp[elem.key] = elem.value;
    }
  });

  Object.keys(temp).forEach((key) => {
    res.push({
      key,
      value: temp[key],
    });
  });

  return res;
};

export { histogram, histogramNumberic, coalesceHistogram };