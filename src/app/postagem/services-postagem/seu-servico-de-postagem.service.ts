import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeuServicoDePostagem {
  private apiUrl = 'http://localhost:8000/postagem/';

  constructor(private http: HttpClient) {}

  adicionarPostagem(texto: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { texto: texto };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      tap((res) => {
        // Exibindo a resposta retornada no console para depuração
        console.log('Resposta do servidor:', res);
      })
    );
  }
}