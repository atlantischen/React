import React from 'react';
import '../index.css';
// import logo from '../assets/image/1.jpg'
class News extends React.Component {
  constructor() {
    super();  //    用于父子间传值
    this.state = {
      name: '张三',
      color: 'red',
      list: [
        {new:'111'},
        {new:'222'},
        {new:'333'},
        {new:'444'},
      ],
      userName:''
    }

  }
  getName=()=>{
    alert(this.state.name)
  }
  getName(){
    alert(this.state.name)
  }
  changeValue(){
    this.setState({
      name: '李四',
      
    })
  }
  changeInput=(e)=>{
   this.setState({
    userName:e.target.value
   })
  }
  handleClick=()=>{
    console.log(this.state.userName)
  }
  

  render() {
    let lists=this.state.list.map(function(value,key){
              return<li key={key}>{value.new}</li>
    })
    return (
      <div>
             <h2>{this.state.name}</h2>
        <div className='red'>我是News</div>
        <div className={this.state.color}>我是News111</div>
        <div style={{ color: 'red' }}>我是News222</div>
        {/* <img src={logo} /> */}
        
        <button onClick={this.getName}>点击</button>
        <button onClick={this.getName.bind(this)}>点击111</button>
        <button onClick={this.changeValue.bind(this)}>改变</button>
        <img src={require('../assets/image/1.jpg')} />

        {lists}


         {/* 获取input里面的值 */}
        <input onChange={this.changeInput} /><button onClick={this.handleClick}>获取input的值</button>
        
      </div>

    )


  }



}

export default News