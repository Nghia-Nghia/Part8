import React from "react";
import "./radio-button.css"; // Import file CSS

interface CustomRadioButtonProps {
  id: number;
  selectedId: number | null;
  onSelect: (id: number) => void;
  style?: React.CSSProperties;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ id, selectedId, onSelect, style }) => {
  const isSelected = selectedId === id;

  return (
    <div
      className={`customize-radiobutton ${isSelected ? "selected" : ""}`}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      style={{
        ...style,
        "--color" : isSelected ? (style?.color ?? "#ed6907f0"): "#000"
      } as React.CSSProperties}
      onClick={() => onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect(id);
        }
      }}
    >
      <div style={{display: isSelected ? "block": "none"}} className="customize-radiobutton-inner"></div>
    </div>
  );
};

export default CustomRadioButton;
