class Appartment{
    constructor(water,electricity,parking){
    this.water =water;
    this.electricity=electricity;
    this.parking=parking; 
    }
  }
  class Flat1 extends Appartment{
      rooms=3;
      access(){
          return "No of Rooms: "+this.rooms+"\n"+"Facilities: \n"+this.water+" "+this.electricity+" "+this.parking;
      }
  }
  class Flat2 extends Appartment{
      rooms=2;
      access(){
          return "No of Rooms: "+this.rooms+"\n"+"Facilities: \n"+this.water+" "+this.electricity+" "+this.parking;
      }
  }
  class Flat3 extends Appartment{
      rooms=1;
      access(){
          return "No of Rooms: "+this.rooms+"\n"+"Facilities: \n"+this.water+" "+this.electricity+" "+this.parking;
      }
  }
  const flat1 = new Flat1("100 Liters","24 Hours","Yes");
  const flat2 = new Flat2("50 Liters","24 Hours","No");
  const flat3 = new Flat2("20 Liters","24 Hours","No");
  console.log(flat1.access());
  
  
  
  