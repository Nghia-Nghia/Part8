import './App.css'
import { AppProvider, Button, Text, Checkbox, TextField } from '@shopify/polaris';
import {
  ArrowLeftIcon
} from '@shopify/polaris-icons';
import enTranslations from "@shopify/polaris/locales/en.json";
import {useState } from 'react';
import VolumeDiscount from './interfaces/entities/volume-discount';
import CustomRadioButton from './components/radio-button/radio-button';
import { CustomizeModel, PricingOptions } from './interfaces/types';

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

  const renderPreviewDiscounts = () => (<div className='preview'>
    <Text as="p" variant="headingLg">Preview</Text>
    <div className="preview-title">

      <p style={{
        fontSize: `${customizeModel.MainTitleFontSize}px`,
        fontWeight: 'bold',
        color: customizeModel.MainTitle
      }}>Bundle and save</p>
    </div>
    <p style={{
      fontSize: `${customizeModel.DescriptionFontSize}px`,
      color: customizeModel.Description
    }}>Apply for all products in store</p>
    <div className="preview-discounts">
      {volumeDiscounts ? (
        volumeDiscounts.map((discount) => (
          <div className="preview-discounts-item" key={discount.id} 
          style={{ 
            border: discount.isDefault ? `${customizeModel.BorderWeight}px solid ${customizeModel.BarsPrimaryColor}` : '1px solid #e5e5e5',
            backgroundColor: discount.isDefault ? customizeModel.BarSelectedBackground : customizeModel.BarsBackground,
            borderRadius: `${customizeModel.CornerRadius}px`,
             }}>
            <div className="preview-discounts-item-left">
              <CustomRadioButton
                id={discount.id}
                selectedId={volumeDiscounts.find(discount => discount.isDefault)?.id ?? - 1}
                style={{ color: customizeModel.BarsPrimaryColor }}
                onSelect={handleSelectDiscount}
              />
              <div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <p style={{ fontSize: `${customizeModel.BarsTitleFontSize}px`, color: customizeModel.BarsPrimaryColor }}>{discount.title}</p>
                  <div style={{
                    borderRadius: '10px',
                    textAlign: 'center',
                    padding: '0px 5px',
                    display: discount.label ? 'block' : 'none',
                    backgroundColor: customizeModel.BarsLabelBackground,
                    color: '#fff',
                    fontSize: '11px'
                  }}>{discount.label}</div>
                </div>
                <p style={{ fontSize: `${customizeModel.BarsSubtitleFontSize}px`, color: customizeModel.BarsSubtitle,marginTop:"8px" }}>{discount.subtitle}</p>
              </div>
            </div>
            <div className='preview-discounts-item-right'>
              <p style={{ fontSize: `${customizeModel.BarsTitleFontSize}px`, color: customizeModel.BarsPrimaryColor }}>{(150 - discount.discountValue) * discount.quantity}đ</p>
              <p style={{  fontSize: `${customizeModel.BarsSubtitleFontSize}px`, textDecoration: "line-through",marginTop:"8px" }}>{150 * discount.quantity}đ</p>
            </div>
          </div>
        ))
      ) : (<p>Loading</p>)}
    </div>
  </div>)
  const renderCustomizeColor = () => (
    <div className='customize-color'>
                  <Text as="p" variant="headingLg">Color</Text>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ width: '48%',display:"flex",gap:"10px", alignItems:"end" }}>
                      <div style={{width:"92%"}}>
                        <TextField
                          label="Main title"
                          value={customizeModel.MainTitle}
                          onChange={(value) => setCustomizeModel({ ...customizeModel, MainTitle: value })}
                          autoComplete="off"
                        />
                      </div>
                      <div style={{width:"32px",height:"32px",border:"1px solid #cfcccc",backgroundColor:customizeModel.MainTitle}}></div>
                    </div>
                    <div style={{ width: '48%',display:"flex",gap:"10px", alignItems:"end" }}>
                      <div style={{width:"92%"}}>
                        <TextField
                          label="Description"
                          value={customizeModel.Description}
                          onChange={(value) => setCustomizeModel({ ...customizeModel, Description: value })}
                          autoComplete="off"
                        />
                      </div>
                      <div style={{width:"32px",height:"32px",border:"1px solid #cfcccc",backgroundColor:customizeModel.Description}}></div>
                  </div>
                    <div style={{ width: '48%',display:"flex",gap:"10px", alignItems:"end" }}>
                      <div style={{width:"92%"}}>
                        <TextField
                          label="Bars primary color"
                          value={customizeModel.BarsPrimaryColor}
                          onChange={(value) => setCustomizeModel({ ...customizeModel, BarsPrimaryColor: value })}
                          autoComplete="off"
                        />
                      </div>
                      <div style={{width:"32px",height:"32px",border:"1px solid #cfcccc",backgroundColor:customizeModel.BarsPrimaryColor}}></div>
                    </div>
                    <div style={{ width: '48%',display:"flex",gap:"10px", alignItems:"end" }}>
                      <div style={{width:"92%"}}>
                        <TextField
                          label="Bars subtitle"
                          value={customizeModel.BarsSubtitle}
                          onChange={(value) => setCustomizeModel({ ...customizeModel, BarsSubtitle: value })}
                          autoComplete="off"
                        />
                      </div>
                      <div style={{width:"32px",height:"32px",border:"1px solid #cfcccc",backgroundColor:customizeModel.BarsSubtitle}}></div>
                    </div>
                    <div style={{ width: '48%',display:"flex",gap:"10px", alignItems:"end" }}>
                      <div style={{width:"92%"}}>
                        <TextField
                          label="Bars background"
                          value={customizeModel.BarsBackground}
                          onChange={(value) => setCustomizeModel({ ...customizeModel, BarsBackground: value })}
                          autoComplete="off"
                        />
                      </div>
                      <div style={{width:"32px",height:"32px",border:"1px solid #cfcccc",backgroundColor:customizeModel.BarsBackground}}></div>
                    </div>
                    <div style={{ width: '48%',display:"flex",gap:"10px", alignItems:"end" }}>
                      <div style={{width:"92%"}}>
                        <TextField
                          label="Bars label background"
                          value={customizeModel.BarsLabelBackground}
                          onChange={(value) => setCustomizeModel({ ...customizeModel, BarsLabelBackground: value })}
                          autoComplete="off"
                        />
                      </div>
                      <div style={{width:"32px",height:"32px",border:"1px solid #cfcccc",backgroundColor:customizeModel.BarsLabelBackground}}></div>
                    </div>
                  </div>
                </div>
  )
  const renderCustomizeTypography = () => (
    <div className='customize-typography'>
      <Text as="p" variant="headingLg">Typography</Text>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{  width: '48%', position: 'relative' }}>
          <TextField
            label="Main title font size"
            type="number"
            value={customizeModel.MainTitleFontSize}
            onChange={(value) => setCustomizeModel({ ...customizeModel, MainTitleFontSize: value })}
            autoComplete="off"
          />
          <span style={{position:"absolute",top:28,right:22,zIndex:30}}>px</span>
        </div>
        <div style={{  width: '48%', position: 'relative' }}>
          <TextField
            label="Description font size"
            type="number"
            value={customizeModel.DescriptionFontSize}
            onChange={(value) => setCustomizeModel({ ...customizeModel, DescriptionFontSize: value })}
            autoComplete="off"
          />
          <span style={{position:"absolute",top:28,right:22,zIndex:30}}>px</span>
        </div>
        <div style={{  width: '48%', position: 'relative' }}>
          <TextField
            label="Bars title font size"
            type="number"
            value={customizeModel.BarsTitleFontSize}
            onChange={(value) => setCustomizeModel({ ...customizeModel, BarsTitleFontSize: value })}
            autoComplete="off"
          />
          <span style={{position:"absolute",top:28,right:22,zIndex:30}}>px</span>
        </div>
        <div style={{  width: '48%', position: 'relative' }}>
          <TextField
            label="Bars subtitle font size"
            type="number"
            value={customizeModel.BarsSubtitleFontSize}
            onChange={(value) => setCustomizeModel({ ...customizeModel, BarsSubtitleFontSize: value })}
            autoComplete="off"
          />
          <span style={{position:"absolute",top:28,right:22,zIndex:30}}>px</span>
        </div>
      </div>
    </div>
  );
  const renderCustomizeBorder = () => (
<div className='customize-border'>
                <Text as="p" variant="headingLg">Border</Text>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <TextField
                      label="Corner radius"
                      type="number"
                      value={customizeModel.CornerRadius}
                      onChange={(value) => setCustomizeModel({ ...customizeModel, CornerRadius: value })}
                      autoComplete="off"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <TextField
                      label="Border weight"
                      type="number"
                      value={customizeModel.BorderWeight}
                      onChange={(value) => setCustomizeModel({ ...customizeModel, BorderWeight: value })}
                      autoComplete="off"
                    />
                  </div>
                  
                </div>
              </div>
  );
  const renderCustomizePricing = () => (
<div className='pricing'>
              <Text as="p" variant="headingLg">Pricing</Text>
              <div className='checkboxs'>
                <Checkbox
                  label="Show prices per item"
                  checked={checked.IsShowPricePerItem}
                  onChange={(value) => {
                    setChecked({ ...checked, IsShowPricePerItem: value });
                  }}
                />
                <Checkbox
                  label="Include compare-at price"
                  checked={checked.IsIncludeCompareAtPrice}
                  onChange={(value) => {
                    setChecked({ ...checked, IsIncludeCompareAtPrice: value });
                  }}
                />
              </div>
            </div>
  );
  return (
    <AppProvider i18n={enTranslations}>
      <div className='container'>
        <div className='head'>
          <Button size='large' icon={ArrowLeftIcon} accessibilityLabel="Add theme" />
          <Text as="p" variant="headingXl">Volume discount settings</Text>
        </div>
        <div className='content'>
          <div style={{ flex: 3 }}>
            {renderCustomizePricing()}
            <div className='customize'>
              <div className='customize-head'>
                <Text as="p" variant="headingLg">Customize</Text>
              </div>
              {renderCustomizeBorder()}
              {renderCustomizeColor()}
              {renderCustomizeTypography()}
            </div>
          </div>
          <div style={{ flex: 2 }}>
            {renderPreviewDiscounts()}
          </div>
        </div>
      </div>
    </AppProvider>

  )
}

export default App
