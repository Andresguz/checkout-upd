import React from 'react';
import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  useSettings,
  useExtensionEditor,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);
render('Checkout::Dynamic::Render',() => <App/>)
function App(){
  const {message}= useSettings();
  const isInsideCheckoutEditor= useExtensionEditor();

  <Banner title='Note' status='info'>Hello MMMM  </Banner>
}
function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <Banner title="checkout upd">
      {translate('gaaaa', {target: extension.target})}
      Hello world
    
    </Banner>
  );
}