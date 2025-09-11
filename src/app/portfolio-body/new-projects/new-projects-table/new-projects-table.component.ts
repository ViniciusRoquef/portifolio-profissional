import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-projects-table',
  templateUrl: './new-projects-table.component.html',
  styleUrls: ['./new-projects-table.component.scss']
})


export class NewProjectsTableComponent implements OnInit {

  projects: any[] = [
    { id: 1, name: 'Portfólio Angular',        status: 'ativo' },
    { id: 2, name: 'API Financeira',           status: 'em-andamento' },
    { id: 3, name: 'Dashboard Vendas',        status: 'ativo' },
    { id: 4, name: 'Sistema de Estoque',      status: 'inativo' },
    { id: 5, name: 'Landing Page Produto X',  status: 'em-andamento' }
  ];

  trackById = (_: number, p: any) => p.id;

  onView(id: number)  { console.log('ver', id); }
  onEdit(id: number)  { console.log('editar', id); }
  onRemove(id: number){ console.log('remover', id); }


  constructor() { }

  ngOnInit(): void {
  }
}
