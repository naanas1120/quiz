class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
            
        })

    }
    update(state){
database.ref('/').update({
    gameState: state
})
    }

async start(){
  
    if(gameState === 0){

        contenstant = new Contenstant();
      var contenstantCountRef= await database.ref('contenstantCount').once("value")
      if(contenstantCountRef.exists()){
        contenstantCount=contenstantCountRef.val()
        contenstant.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){
    textSize(30)
    text(" Game Over ",120,100)
    contenstant.getcontenstantCountInfo()
  }
}
