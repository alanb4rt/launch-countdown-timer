import { useEffect, useMemo, useState } from "react";
import config from "../config/config.json";
import CountdownCard from "./CountdownCard";
import { calculateTime } from "../utils/calculateTime";

export default function CountdownSection() {
  const launchDate = useMemo(() => new Date(config.launchDate), []);
  const [time, setTime] = useState(() => calculateTime(launchDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime(launchDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <section className="grid grid-cols-4 gap-5 md:gap-8 md:py-16">
      <CountdownCard value={time.days} unit="days" />
      <CountdownCard value={time.hours} unit="hours" />
      <CountdownCard value={time.minutes} unit="minutes" />
      <CountdownCard value={time.seconds} unit="seconds" />
    </section>
  );
}
