class Animal2 {
  private name: string;
  constructor(theName: string) {this.name = theName;}
  move(meters: number){
    alert(this.name + " moved " + meters + "m.");
  }
}
