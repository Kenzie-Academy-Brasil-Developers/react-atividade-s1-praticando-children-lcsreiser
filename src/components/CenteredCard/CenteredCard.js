import "./styles.css";

function CenteredCard({ children }) {
  return (
    <div className="divCenter">
      <span>{children}</span>
    </div>
  );
}

export default CenteredCard;
