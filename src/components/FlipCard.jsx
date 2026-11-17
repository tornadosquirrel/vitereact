import "./FlipCard.css";

function FlipCard({ children }) {
  return (
    <div className="flip-card">
      {children}
    </div>
  );
}

export default FlipCard;