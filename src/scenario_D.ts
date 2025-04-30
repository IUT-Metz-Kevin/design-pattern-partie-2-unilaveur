// pattern stratégie

interface StrategieDeTri {
    trier(vetements: string[]): string[];
  }
  
  
  class StrategieDeTriParCouleur implements StrategieDeTri {
    trier(vetements: string[]): string[] {
      console.log("Tri des vêtements par couleur...");
     
      return vetements.sort(); 
    }
  }
  
  
  class StrategieDeTriParTissu implements StrategieDeTri {
    trier(vetements: string[]): string[] {
      console.log("Tri des vêtements par type de tissu...");
      
      return vetements.sort(); 
    }
  }
  
  
  class StrategieDeTriParNiveauDeSalete implements StrategieDeTri {
    trier(vetements: string[]): string[] {
      console.log("Tri des vêtements par niveau de saleté...");
      
      return vetements.sort(); 
    }
  }
  
  class MachineALaver {
    private strategieDeTri: StrategieDeTri;
  
    constructor(strategieDeTri: StrategieDeTri) {
      this.strategieDeTri = strategieDeTri;
    }
  
    definirStrategieDeTri(strategieDeTri: StrategieDeTri): void {
      this.strategieDeTri = strategieDeTri;
    }
  
    trierVetements(vetements: string[]): string[] {
      return this.strategieDeTri.trier(vetements);
    }
  }
  
  const vetements = ["T-shirt blanc", "Jean bleu", "Pull noir"];
  
  const machineALaver = new MachineALaver(new StrategieDeTriParCouleur());
  machineALaver.trierVetements(vetements);
  
  machineALaver.definirStrategieDeTri(new StrategieDeTriParTissu());
  machineALaver.trierVetements(vetements);
  
  machineALaver.definirStrategieDeTri(new StrategieDeTriParNiveauDeSalete());
  machineALaver.trierVetements(vetements);