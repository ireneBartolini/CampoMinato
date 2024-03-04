'use strict';

class Conteggio extends React.Component {
 
  
  render() {
	  if(!this.props.gioco) //if gioco
	  {
      return (

            <div className="conteggio">
            <h4>Conteggio</h4>
            <label>vinte: {this.props.vinte} </label><br></br>
            <label>perse: {this.props.perse}</label><br></br>
            <label>punteggio: {this.props.punteggio}</label><br></br>
            <button  id="restart"  onClick={this.props.restart}>restart</button>
            </div>
      );
      }
      else{
		  return(
			 <div className="conteggio">
            <h4>Conteggio</h4>
            <label>vinte: {this.props.vinte} </label><br></br>
            <label>perse: {this.props.perse}</label><br></br>
            <label>punteggio: {this.props.punteggio}</label><br></br>
            </div>  
		  );
	  }
  }
}
