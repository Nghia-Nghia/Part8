import React from "react";
import { Text, TextField } from "@shopify/polaris";
import { CustomizeModel } from "../../../interfaces/types";
import "./customize-color.css";

interface CustomizeColorPickerProps {
  customizeModel: CustomizeModel;
  setCustomizeModel: (newModel: CustomizeModel) => void;
}

const LayoutCustomizeColor: React.FC<CustomizeColorPickerProps> = ({
  customizeModel,
  setCustomizeModel,
}) => {
  const handleChange = (key: keyof CustomizeModel, value: string) => {
    setCustomizeModel({ ...customizeModel, [key]: value });
  };

  return (
    <div className="customize-color">
      <Text as="p" variant="headingLg">
        Color
      </Text>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {[
          { label: "Main title", key: "MainTitle" },
          { label: "Description", key: "Description" },
          { label: "Bars primary color", key: "BarsPrimaryColor" },
          { label: "Bars subtitle", key: "BarsSubtitle" },
          { label: "Bars background", key: "BarsBackground" },
          { label: "Bars label background", key: "BarsLabelBackground" },
        ].map(({ label, key }) => (
          <div
            key={key}
            style={{
              width: "48%",
              display: "flex",
              gap: "10px",
              alignItems: "end",
            }}
          >
            <div style={{ width: "92%" }}>
              <TextField
                label={label}
                value={customizeModel[key as keyof CustomizeModel] as string}
                onChange={(value) => handleChange(key as keyof CustomizeModel, value)}
                autoComplete="off"
              />
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                border: "1px solid #cfcccc",
                backgroundColor: customizeModel[key as keyof CustomizeModel] as any,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutCustomizeColor;
