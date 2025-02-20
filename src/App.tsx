import './App.css'
import { AppProvider, Button, Text} from '@shopify/polaris';
import {
  ArrowLeftIcon
} from '@shopify/polaris-icons';
import enTranslations from "@shopify/polaris/locales/en.json";
import {useState } from 'react';
import VolumeDiscount from './interfaces/entities/volume-discount';
import { CustomizeModel, PricingOptions } from './interfaces/types';
import LayoutCustomizeBorder from './features/Create-Discount/customize-border/customize-border';
import LayoutCustomizeColor from './features/Create-Discount/Customize-color/customize-color';
import LayoutCustomizeTypography from './features/Create-Discount/customize-typography/customize-typography';
import PreviewDiscounts from './features/Create-Discount/preview-discount/preview-discount';
import LayoutPricing from './features/Create-Discount/pricing/pricing';

function App() {
  const [volumeDiscounts, setVolumeDiscounts] = useState<VolumeDiscount[] | null>([
    {
      id: 1,
      title: 'Buy 1',
      subtitle: 'Standard price',
      quantity: 1,
      discountValue: 50,
      label: null,
      isDefault: false
    },
    {
      id: 2,
      title: 'Buy 2',
      subtitle: 'Save 10%',
      quantity: 2,
      discountValue: 60,
      label: 'Popular',
      isDefault: true
    },
    {
      id: 3,
      title: 'Buy 3',
      subtitle: 'Save 20%',
      quantity: 3,
      discountValue: 70,
      label: null,
      isDefault: false
    }
  ]);
  const [customizeModel, setCustomizeModel] = useState<CustomizeModel>({
    CornerRadius: 4,
    BorderWeight: 1,
    MainTitleFontSize: 16,
    DescriptionFontSize:14,
    BarsTitleFontSize: 14,
    BarsSubtitleFontSize: 14,
    MainTitle: '#000000',
    Description: '#000000',
    BarsPrimaryColor: '#ee4d2d',
    BarsSubtitle: '#000000',
    BarsBackground: '#ffffff',
    BarsLabelBackground: "#ff1111",
    BarSelectedBackground: "#ffffff"
  });

  const [checked, setChecked] = useState<PricingOptions>({
    IsShowPricePerItem:false,
    IsIncludeCompareAtPrice:false
  });

  const handleSelectDiscount = (discountId: number) => {
    console.log(discountId);
    setVolumeDiscounts(volumeDiscounts ? volumeDiscounts.map(discount => {
      return {
        ...discount,
        isDefault: discount.id === discountId
      }
    }) : null)
  };
  return (
    <AppProvider i18n={enTranslations}>
      <div className='container'>
        <div className='head'>
          <Button size='large' icon={ArrowLeftIcon} accessibilityLabel="Add theme" />
          <Text as="p" variant="headingXl">Volume discount settings</Text>
        </div>
        <div className='content'>
          <div style={{ flex: 3 }}>
            <LayoutPricing
              checked={checked}
              setChecked={setChecked}
            />
            <div className='customize'>
              <div className='customize-head'>
                <Text as="p" variant="headingLg">Customize</Text>
              </div>
              <LayoutCustomizeBorder 
                customizeModel={customizeModel}
                setCustomizeModel={setCustomizeModel}
              />
              <LayoutCustomizeColor 
                customizeModel={customizeModel}
                setCustomizeModel={setCustomizeModel}
              />
              <LayoutCustomizeTypography 
                customizeModel={customizeModel}
                setCustomizeModel={setCustomizeModel}
              />
            </div>
          </div>
          <div style={{ flex: 2 }}>
          <PreviewDiscounts
              customizeModel={customizeModel}
              volumeDiscounts={volumeDiscounts}
              handleSelectDiscount={handleSelectDiscount}
            />
          </div>
        </div>
      </div>
    </AppProvider>

  )
}

export default App
