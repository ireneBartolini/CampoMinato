'use strict';

class App extends React.Component {
  constructor(){
        super();
        this.state = {
        dimensione: 0, 
        passi: 0,
        mine:[],
        vinte: 0,
        perse: 0,
        pesta:0,
        punteggio: 0,
        gioco:false,
       
        }
        this.onClick = this.onClick.bind(this); 
        this.scopriBomba= this.scopriBomba.bind(this);
        this.restart= this.restart.bind(this);
        }




onClick(e) {
       
       var d_ins= document.getElementById("d").value;
       var p_ins=document.getElementById("p").value;
      if(d_ins<=0)
      {
		  alert("Dimensione griglia deve essere >0");
		  
	  }
	  
	  else  if(p_ins<3)
      {
		  alert("Numero minimo di passi:3");
		  
	  }
        else{  
			e.target.disabled="true";
		console.log("procedo con configurazione cella");
         //configurazione griglia
         this.state.dimensione=d_ins;
         this.state.mine= [];
         
         for(let i=0; i<d_ins ; i++){
			 
			let m1 = Math.round( Math.random()*(d_ins-1));
			let m2 = Math.round( Math.random()*(d_ins-1));
			 
			 while(m1==m2){
				m2 = Math.round( Math.random()*this.state.dimensione); 
			 }
			
			 console.log("mine "+i+" "+m1+", "+m2);
			
			 for(let j=0; j<d_ins; j++)
			 {
				 if(j==m1 || j== m2)
				 {
					 this.state.mine.push(1);
				 }
				 else
				    this.state.mine.push(0);
			 }
			  
		 }


         this.setState({
           dimensione: d_ins,  
           mine: this.state.mine,
           passi: p_ins,
           gioco: true
           });
         
           } //else              
};
  
scopriBomba(e){
	
	if(this.state.gioco)
	{
	 let button= e.target;
	 button.classList.add('active');
	let pos= button.id;
	this.state.pesta++;
	console.log("passi: "+ this.state.pesta);
	
	
	if(this.state.mine[pos]==1)
	{
		alert("Partita terminata: percorso non completato");
		 this.setState({
			 gioco: false,
			 perse: this.state.perse +1
			 });
	}
	else{
		this.state.punteggio= this.state.punteggio+5;
		if(this.state.passi == this.state.pesta)
		{
		 alert("Partita terminata: percorso completato!");
		 this.setState({
			 punteggio: this.state.punteggio,
			 gioco: false,
			 vinte: this.state.vinte +1
			 });
		}
		else{
			this.setState({
			 punteggio: this.state.punteggio,
			 pesta: this.state.pesta++
			 });
		}
	}
}
};


restart(e)
{
let but= document.getElementById("inizia");
but.disabled=false;
this.setState({
			 mine:[],
			 dimensione: 0,
			 pesta: 0,
			 passi: 0
			 });
		        
}


  render() {
      return (

        < div className="griglia-body">
            <h1>CampoMinato</h1>
            <Configurazione onClick={this.onClick} />
          <br></br>
          <br></br>
          <Griglia dimensione={this.state.dimensione} mine={this.state.mine} scopriBomba={this.scopriBomba} />
          <div id="controllo" value=""></div>
           
           <Conteggio vinte={this.state.vinte} perse={this.state.perse} punteggio={this.state.punteggio} restart={this.restart} gioco={this.state.gioco}/>
</div>
      );
  }
}
