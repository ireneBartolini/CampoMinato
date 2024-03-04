a'use strict';

class Configurazione extends React.Component {
 
  
  render() {
	  
	 
      return (

            <div className="configuration">
            <h4>Configurazione</h4>
            <label>inserisci dimensione della griglia </label><br></br>
            <input type="test" id="d" /><br></br>
            <label>inserisci numero di passi</label><br></br>
            <input type="test" id="p" /><br></br>
            <button id="inizia"  value="inizia" onClick={this.props.onClick}>inizia</button>
            </div>

      );
     
}
}
