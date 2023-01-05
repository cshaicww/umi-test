// import React, { useEffect, useState } from 'react';
// import { Button, Checkbox, Form, Input, Space, Select } from 'antd';
// import styles from './index.less';

// const { Option } = Select;

// const IndexPage: React.FC = () => {

//   const [initValue, setInitValue] = useState({ username: 111, password: 222 })

//   const onFinish = () => {
//     setInitValue({
//       username: 333,
//       password: 444
//     })
//   }

//   return (
//     <div className={styles.login}>
//       <Form
//         name="basic"
//         autoComplete="off"
//         initialValues={initValue}
//         onFinish={onFinish}
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           label="Password"
//           hasFeedback
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>
//         <Form.Item
//           name="confirm"
//           label="Confirm Password"
//           dependencies={['password']}
//           hasFeedback
//           rules={[
//             {
//               required: true,
//               message: 'Please confirm your password!',
//             },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue('password') === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(new Error('The two passwords that you entered do not match!'));
//               },
//             }),
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>
//         <Form.Item
//           label="phone"
//           name="phone"
//           rules={[{ required: true, message: 'Please input your phone!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="code"
//         >
//           <Space>
//             <Form.Item
//               name="code"
//               noStyle
//               rules={[{ required: true, message: 'Please input your code!' }]}
//             >
//               <Input />
//             </Form.Item>
//             <Button type="primary">
//               get code
//             </Button>
//           </Space>
//         </Form.Item>
//         <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
//           <Select
//             allowClear
//           >
//             <Option value="male">male</Option>
//             <Option value="female">female</Option>
//             <Option value="other">other</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           noStyle
//           shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
//         >
//           {({ getFieldValue }) =>
//             getFieldValue('gender') === 'other' ? (
//               <Form.Item
//                 name="customizeGender"
//                 label="Customize Gender"
//                 rules={[{ required: true }]}
//               >
//                 <Input />
//               </Form.Item>
//             ) : null
//           }
//         </Form.Item>
//         <Form.Item>
//           <Space>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//             <Button type="primary" htmlType="submit">
//               Reset
//             </Button>
//           </Space>
//         </Form.Item>
//       </Form>
//     </div>

//   )
// }

// export default IndexPage
