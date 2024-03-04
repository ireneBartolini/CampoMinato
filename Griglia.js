'use strict';

class Griglia extends React.Component {

constructor(){
	super();
}

render(){

    const dim = this.props.dimensione;
    let mine= this.props.mine;
    let count= 0;
    // Array vuoto per contenere i pulsanti
    const pulsanti = [];

    for(let j=0; j<dim; j++)
    {
    for (let i = 0; i <dim; i++) {
     
     if(mine[count]==0)
     {
      pulsanti.push(
        <button id={count}  name={count} class="safe" onClick={this.props.scopriBomba}  > 
        </button> 
      );
       }
       else{
		   pulsanti.push(
        <button id={count}  name={count} class="bomb" onClick={this.props.scopriBomba}  > 
        </button> );
	   }
      count++;
    }
    pulsanti.push(<br></br>);
}
    return <div className="griglia-pulsanti">{pulsanti}</div>;
  }
}




