export class AppareilService {
    Appareils=[
        {
          Nom : 'Machine',
          Status : 'Eteint',
        },
        {
          Nom : 'tv',
          Status : 'Allumer',
        },
        {
          Nom : 'tel',
          Status : 'Eteint',
        }
      ]
    
    switchOnAll(){
        for (let appareil of this.Appareils){
            appareil.Status = 'Allumer'
        }
    }
    switchOffAll(){
        for (let appareil of this.Appareils){
            appareil.Status = 'Eteint'
        }
    }

    switchOnOne(index : number){
        this.Appareils[index].Status = 'Allumer';
    }
    switchOffOne (index: number) {
        this.Appareils[index].Status='Eteint';

    }
}
