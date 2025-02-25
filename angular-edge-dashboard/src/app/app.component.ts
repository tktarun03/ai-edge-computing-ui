import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Edge Computing UI Dashboard</h1>
    <div class="dashboard">
      <edge-monitor></edge-monitor>
      <wasm-edge-optimizer></wasm-edge-optimizer>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }