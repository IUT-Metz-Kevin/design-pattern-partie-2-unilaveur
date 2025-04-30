//design pattern médiateur

interface Mediateur {
    notifier(expediteur: Avion, evenement: string): void;
}

class Avion {
    private mediateur: Mediateur;
    private id: string;

    constructor(id: string, mediateur: Mediateur) {
        this.id = id;
        this.mediateur = mediateur;
    }

    public demanderAtterrissage(): void {
        console.log(`${this.id} demande l'autorisation d'atterrir.`);
        this.mediateur.notifier(this, "demanderAtterrissage");
    }

    public demanderDecollage(): void {
        console.log(`${this.id} demande l'autorisation de décoller.`);
        this.mediateur.notifier(this, "demanderDecollage");
    }

    public atterrir(): void {
        console.log(`${this.id} atterrit.`);
    }

    public decoller(): void {
        console.log(`${this.id} décolle.`);
    }
}

// Classe représentant une piste d'atterrissage
class Piste {
    private id: string;
    private estDisponible: boolean = true;

    constructor(id: string) {
        this.id = id;
    }

    public occuper(): void {
        this.estDisponible = false;
        console.log(`La piste ${this.id} est maintenant occupée.`);
    }

    public liberer(): void {
        this.estDisponible = true;
        console.log(`La piste ${this.id} est maintenant libre.`);
    }

    public estLibre(): boolean {
        return this.estDisponible;
    }

    public obtenirId(): string {
        return this.id;
    }
}


class TourDeControle implements Mediateur {
    private pistes: Piste[] = [];

    public ajouterPiste(piste: Piste): void {
        this.pistes.push(piste);
    }

    public notifier(expediteur: Avion, evenement: string): void {
        if (evenement === "demanderAtterrissage") {
            const pisteDisponible = this.pistes.find((piste) => piste.estLibre());
            if (pisteDisponible) {
                console.log(`Tour de contrôle : autorisation d'atterrir accordée à ${expediteur}.`);
                pisteDisponible.occuper();
                expediteur.atterrir();
                pisteDisponible.liberer();
            } else {
                console.log(`Tour de contrôle : aucune piste disponible pour ${expediteur}.`);
            }
        } else if (evenement === "demanderDecollage") {
            const pisteDisponible = this.pistes.find((piste) => piste.estLibre());
            if (pisteDisponible) {
                console.log(`Tour de contrôle : autorisation de décoller accordée à ${expediteur}.`);
                pisteDisponible.occuper();
                expediteur.decoller();
                pisteDisponible.liberer();
            } else {
                console.log(`Tour de contrôle : aucune piste disponible pour ${expediteur}.`);
            }
        }
    }
}


const tourDeControle = new TourDeControle();
const piste1 = new Piste("Piste 1");
const piste2 = new Piste("Piste 2");

tourDeControle.ajouterPiste(piste1);
tourDeControle.ajouterPiste(piste2);

const avion1 = new Avion("Avion A1", tourDeControle);
const avion2 = new Avion("Avion A2", tourDeControle);

avion1.demanderAtterrissage();
avion2.demanderDecollage();