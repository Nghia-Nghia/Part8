import React from "react";
import { Text } from "@shopify/polaris"; // Giả sử bạn đang sử dụng Shopify Polaris
import { CustomizeModel } from "../../../interfaces/types";
import VolumeDiscount from "../../../interfaces/entities/volume-discount";
import CustomRadioButton from "../../../components/radio-button/radio-button";
import "./preview-discount.css"


interface PreviewDiscountsProps {
  customizeModel: CustomizeModel;
  volumeDiscounts?: VolumeDiscount[]|null|undefined;
  handleSelectDiscount: (id: number) => void;
}

const PreviewDiscounts: React.FC<PreviewDiscountsProps> = ({
  customizeModel,
  volumeDiscounts,
  handleSelectDiscount,
}) => {
  return (
    <div className="preview">
      <Text as="p" variant="headingLg">
        Preview
      </Text>
      <div className="preview-title">
        <p
          style={{
            fontSize: `${customizeModel.MainTitleFontSize}px`,
            fontWeight: "bold",
            color: customizeModel.MainTitle,
          }}
        >
          Bundle and save
        </p>
      </div>
      <p
        style={{
          fontSize: `${customizeModel.DescriptionFontSize}px`,
          color: customizeModel.Description,
        }}
      >
        Apply for all products in store
      </p>
      <div className="preview-discounts">
        {volumeDiscounts ? (
          volumeDiscounts.map((discount) => (
            <div
              className="preview-discounts-item"
              key={discount.id}
              style={{
                border: discount.isDefault
                  ? `${customizeModel.BorderWeight}px solid ${customizeModel.BarsPrimaryColor}`
                  : "1px solid #e5e5e5",
                backgroundColor: discount.isDefault
                  ? customizeModel.BarSelectedBackground
                  : customizeModel.BarsBackground,
                borderRadius: `${customizeModel.CornerRadius}px`,
              }}
            >
              <div className="preview-discounts-item-left">
                <CustomRadioButton
                  id={discount.id}
                  selectedId={
                    volumeDiscounts.find((d) => d.isDefault)?.id ?? -1
                  }
                  style={{ color: customizeModel.BarsPrimaryColor }}
                  onSelect={handleSelectDiscount}
                />
                <div>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <p
                      style={{
                        fontSize: `${customizeModel.BarsTitleFontSize}px`,
                        color: customizeModel.BarsPrimaryColor,
                      }}
                    >
                      {discount.title}
                    </p>
                    {discount.label && (
                      <div
                        style={{
                          borderRadius: "10px",
                          textAlign: "center",
                          padding: "0px 5px",
                          backgroundColor: customizeModel.BarsLabelBackground,
                          color: "#fff",
                          fontSize: "11px",
                        }}
                      >
                        {discount.label}
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: `${customizeModel.BarsSubtitleFontSize}px`,
                      color: customizeModel.BarsSubtitle,
                      marginTop: "8px",
                    }}
                  >
                    {discount.subtitle}
                  </p>
                </div>
              </div>
              <div className="preview-discounts-item-right">
                <p
                  style={{
                    fontSize: `${customizeModel.BarsTitleFontSize}px`,
                    color: customizeModel.BarsPrimaryColor,
                  }}
                >
                  {(150 - discount.discountValue) * discount.quantity}đ
                </p>
                <p
                  style={{
                    fontSize: `${customizeModel.BarsSubtitleFontSize}px`,
                    textDecoration: "line-through",
                    marginTop: "8px",
                  }}
                >
                  {150 * discount.quantity}đ
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default PreviewDiscounts;
