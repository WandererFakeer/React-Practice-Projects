import React from "react";

function useTime() {
  const [time, setTime] = React.useState(Temporal.Now.zonedDateTimeISO());

  const timeFormat = time.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(Temporal.Now.zonedDateTimeISO());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return timeFormat;
}

export default useTime;
