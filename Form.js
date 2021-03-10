class Form {
    constructor() {
      this.input=createInput("name")
      this.input2=createInput("enter the correct option")
      this.title=createElement('h2')
      this.question=createElement('h3')
      this.option1=createElement('h4')
      this.option2=createElement('h4')
      this.option3=createElement('h4')
      this.option4=createElement('h4')
      this.submit=createButton('submit')
    }
  hide(){
    this.input.hide();
  }

  display(){
  
    this.title.html("My Quiz Game");
    this.title.position(350, 0);
    this.input.position(300,50)
    this.input2.position(300,90);
    this.question.html("The World Largest desert is ?")
    this.question.position(150,120)

    this.option1.html("A: Thar")
    this.option1.position(150,140)

    this.option2.html("B: Kalahari")
    this.option2.position(150,160)

    this.option3.html("C: Sahara")
    this.option3.position(150,180)

    this.option4.html("D. Sonoran")
    this.option4.position(150,200)
    
    this.submit.position(300,120)
    
    this.submit.mousePressed(()=>{
      this.input.hide();
      this.input2.hide();
      this.submit.hide()
       contenstant.name = this.input.value();
      contenstant.answer=this.input2.value();
       contenstantCount+=1;
       contenstant.index=contenstantCount
       contenstant.update()
      contenstant.updateCount(contenstantCount);
    });

  }
}