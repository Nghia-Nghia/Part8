import React from "react";
import { Text, TextField } from "@shopify/polaris";
import { CustomizeModel } from "../../../interfaces/types";
import "./customize-typography.css";
interface CustomizeTypographyProps {
  customizeModel: CustomizeModel;
  setCustomizeModel: (newModel: CustomizeModel) => void;
}

const LayoutCustomizeTypography: React.FC<CustomizeTypographyProps> = ({
  customizeModel,
  setCustomizeModel,
}) => {
  const handleChange = (key: keyof CustomizeModel, value: string) => {
    setCustomizeModel({ ...customizeModel, [key]: Number(value) });
  };

  return (
    <div className="customize-typography">
      <Text as="p" variant="headingLg">
        Typography
      </Text>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {[
          { label: "Main title font size", key: "MainTitleFontSize" },
          { label: "Description font size", key: "DescriptionFontSize" },
          { label: "Bars title font size", key: "BarsTitleFontSize" },
          { label: "Bars subtitle font size", key: "BarsSubtitleFontSize" },
        ].map(({ label, key }) => (
          <div
            key={key}
            style={{
              width: "48%",
              position: "relative",
            }}
          >
            <TextField
              label={label}
              type="number"
              value={customizeModel[key as keyof CustomizeModel].toString()}
              onChange={(value) => handleChange(key as keyof CustomizeModel, value)}
              autoComplete="off"
            />
            <span
              style={{
                position: "absolute",
                top: 28,
                right: 22,
                zIndex: 30,
              }}
            >
              px
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutCustomizeTypography;
