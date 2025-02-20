import React from "react";
import { Text, TextField } from "@shopify/polaris";
import { CustomizeModel } from "../../../interfaces/types";
import "./customize-border.css";

interface CustomizeBorderProps {
  customizeModel: CustomizeModel;
  setCustomizeModel: (newModel: CustomizeModel) => void;
}

const LayoutCustomizeBorder: React.FC<CustomizeBorderProps> = ({
  customizeModel,
  setCustomizeModel,
}) => {
  const handleChange = (key: keyof CustomizeModel, value: string) => {
    setCustomizeModel({ ...customizeModel, [key]: Number(value) });
  };

  return (
    <div className="customize-border">
      <Text as="p" variant="headingLg">
        Border
      </Text>
      <div style={{ display: "flex", gap: "20px" }}>
        {[
          { label: "Corner radius", key: "CornerRadius" },
          { label: "Border weight", key: "BorderWeight" },
        ].map(({ label, key }) => (
          <div key={key} style={{ flex: 1 }}>
            <TextField
              label={label}
              type="number"
              value={customizeModel[key as keyof CustomizeModel].toString()}
              onChange={(value) => handleChange(key as keyof CustomizeModel, value)}
              autoComplete="off"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutCustomizeBorder;
