
export default function Cube({children}) {
  return (
    <div className="container">
      <div className="cube">
        <div className="face front">
          {children}
        </div>
        <div className="face back"></div>
        <div className="face right face-shoulder"></div>
        <div className="face left face-shoulder"></div>
        <div className="face top  face-side"></div>
        <div className="face bottom face-side"></div>
      </div>
    </div>
  );
}
