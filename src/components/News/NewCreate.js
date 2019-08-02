import React from 'react';
import '../../index';
import axios from 'axios'
import { Form, Select, Input, Button,Checkbox ,Modal} from 'antd';


const { confirm } = Modal;




class NewCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    
     };
  }
 
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


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
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
      </div>
    );
  }
}
const WrappedApp = Form.create({ name: 'coordinated' })(NewCreate)
export default WrappedApp;