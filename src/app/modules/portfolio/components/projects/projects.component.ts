import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from './../../../../../../../Prof/curso-angular-portfolio/src/app/modules/portfolio/interface/IProjects.interface';
import { Component, inject, signal } from '@angular/core';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/gerenciador-tarefas.png",
      alt: "",
      title: "API Gerenciador de Tarefas",
      with: "140px",
      height: "170px",
      description: "<p>Desenvolvimento de uma API para controle e organização de tarefas e subtarefas. O sistema é composto por 3 tabelas (usuário, tarefa e subtarefa). Cada tarefa está relacionada com um único usuário e a tarefa pode possuir subtarefas, que consiste em divisões da tarefa. <br> Para este desenvolvimento, foram utilizadas a lingaugem Java e o  framework Spring (springboot e JPA).</p>",
      links: [
        {
          name: "GitHub",
          href: "https://github.com/paulo-paim/API-gerenciadorTarefas"
        }
      ]

    },
    {
      src: "assets/img/projects/via-cep.png",
      alt: "",
      title: "API Via-Cep",
      with: "140px",
      height: "170px",
      description: "<p>API que realiza a busca de um CEP informado. A busca é feita por meio do consumo de um recurso externo, o recurso viacep.com.br. A API retorna os dados obtidos pela consulta.</p>",
      links: [
        {
          name: "GitHub",
          href: "https://github.com/paulo-paim/API-ViaCep"
        }
      ]

    },
    {
      src: "assets/img/projects/auth.png",
      alt: "",
      title: "API Auth",
      with: "140px",
      height: "130px",
      description: "<p>API que realiza o processo de autenticação de um usuário no sistema. O desenvolvimento utiliza Spring Security e JWT Tokens. O sistema consiste de uma base de dados na qual os registros de usuário e senha ficam armazenados. O sistema verifica se os dados informados conferem com os disponíveis na base e libera o acesso a um endpoint liberado apenas para usuários autenticados. É emitido um token JWT no processo de autenticação. </p>",
      links: [
        {
          name: "GitHub",
          href: "https://github.com/paulo-paim/auth"
        }
      ]

    },
    {
      src: "assets/img/projects/ru.png",
      alt: "",
      title: "SRU",
      with: "120px",
      height: "110px",
      description: "<p>Projeto desenvolvido durante o período que estive na faculdade. Desenvolvido utilizando Java no backend e com HTML, CSS e Javascript no frontend. O sistema permite os alunos realizarem a reserva de tickets para almoço no restaurante universitário do Ibilce/Unesp de São José do Rio Preto.</p>",
      links: [
        {
          name: "Ver Site",
          href: "https://sru.ibilce.unesp.br/"
        }
      ]

    }
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
