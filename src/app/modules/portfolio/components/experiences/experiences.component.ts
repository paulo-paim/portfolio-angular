import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong:"Analista de Arquitetura",
        p: "Rodobens SA | jul 2022 - fev 2024"
      },
      text:"<p>Durante meu período na Rodobens, de julho de 2022 a fevereiro de 2024, atuei como analista de arquitetura de sistemas. Era responsável pelo suporte e sustentação das integrações utilizadas na empresa, análise e resolução de problemas relacionadas as integrações e especificação de algumas API's para refatoração. Fiz parte de um time ágil que utilizava Scrum.</p>"
    },
    {
      summary:{
        strong:"Analista de Suporte em Informática",
        p: "SESI | jul 2019 - jun 2022"
      },
      text:"<p>Durante meu período no SESI, fui responsável pela organização dos laboratórios de informática da escola e pelo treinamento da equipe escolar no uso das tecnologias</p>"
    },
    {
      summary:{
        strong:"Estágio em Desenvolvimento Web",
        p: "GBD | jan 2016 - dez 202018"
      },
      text:"<p>Durante meu período no GBD, entre os anos de 2016 a 2018, atuei como como desenvolvedor full-stack em projetos voltados para web. Utilizei  tecnologias como Java, Spring, Hibernate, além de banco de dados PostgreSQL. Neste estágio, atuei também como lider de projetos</p>"
    }
  ])

}
