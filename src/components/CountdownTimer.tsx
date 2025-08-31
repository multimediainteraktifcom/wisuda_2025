import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Target date: September 27, 2025, 08:00 WIB
  const targetDate = new Date("2025-09-27T08:00:00+07:00");
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white shadow-medium rounded-2xl p-4 text-center min-w-[80px]">
      <div className="text-2xl md:text-4xl font-bold text-primary mb-1">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-6 md:p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Menuju Hari Wisuda
        </h3>
        <p className="text-text-secondary">
          Sabtu, 27 September 2025 • 08:00 - 12:00 WIB
        </p>
      </div>
      
      <div className="flex justify-center gap-4 flex-wrap">
        <TimeBox value={timeLeft.days} label="Hari" />
        <TimeBox value={timeLeft.hours} label="Jam" />
        <TimeBox value={timeLeft.minutes} label="Menit" />
        <TimeBox value={timeLeft.seconds} label="Detik" />
      </div>
    </div>
  );
};

export default CountdownTimer;