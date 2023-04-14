const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;
function setup() {
  createCanvas(650, 450);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  
  population = 200;
  for (let i=0; i<population;i++){
    flock.push(new Boid());
  }
}

function draw() {
  background(255);
  line (400,0,400,450)
  text("Aligment : ",10,440)
  text("Cohesion : ",140,440)
  text("Separation : ",270,440)
  
  text("Tugas MK MA2213 Visualisasi Dalam Sains",400,10)
  text("Simulasi Flocking",400,30)
  text("Nama:Roissatun Hasanah ",400,60)
  text("NIM:121160002 ",400,75)
  text("Prodi:Matematika ",400,90)
  
  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }
}