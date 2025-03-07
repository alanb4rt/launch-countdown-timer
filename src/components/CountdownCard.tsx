import { useEffect, useState } from "react";
import { checkValue } from "../utils/checkValue";
import { CountdownType } from "../types/countdown";

export default function CountdownCard({ value, unit }: CountdownType) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000 - 50);
  }, [value]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 text-center">
      <div className="card rounded md:rounded-lg pb-3">
        <div className="ctn-card-top rounded md:rounded-lg">
          <div className="card-top rounded md:rounded-lg">
            <div className="card-top-content">{value}</div>
          </div>
          {isAnimating && (
            <div
              className={`card-top md:-mt-[72px] -mt-[32px] rounded md:rounded-lg ${
                isAnimating ? "animate-card-top" : ""
              }`}
            >
              <div className="card-top-content">{checkValue(value, unit)}</div>
            </div>
          )}
        </div>

        <div className="ctn-card-bottom rounded md:rounded-lg">
          <div className="card-bottom rounded md:rounded-lg">
            <div className="card-bottom-content">
              {isAnimating ? checkValue(value, unit) : value}
            </div>
          </div>
          {isAnimating && (
            <div
              className={`card-bottom md:-mt-[72px] -mt-[32px] rounded md:rounded-lg ${
                isAnimating ? "animate-card-bottom" : ""
              }`}
            >
              <div className="card-bottom-content">{value}</div>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs md:text-xl tracking-[0.2em] text-[var(--color-primary)] uppercase">
        {unit}
      </p>
    </div>
  );
}
