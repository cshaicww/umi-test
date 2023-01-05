import React, { useEffect, useState } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Modal, Input, Select, DatePicker } from 'antd';
import styles from './index.less';

const { Option } = Select;
const FormItem = Form.Item;

const FormTest = (props: any) => {
  const { form } = props;
  const ProductTypeList = [{ productType: 'aa', key: 1 }];

  const onSubmit = (e) => {
    e.preventDefault();
    form.validateFields((errors, values) => {
      if (!errors) {
        console.log('values -', values);
      }
    });
  };

  return (
    <div className={styles.form_test}>
      <Form onSubmit={onSubmit}>
        <FormItem label="车间名称">
          {form.getFieldDecorator('workshopName', {
            rules: [
              {
                required: true,
                whitespace: true,
                message: '请输入车间名称',
              },
              {
                max: 10,
                message: '最多可输入10个字段',
              },
            ],
          })(<Input placeholder="请输入车间名称" />)}
        </FormItem>
        <FormItem label="产品类型">
          {form.getFieldDecorator('productType', {
            rules: [
              {
                required: true,
                message: '请输入产品类型',
              },
            ],
          })(
            <Select placeholder="请选择产品类型" style={{ width: '100%' }}>
              {ProductTypeList.map((item) => (
                <Option key={item.key} value={item.productType}>
                  {item.productType}
                </Option>
              ))}
            </Select>,
          )}
        </FormItem>
        <FormItem label="发货日期">
          {form.getFieldDecorator('deliveryDate', {
            rules: [
              {
                required: true,
                message: '请选择发货日期',
              },
            ],
          })(
            <DatePicker
              style={{ width: '100%' }}
              placeholder="请选择发货日期"
            />,
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Form.create({})(FormTest);
