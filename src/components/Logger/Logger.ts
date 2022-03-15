const timestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};

const Log = (...args: any) => {
  if (process.env.NODE_ENV === "production") return;
  console.log(`${timestampInSeconds()}: Log:`, ...args);
};

export default Log;
