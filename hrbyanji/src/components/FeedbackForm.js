import { Button, Col, Input, Row, Select, Form } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
`;
const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
export const FeedBackForm = ({ title, onFinish, hasNext }) => {
  const [form] = Form.useForm();
  //   const online = Form.useWatch('online', form);

  return (
    <div className="form-container">
      <Typography.Title level={5}>{title}</Typography.Title>
      <Form
        {...formItemLayout}
        initialValues={{ mode: 'offline', profile_source: 'Naukri' }}
        form={form}
        style={{ width: 500 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="interviewer_name"
          label="Interviewer Name"
          //   rules={[
          //     {
          //       required: true,
          //       message: 'Please input Name!',
          //     },
          //   ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="designation"
          label="Designation"
          //   rules={[
          //     {
          //       required: true,
          //       message: 'Please input Name!',
          //     },
          //   ]}
        >
          <Input />
        </Form.Item>
        <FormItem name="status" label="Status">
          <Select
            style={{
              width: 120,
            }}
            options={[
              {
                value: 'selected',
                label: 'Selected',
              },
              {
                value: 'rejected',
                label: 'Rejected',
              },
              {
                value: 'hold',
                label: 'Hold',
              },
            ]}
          />
        </FormItem>

        <Row justify={'end'}>
          <Col>
            <FormItem justify={'end'}>
              <Button type="primary" htmlType="submit">
                Submit{hasNext ? ' & Next' : ''}
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
