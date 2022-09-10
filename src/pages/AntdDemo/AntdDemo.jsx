import React from "react";
import { Button, DatePicker } from "antd";
export default function AntdDemo() {
  return (
    <div className="container">
      demo antd
      <div>
        <DatePicker />
        <Button size="large" block="true" className="mt-5">
          Button click
        </Button>
      </div>
    </div>
  );
}
