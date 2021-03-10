class Contenstant {
  constructor(){
    this.index=null
    this.name=null
this.answer=null;
  }

  getCount(){
    var contenstantRef = database.ref('contenstantCount');
    contenstantRef.on("value",function(data){
        contenstantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
        contenstantCount: count
    });
  }

  update(){
    var contenstantIndex = "players/player" + this.index;
    database.ref(contenstantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }
  static getcontenstantCountInfo(){
    var contenstantCountInfoRef=database.ref(players)
    contenstantCountInfoRef.on("value",(data)=>{
         allcontenstantCount=data.val()
       })
  }
}