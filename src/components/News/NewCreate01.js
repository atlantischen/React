import React from 'react';
import '../../index';
import axios from 'axios'
import { Form, Select, Input, Button,Checkbox ,Modal} from 'antd';
const { Option } = Select;

const { confirm } = Modal;




class NewCreate01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false
     };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
 
  showConfirm=()=> {
    confirm({
      title: 'Do you Want to delete these items?',
      content: '恭喜老铁，新增成功！！！',
      onOk:()=> {
        this.props.history.push('/Newlist')
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
         axios.post(`http://cmovie.holyzq.com/api/admin/v1/advertisements`,values).then(res=>{
          

         })
      }
    });
  };
  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      
    );
  };
  // handleSelectChange = value => {
   
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="名称">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(<Input/>)}
        </Form.Item>
        <Form.Item label="排序">
          {getFieldDecorator('sort', {
            rules: [{ required: true, message: 'Please input your sort!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item >
          <Checkbox style={{marginLeft:150}}  checked={this.state.checkNick} onChange={this.handleChange}>
            sort is required
          </Checkbox>
        </Form.Item>
        <Form.Item label="广告序号">
          {getFieldDecorator('advertisement_node_id', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="照片ID">
          {getFieldDecorator('photo_id', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="广告地址">
          {getFieldDecorator('url', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit" onClick={this.showConfirm}>
            Submit
          </Button>
        </Form.Item>
      </Form>
        </Modal>
         
      </div>
    );
  }
}
const WrappedApp = Form.create({ name: 'coordinated' })(NewCreate01)
export default WrappedApp;