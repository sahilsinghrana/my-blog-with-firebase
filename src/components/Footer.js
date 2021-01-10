import "../css/Footer.css";

export default function Footer() {
  let date = new Date();
  return (
    <footer>
      <div className="copyright">
        <span>All rights reserved {date.getFullYear()}</span>
      </div>
    </footer>
  );
}
