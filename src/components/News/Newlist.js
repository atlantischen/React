import React from 'react';
import axios from 'axios';
import { Table, Divider, Button, Modal,Form, Input,Checkbox} from 'antd';
import '../../index'
const { confirm } = Modal;



class Newlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      okText:false,
      visible: false,
      visibleB: false,
      initialValue: {
        name:'',
        sort:'',
        advertisement_node_id:'',
        photo_id:'',
        url:''
      },
     
    };
  }
  showModal = e => {
    if(e.id){
      }else{
        this.setState({
          initialValue: ''
          // console.log(initialValue)
        })
    }
    
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
  componentDidMount() {
    this.init()

  }
  init() {
    axios.get('http://cmovie.holyzq.com/api/admin/v1/advertisements').then(res => {
      console.log(res)
      this.setState({
        dataList: res.data.data
      })
    })
  }
  HandleAdd = (text) => {
    this.setState({
      
      
      visible: true,
    });
    // console.log(this.props.match.params.id)
    // let id = this.props.match.params.id
    axios.get(`http://cmovie.holyzq.com/api/admin/v1/advertisements/${text.id}/edit`).then(res => {
      console.log(res)
      this.setState({
        initialValue: res.data.data.advertisement
        // console.log(initialValue)
      })
    })

    // this.props.history.push(`/NewEdit/${text.id}`)



  }
  HandleDelete = (text) => {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        console.log(text)
        axios.delete(`http://cmovie.holyzq.com/api/admin/v1/advertisements/${text.id}`).then(res => {
          console.log(res)
          this.init()

        })
       
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
   
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
         axios.post(`http://cmovie.holyzq.com/api/admin/v1/advertisements`,values).then(res=>{
          this.init()

         })
         this.props.form.resetFields();  
      }
    });
    
    
  };

  confirm = () => {
   
    this.setState({
      visible: true,
    });
  }
  columns = () => [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '时间',
      dataIndex: 'updated_at',
      key: 'updated_at',
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
    },

    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={this.HandleAdd.bind(this, text)}>编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={this.HandleDelete.bind(this, text)}>删除</a>
        </span>
      ),
    },
  ];


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button onClick={this.confirm}>新增广告</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          
          
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="保存"
          cancelText="取消"
        >
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="名称">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
            initialValue: this.state.initialValue.name
           
          })(<Input/>)}
        </Form.Item>
        <Form.Item label="排序">
          {getFieldDecorator('sort', {
            rules: [{ required: true, message: 'Please input your sort!' }],
            initialValue: this.state.initialValue.sort
            
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
            initialValue: this.state.initialValue.advertisement_node_id
            
          })(<Input />)}
        </Form.Item>
        <Form.Item label="照片ID">
          {getFieldDecorator('photo_id', {
            rules: [{ required: true, message: 'Please input your note!' }],
            initialValue: this.state.initialValue.photo_id
           

          })(<Input />)}
        </Form.Item>
        <Form.Item label="广告地址">
          {getFieldDecorator('url', {
            rules: [{ required: true, message: 'Please input your note!' }],
            initialValue: this.state.initialValue.url
            
          })(<Input />)}
        </Form.Item>
        {/* <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit" onClick={this.showConfirm}>
            Submit
          </Button>
        </Form.Item> */}
      </Form>
        </Modal>
        <Table columns={this.columns()} rowKey={record => record.id} dataSource={this.state.dataList} />
      </div>
    );
  }
}
const WrappedApp = Form.create({ name: 'coordinated' })(Newlist)


export default WrappedApp;