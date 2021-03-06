import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default function DemoComponent_message_loading() {
return(
  <Button onClick={success}>Display a loading indicator</Button>
);
};

export const demo = <DemoComponent_message_loading key="DemoComponent_message_loading" />;
