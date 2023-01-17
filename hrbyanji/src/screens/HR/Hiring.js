import { Radio, Select, Tabs, Typography } from 'antd';
import Form from 'antd/es/form/Form';
import React, { useState } from 'react';
import styled from 'styled-components';
import L1Form from './L1Form';
import L2Form from './L2Form';

const Container = styled.div`
  padding: 24px;
`;
const FormItem = Form.Item;
export const EmployeeHiring = () => {
  const [activeKey, setActiveKey] = useState('L1');
  const [isOnline, setIsOnline] = useState(false);
  const handleSubmit = (key) => {
    setActiveKey(key);
  };
  const onValuesChange = (changedFields) => {
    if (changedFields['online']) {
      if (changedFields.online === 'online') {
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
    }
  };
  const items = [
    {
      key: 'L1',
      label: 'L1 round',
      children: <L1Form setActiveKey={handleSubmit} />,
    },
    {
      key: 'L2',
      label: 'L2 round',
      children: <L2Form />,
    },
  ];
  return (
    <Container>
      <Typography.Title level={3}>Employee Hiring</Typography.Title>
      <div className="form-container">
        <Form onValuesChange={onValuesChange}>
          <FormItem name="profile_source" label="Source">
            <Select
              style={{
                width: 120,
              }}
              options={[
                {
                  value: 'Naukri',
                  label: 'Naukri',
                },
                {
                  value: 'LinkedIn',
                  label: 'LinkedIn',
                },
              ]}
            />
          </FormItem>
          <FormItem name="online">
            <Radio.Group>
              <Radio value={'online'}>online</Radio>
              <Radio value={'offline'}>offline</Radio>
            </Radio.Group>
          </FormItem>
        </Form>
        {isOnline ? (
          <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)} items={items}></Tabs>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};
