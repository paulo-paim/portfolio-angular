import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knoledge',
  standalone: true,
  imports: [],
  templateUrl: './knoledge.component.html',
  styleUrl: './knoledge.component.scss'
})
export class KnoledgeComponent {

  public arrayKnoledge = signal<IKnowledge[]>([
    {
      src: "assets/icons/knowledge/html5.svg",
      alt: "icone de conhecimento de HTML5"
    },
    {
      src: "assets/icons/knowledge/css3.svg",
      alt: "icone de conhecimento de CSS 3"
    },
    {
      src: "assets/icons/knowledge/angular.svg",
      alt: "icone de conhecimento de Angular"
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: "icone de conhecimento de Javascript"
    },
    {
      src: "assets/icons/knowledge/java.svg",
      alt: "icone de conhecimento de Java"
    }
  ])

}
