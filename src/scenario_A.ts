//design pattern état

interface State {
    attack(): void;
    move(): void;
    jump(): void;
  }
  
  class Character {
    private state: State;
  
    constructor(initialState: State) {
      this.state = initialState;
    }
  
    setState(state: State): void {
      this.state = state;
    }
  
    attack(): void {
      this.state.attack();
    }
  
    move(): void {
      this.state.move();
    }
  
    jump(): void {
      this.state.jump();
    }
  }
  

  class IdleState implements State {
    attack(): void {
      console.log("Le personnage attaque depuis l'état IDLE.");
    }
  
    move(): void {
      console.log("Le personnage commence à se déplacer.");
    }
  
    jump(): void {
      console.log("Le personnage saute depuis l'état IDLE.");
    }
  }
  
  class AttackingState implements State {
    attack(): void {
      console.log("Le personnage continue d'attaquer.");
    }
  
    move(): void {
      console.log("Impossible de se déplacer en attaquant.");
    }
  
    jump(): void {
      console.log("Impossible de sauter en attaquant.");
    }
  }
  
  class MovingState implements State {
    attack(): void {
      console.log("Le personnage attaque en se déplaçant.");
    }
  
    move(): void {
      console.log("Le personnage continue de se déplacer.");
    }
  
    jump(): void {
      console.log("Le personnage saute en se déplaçant.");
    }
  }
  
  class StunnedState implements State {
    attack(): void {
      console.log("Le personnage est étourdi et ne peut pas attaquer.");
    }
  
    move(): void {
      console.log("Le personnage est étourdi et ne peut pas se déplacer.");
    }
  
    jump(): void {
      console.log("Le personnage est étourdi et ne peut pas sauter.");
    }
  }
  

  const character = new Character(new IdleState());
  
  character.attack(); 
  character.setState(new MovingState());
  character.move(); 
  character.jump(); 
  character.setState(new StunnedState());
  character.attack(); 