import React ,{Component} from 'react';

 class Home extends Component{



constructor(){
    super();
    this.state={
      name:'张三'
    }

  }
  
  render(){

    return <div>
      你好react
      <p>我是:{this.state.name}</p>
      </div>
  }

}
export default Home;