import React ,{Component} from 'react';



class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username:'222222'
     };
  }
  changeInput=()=>{
 let val=this.refs.username.value;
 this.setState({
   username:val
 })
  }
  handleClick=()=>{
    // console.log(this.state.username)
  }
  changeKeyUp=(e)=>{
  //  console.log(e.keyCode);
   if(e.keyCode == 13){
     alert(e.target.value)
   }

  }
  render() {
    return (
      <div>
        我是List组件
        
         {/* 获取input里面的值 */}
         <input ref="username" onChange={this.changeInput} /><button onClick={this.handleClick}>获取input的值</button>
         <br/>
          {/* 键盘事件 */}
         <input  onKeyUp={this.changeKeyUp} /><button onClick={this.handleClick}>获取input的值</button>
         <br/>
          {/* 双向数据绑定 */}
          <input type="text" value={this.state.username} onChange={this.changeInput}/>
          {this.state.username}
      </div>
    )
  }
}

export default List;