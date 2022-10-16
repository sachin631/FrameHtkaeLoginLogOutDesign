import Switch from 'react-js-switch';
import { useState } from 'react';

export default function SwitchButton() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div className="w-[32px] h-[16px]">
      <Switch value={isSwitchOn} onChange={switch_onChange_handle} />
    </div>
  );
}
