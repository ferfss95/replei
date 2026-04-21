import mandalaImage from "figma:asset/f75fe128860ddf7d9f38ecd02050b027b9b97e8e.png";

export function MandalaComplete() {
  return (
    <img 
      src={mandalaImage} 
      alt="Mandala de análise" 
      className="w-full h-full object-contain"
    />
  );
}
