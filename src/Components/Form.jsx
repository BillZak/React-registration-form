import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            email : '',
            firstname : '',
            lastname : '',
            number : '',
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    };
    
   

   handleChange(e){
       const value = e.target.value;
       const name = e.target.name;
       this.setState({ [name]: value});
   }

   handleSubmit(e){
       e.preventDefault();
         console.log(this.state.email)
         console.log(this.state.firstname)
         console.log(this.state.lastname)
         console.log(this.state.number)
   }




    render() {
        return (
        <form onSubmit={this.handleSubmit}>
                    <div className="Email">
                    <label>Email address<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="Email" name="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email"/>
                    </div>
                    <div className="name">
                    <label>First Name<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Your answer"/>
                    </div>
                    <div className="name">
                    <label>Last Name<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Your answer"/>
                    </div>
                    <div className="gender">
                    <label>Gender<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="radio" name="choose" value="Male"/><label>Male</label><br/>
                    <input type="radio" name="choose" value="Female"/><label>Female</label><br/><br/>
                    </div>
                    <div className="tel">
                    <label>Phone Number<span style={{color: 'red'}}>*</span></label><br/>
                    <input type="tel" name="number" id="number" value={this.state.number} onChange={this.handleChange}  placeholder="Your answer"/>  	
                    </div>
                    <label style={{color: 'grey',marginLeft: '20px'}}>A copy of your responses 
                    will be emailed to the address you provided</label><br/><br/>
                    <div className="greenbar">
                    <label style={{background: 'limegreen',color: 'limegreen',borderRadius: '8px',
                    margin: '20px',marginTop: '20px'}}>-------------------------------------------
                    -----------------</label><label>Page 1 of 1</label>
                    </div> <br/>
                    <button style={{background: 'dodgerblue',width: '10%',height: '30px',
                    margin: '20px',border:['1px' ,'dodgerblue' ,'solid'],borderRadius: '6px',
                    color: 'white'}}>submit</button><br/>
                    <label style={{color: 'grey',marginLeft: '20px',fontSize: '15px'}}>
                        Never submit password through Google forms</label>
                    
	    </form>
        );
    }
}

export default Form;
