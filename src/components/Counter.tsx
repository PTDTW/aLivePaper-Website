import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
  className?: string;
}

function Number({ mv, number, height, className }: NumberProps) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span className={className} style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, display: "flex", alignItems: "center", justifyContent: "center", y }}>
      {number}
    </motion.span>
  );
}

interface DigitProps {
  place: number;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
  className?: string;
}

function Digit({ place, value, height, digitStyle, className }: DigitProps) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className={className} style={{ height, position: "relative", width: "1ch", fontVariantNumeric: "tabular-nums", ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: number[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  className?: string;
  counterClassName?: string;
  digitClassName?: string;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  containerStyle,
  counterStyle,
  digitStyle,
  className = "",
  counterClassName,
  digitClassName,
}: CounterProps) {
  const height = fontSize + padding;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={className} style={{ position: "relative", display: "inline-block", ...containerStyle }}>
      <div className={counterClassName} style={{ display: "flex", gap, overflow: "hidden", borderRadius, paddingLeft: horizontalPadding, paddingRight: horizontalPadding, lineHeight: 1, ...counterStyle }}>
        {places.map((place) => (
          <Digit key={place} place={place} value={displayValue} height={height} digitStyle={digitStyle} className={digitClassName} />
        ))}
      </div>
      <div style={{ pointerEvents: "none", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
        
      </div>
    </div>
  );
}
