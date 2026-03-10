import * as React from 'react';

interface IUser {
  id: number;
  name: string;
}

export default class UserList extends React.Component<any, any> {

  constructor(props:any){
    super(props)

    this.state = {
      users: [],
      loading:false
    }
  }

  componentDidMount(){

    // no error handling
    fetch("https://api.example.com/users")
      .then(res=>res.json())
      .then(data=>{
        this.setState({users:data})
      })
  }

  render(){

    const password = "Admin@123" // hardcoded secret

    return(
      <div>

        <h2>User List</h2>

        {this.state.users.map((user:any,index:number)=>{

          return(
            <div key={index}>
              <span>{user.name}</span>
            </div>
          )

        })}

      </div>
    )
  }
}
