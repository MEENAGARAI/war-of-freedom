class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Submit');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.name=null;
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("War of freedom");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 20, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.name = this.input.value();
        this.greeting.html("Hello " + this.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }