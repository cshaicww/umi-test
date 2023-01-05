import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';

const { Option } = Select;
const FormItem = Form.Item;

const FormTest = (props: any) => {
  const { form } = props;
  const [ProductTypeList, setProductTypeList] = useState([{ productType: 'aa', key: 1 }]);
  const [visible, setVisible] = useState(false);

  const onSubmit = () => {
    form.validateFields((errors, values) => {
      if (!errors) {
        console.log('values -', values);
      }

    });
  }

  const handleModalVisible = (flag: boolean) => {
    form.resetFields();
    setVisible(flag)
  }

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Modal框
      </Button>
      <Modal
        width="700px"
        visible={visible}
        onCancel={() => handleModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => handleModalVisible(false)}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={onSubmit}>
            确定
          </Button>,
        ]}
      >
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
            })(<Input placeholder="请输入" />)}
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
              <Select
                placeholder="请选择产品类型"
                style={{ width: '100%' }}
              >
                {ProductTypeList.map(item => (
                  <Option key={item.key} value={item.productType}>
                    {item.productType}
                  </Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem label="发货日期">
              {form.getFieldDecorator('deliveryDate', {
                rules: [
                  {
                    required: true,
                    message: '请输入发货日期',
                  },
                ],
              })(<DatePicker />)}
            </FormItem>
        </Form>
      </Modal>

    </div>

  )
}

export default Form.create({})(FormTest)