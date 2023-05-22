// import { Checkbox, Col, Row,Rate } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
const App1 = () => (
 <>
{/*  
 <div>Uzbekiston poytaxti qayer</div>
 <Checkbox.Group
    style={{
      width: '100%',
    }}
    onChange={onChange}
  >
    <Row>
      <Col span={8}>
        <Checkbox value="A">Toshkent</Checkbox>
      </Col>
  
      <Col span={8}>
        <Checkbox value="B">Namangan </Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">Andijon</Checkbox>
      </Col>
     
      
    </Row>
  </Checkbox.Group>
  <Rate allowHalf defaultValue={2.5} />
  <Rate allowHalf defaultValue={2.5} />
  <Rate allowHalf defaultValue={2.5} />
  <Rate allowHalf defaultValue={2.5} /> */}

  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
 </>
);
export default App1;