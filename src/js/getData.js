export const getData = async function () {
  try {
    const response = await fetch('../../src/data/data.json');
    const data = await response.json();

    if (!response.ok) throw Error(`Something went wrong! (${response.status})`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
