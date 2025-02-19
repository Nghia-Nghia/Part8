import './App.css'
import {AppProvider,Button,Text,Checkbox,RadioButton} from '@shopify/polaris';
import {
  ArrowLeftIcon
} from '@shopify/polaris-icons';
import enTranslations from "@shopify/polaris/locales/en.json";
import { useCallback, useState } from 'react';
import VolumeDiscount from './interfaces/entities/volume-discount';

function App() {
  const [volumeDiscounts, setVolumeDiscounts] = useState<VolumeDiscount[]|null>([
    {
      id: 1,
      title: 'Buy 1',
      subtitle: 'Standard price',
      quantity: 1,
      discountValue: 50,
      label: null,
      isDefault:false
    },
    {
      id: 2,
      title: 'Buy 2',
      subtitle: 'Save 10%',
      quantity: 2,
      discountValue: 60,
      label: 'Popular',
      isDefault:true
    },
    {
      id: 3,
      title: 'Buy 3',
      subtitle: 'Save 20%',
      quantity: 3,
      discountValue: 70,
      label: null,
      isDefault:false
    }
  ]);
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback(
    (newChecked: boolean) => setChecked(newChecked),
    [],
  );

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
          <div style={{flex:3}}>
            <div className='pricing'>
              <Text as="p" variant="headingLg">Pricing</Text>
              <div className='checkboxs'>
                <Checkbox
                  label="Show prices per item"
                  checked={checked}
                  onChange={handleChange}
                />
                <Checkbox
                  label="Include compare-at price"
                  checked={checked}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='customize'>
              <div className='customize-head'>
                <Text as="p" variant="headingLg">Customize</Text>
              </div>
              <div className='customize-border'>
                <Text as="p" variant="headingLg">Border</Text>
              </div>
              <div className='customize-color'>
                <Text as="p" variant="headingLg">Color</Text>
              </div>
              <div className='customize-typography'>
                <Text as="p" variant="headingLg">Typography</Text>
              </div>
            </div>
          </div>
          <div style={{flex:2}}>
            <div className='preview'>
              <Text as="p" variant="headingLg">Preview</Text>
              <div className="preview-title">
                <Text as="p" variant="headingXl">Bundle and save</Text>
              </div>
              <Text as="p" variant="bodyLg">Apply for all products in store</Text>
              <div className="preview-discounts">
                {volumeDiscounts ? (
                  volumeDiscounts.map((discount) => (
                    <div className="preview-discounts-item" key={discount.id}>
                      <div className="preview-discounts-item-left">
                      <div className='customize-radiobutton' onClick={() =>{
                          handleSelectDiscount(discount.id);
                        }}>
                          <div className="customize-radiobutton-inner"></div>
                      </div>
                      </div>
                      <div></div>
                    </div>
                  ))
                ) : (<p>Loading</p>)}
              </div>
            </div>
          </div>
        </div>
       </div>
    </AppProvider>
   
  )
}

export default App
