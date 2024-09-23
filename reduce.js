const numbers = [1, 2, 1, 3, 2, 3, 4, 1, 2, 4, 5];

const uniqElements = (arr) => {
  const reducer = (acc, el) => {
    if (el in acc) {
      acc[el] = acc[el] + 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  };

  const res = arr.reduce(reducer, {});

  console.log(res);
};

uniqElements(numbers);
