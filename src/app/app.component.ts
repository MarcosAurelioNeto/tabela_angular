import { Component } from '@angular/core';

//Componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projeto';

  //Declaração do Array people
  //O Array é alimentado com objetos javascript
  
  /*
  Cada item do array representa uma pessoa com as informações:

    1- Nome
    2- RU
    3- Curso
  */
  people: any[] =[
    {
      name:"Marcos Aurélio",
      ru:"3630190",
      course:"Tecnologia em ciêcia de Dados"
    },
    {
      name:"Flash Thompson",
      ru:"10",
      course:"Educação Fisíca"
    },
    {
      name:"Gwen Stacy",
      ru:"16",
      course:"Química"
    },
    {
      name:"Peter Park",
      ru:"16",
      course:"Química"
    },
    {
      name:"Harry Osborn",
      ru:"16",
      course:"Marketing Digital"