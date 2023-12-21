import { useState } from "react";

export default function DateCard() {
  const [date] = useState(new Date());

  return (
    <>
      <div className="date-card">
        <div className="date">
          <p>{date.toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
}
