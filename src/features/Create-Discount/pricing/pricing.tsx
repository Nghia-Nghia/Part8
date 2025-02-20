import React from "react";
import { Text, Checkbox } from "@shopify/polaris";
import { PricingOptions } from "../../../interfaces/types";
import "./pricing.css";
interface CustomizePricingProps {
  checked: PricingOptions;
  setChecked: (newChecked: PricingOptions) => void;
}

const LayoutPricing: React.FC<CustomizePricingProps> = ({
  checked,
  setChecked,
}) => {
  return (
    <div className="pricing">
      <Text as="p" variant="headingLg">
        Pricing
      </Text>
      <div className="checkboxs">
        <Checkbox
          label="Show prices per item"
          checked={checked.IsShowPricePerItem}
          onChange={(value) => setChecked({ ...checked, IsShowPricePerItem: value })}
        />
        <Checkbox
          label="Include compare-at price"
          checked={checked.IsIncludeCompareAtPrice}
          onChange={(value) => setChecked({ ...checked, IsIncludeCompareAtPrice: value })}
        />
      </div>
    </div>
  );
};

export default LayoutPricing;
